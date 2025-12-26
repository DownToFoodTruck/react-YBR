import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching trucks by tag
export const fetchTrucksByTag = createAsyncThunk(
  'trucks/fetchByTag',
  async (tag, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api?tag=${encodeURIComponent(tag)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch trucks');
      }
      const data = await response.json();
      return { tag, trucks: data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for posting geolocation
export const postGeolocation = createAsyncThunk(
  'trucks/postGeolocation',
  async ({ truck_id, truck_name, latitude, longitude, seenTms }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/geolocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          truck_id,
          truck_name,
          latitude,
          longitude,
          seenTms,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to post geolocation');
      }

      const data = await response.json();
      return { truck_id, geolocation: data.geolocation || null };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Utility: produce a normalized truck entity with expected keys and defaults
const makeTruckEntity = (raw = {}) => {
  return {
    _id: raw._id || raw.id || null,
    Name: raw.Name || raw.name || '',
    Address: raw.Address || '',
    Description: raw.Description || '',
    Email: raw.Email || '',
    Hours_of_Operation: raw.Hours_of_Operation || raw.Hours || '',
    P1: raw.P1 || '',
    P2: raw.P2 || '',
    P3: raw.P3 || '',
    PermitName: raw.PermitName || '',
    Phone: raw.Phone || '',
    Profile: raw.Profile || '',
    Site: raw.Site || '',
    Tags: raw.Tags || '',
    geolocationHistory: Array.isArray(raw.geolocationHistory) ? raw.geolocationHistory.slice() : [],
    lastLat: raw.lastLat || null,
    lastLong: raw.lastLong || null,
    lastSeenTms: raw.lastSeenTms || null,
  };
};

const initialState = {
  entities: {}, // { [id]: truck }
  ids: [],
  byTag: {}, // tagName -> [ids]
  currentTag: null,
  loading: false,
  error: null,
  lastUpdated: null,
  geopostStatus: 'idle',
  geopostError: null,
};

const truckSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    upsertTruck(state, action) {
      const raw = action.payload;
      const truck = makeTruckEntity(raw);
      if (!truck._id) return;
      if (!state.entities[truck._id]) {
        state.ids.push(truck._id);
      }
      state.entities[truck._id] = truck;
    },
    upsertMany(state, action) {
      const list = action.payload || [];
      list.forEach((raw) => {
        const truck = makeTruckEntity(raw);
        if (!truck._id) return;
        if (!state.entities[truck._id]) {
          state.ids.push(truck._id);
        }
        state.entities[truck._id] = truck;
      });
    },
    setTrucksForTag(state, action) {
      const { tag, trucks } = action.payload;
      state.byTag[tag] = trucks.map((t) => (t._id || t.id));
      // Also upsert these trucks into entities
      trucks.forEach((t) => {
        const truck = makeTruckEntity(t);
        if (!truck._id) return;
        if (!state.entities[truck._id]) state.ids.push(truck._id);
        state.entities[truck._id] = truck;
      });
      state.currentTag = tag;
      state.lastUpdated = new Date().toISOString();
    },
    removeTruck(state, action) {
      const id = action.payload;
      if (state.entities[id]) {
        delete state.entities[id];
        state.ids = state.ids.filter((x) => x !== id);
        // remove from byTag lists
        Object.keys(state.byTag).forEach((tag) => {
          state.byTag[tag] = state.byTag[tag].filter((x) => x !== id);
        });
      }
    },
    clearAll(state) {
      Object.assign(state, initialState);
    },
    clearGeopostStatus(state) {
      state.geopostStatus = 'idle';
      state.geopostError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucksByTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrucksByTag.fulfilled, (state, action) => {
        state.loading = false;
        const { tag, trucks } = action.payload;
        // Normalize and upsert
        trucks.forEach((t) => {
          const truck = makeTruckEntity(t);
          if (!truck._id) return;
          if (!state.entities[truck._id]) state.ids.push(truck._id);
          state.entities[truck._id] = truck;
        });
        state.byTag[tag] = trucks.map((t) => (t._id || t.id));
        state.currentTag = tag;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchTrucksByTag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postGeolocation.pending, (state) => {
        state.geopostStatus = 'pending';
        state.geopostError = null;
      })
      .addCase(postGeolocation.fulfilled, (state, action) => {
        state.geopostStatus = 'succeeded';
        const id = action.payload.truck_id;
        const geo = action.payload.geolocation;
        if (id && state.entities[id] && geo) {
          // append to history
          const ent = state.entities[id];
          ent.geolocationHistory = ent.geolocationHistory || [];
          ent.geolocationHistory.push({
            seenTms: geo.seenTms || new Date().toISOString(),
            lat: geo.lat != null ? geo.lat : geo.latitude,
            long: geo.long != null ? geo.long : geo.longitude,
          });
          ent.lastSeenTms = geo.seenTms || new Date().toISOString();
          ent.lastLat = geo.lat != null ? geo.lat : geo.latitude;
          ent.lastLong = geo.long != null ? geo.long : geo.longitude;
        }
      })
      .addCase(postGeolocation.rejected, (state, action) => {
        state.geopostStatus = 'failed';
        state.geopostError = action.payload;
      });
  },
});

export const { upsertTruck, upsertMany, setTrucksForTag, removeTruck, clearAll, clearGeopostStatus } = truckSlice.actions;
export default truckSlice.reducer;