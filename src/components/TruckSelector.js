import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import TruckDisplay from "./TruckDisplay.js";

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
    } catch (err) {
      console.log(err);
      setError("Nothing Retrieved");
    }
  }
  fetchSelectionList();

  function tagSelected(param) {
    async function executeQuery() {
      try {
        const url = "/api?tag=" + param;
        const rawRes = await fetch(url);
        let product = await rawRes.json();
        console.log(product);
        // return product;
      } catch (err) {
        console.log(err);
      }
    }

    async function returnQuery() {
      const queryResult = await executeQuery();
      console.log(queryResult);
    }
    executeQuery();
  }

  return (
    <div className="truck-selector-body">
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
                {e} {error}
              </DropdownItem>
            ))}
          </DropdownButton>
        </Container>
      </div>
      <TruckDisplay />
    </div>
  );
}
