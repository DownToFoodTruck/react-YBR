import {
  What3wordsAutosuggest,
  What3wordsMap,
} from "@what3words/react-components";

const API_KEY = "M5M30AOV";
const MAP_API_KEY = "YOUR-GOOGLE-API-KEY";

export default function Map() {
  return (
    <What3wordsMap
      api_key={API_KEY}
      map_api_key={MAP_API_KEY}
      zoom={18}
      selected_zoom={20}
      lng={-0.114637}
      lat={51.454843}
      search_control_position={2}
      map_type_control={true}
      zoom_control={true}
      fullscreen_control={true}
      fullscreen_control_position={3}
      current_location_control_position={9}
      disable_default_ui={true}
      map_type_id="satellite"
      words="gorging.dusters.appreciated"
    >
      <div slot="map" style={{ width: "100%", height: "97vh" }} />
      <div slot="search-control" style={{ margin: "10px 0 0 10px" }}>
        <What3wordsAutosuggest>
          <input
            type="text"
            placeholder="Find your address"
            style={{ width: "300px" }}
            autoComplete="off"
          />
        </What3wordsAutosuggest>
      </div>
    </What3wordsMap>
  );
}
