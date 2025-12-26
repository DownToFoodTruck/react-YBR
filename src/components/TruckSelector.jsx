import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { TruckDisplay } from "./TruckDisplay.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../redux/slices/tagsSlice';
import { fetchTrucksByTag } from '../redux/slices/truckSliceNew';

export default function TruckSelector() {
  const dispatch = useDispatch();
  const tags = useSelector((s) => s.tags?.list || []);
  const loading = useSelector((s) => s.tags?.loading);
  const currentTag = useSelector((s) => s.trucks?.currentTag);
  const byTag = useSelector((s) => s.trucks?.byTag || {});
  const entities = useSelector((s) => s.trucks?.entities || {});

  useEffect(() => {
    // load tags once
    dispatch(fetchTags());
  }, [dispatch]);

  const tagSelected = (tag) => {
    dispatch(fetchTrucksByTag(tag));
  };

  const trucksForCurrentTag = (tag) => {
    const ids = byTag[tag] || [];
    return ids.map((id) => entities[id]).filter(Boolean);
  };

  return (
    <div className="truck-body">
      <div className="selector">
        <Container className="selector-container">
          <DropdownButton id="truck-selector" title={loading ? 'Loading...' : 'Cuisine'}>
            {tags.map((e) => (
              <DropdownItem
                key={e}
                name="selector-value"
                value={e}
                onClick={() => tagSelected(e)}
              >
                {e}
              </DropdownItem>
            ))}
          </DropdownButton>
        </Container>
      </div>

      <div className="truck-display">
        {trucksForCurrentTag(currentTag || '').map((e) => (
          <TruckDisplay
            key={e._id || e.id}
            name={e}
          />
        ))}
      </div>
    </div>
  );
}
