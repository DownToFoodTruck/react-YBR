import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import tagSelected from "./TruckDisplay.js";

export default function Selector() {
  const [value, setValue] = useState([]);
  const [error, setError] = useState("");

  //POPULATE TAG DROPDOWN
  //Make set, append i for i in truck categories, jam into tag drop
  async function fetchSelectionList() {
    try {
      const url = "/apiTAG";
      const rawRes = await fetch(url);
      const rawResJSON = await rawRes.json();

      setValue(rawResJSON);
      // console.log(rawResJSON);
    } catch (err) {
      console.log(err);
      setError("Nothing Retrieved");
    }
  }
  fetchSelectionList();

  return (
    <div className="selector">
      <Container className="selector-container">
        <DropdownButton id="truck-selector" title="Cuisine">
          {value.map((e) => (
            <DropdownItem
              name="selector-value"
              value={e}
              onClick={() => {
                tagSelected(e);
              }}
            >
              {e}
            </DropdownItem>
          ))}
        </DropdownButton>
      </Container>
    </div>
  );
}
