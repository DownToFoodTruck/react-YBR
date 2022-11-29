import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {TruckDisplay} from "./TruckDisplay.js";

export default function TruckSelector() {
  const [value, setValue] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");


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
      if (setValue != null) {
        return;
      }
  }
  fetchSelectionList();

  function tagSelected(param) {
  
    async function executeQuery() {
      try {
        const url = "/api?tag=" + param;
        const rawRes = await fetch(url);
        const rawResJSON = await rawRes.json();

        const nameReturn = rawResJSON.map(e => (
          {
            name: e.Name
          }
        ));
        // console.log(nameReturn);
        setName(nameReturn) //grabbing name info

        const imgReturn = rawResJSON.map(e => (
          {
            img: e.Profile
          }
        ));
        // console.log(imgReturn);
        setImg(imgReturn) //grabbing img info


      } catch (err) {
        console.log(err);
      }
    }
executeQuery()
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
      <TruckDisplay name={name} img={img}/>
    </div>
  );
}