import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap'; 

export default function Selector() {

  const [value, setValue] = useState(""); 
  const [error, setError] = useState("")

    //POPULATE TAG DROPDOWN
    //Make set, append i for i in truck categories, jam into tag drop
    async function fetchSelectionList() {

          try{
          const url = "/apiTAG"
          const rawRes = await fetch(url)
          const rawResJSON = await rawRes.json()

          setValue(rawResJSON)
          console.log(rawResJSON)
          }
          catch(err) {
            console.log(err)
            setError("Nothing Retrieved")
          }
          
      }
  fetchSelectionList()

  return(
        <div className="selector"> 

                <Container className='selector-container'>  
                <DropdownButton id="truck-selector" title="Cuisine">  
                    <Dropdown.Item name="selector-value" value={value}>{value}{error}</Dropdown.Item>   
                </DropdownButton>  
                </Container>  

        </div>
  )
};