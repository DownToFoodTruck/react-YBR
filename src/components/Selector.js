import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap'; 

export default function Selector() {

  // const [value, setValue] = useState(""); 

  //   //POPULATE TAG DROPDOWN
  //   //Make set, append i for i in truck categories, jam into tag drop
  //   async function selectionList() {

  //     try{
  //       const url = "xxxxxxxxxx" + values
  //       const rawRes = await fetch(url)
  //       const rawResJSON = await rawRes.json()
         
  //      setValue(rawResJSON.title)
  //      } 
       
  //      catch {
  //        console.log('err')
  //        setShowModal(false)
  //        setError("There are no recipies that fit your search")
  //      }

  //   for (let i = 0; i < findUniqueTruckTags.length; i++) {
  //     $('#truck-selector').append{' + findUniqueTruckTags[i] + '</Dropdown.Item>');
  //     sortList()
  //   }
  // }

  return(
        <div className="selector"> 

                <Container className='selector-container'>  
                <DropdownButton id="truck-selector" title="Cuisine">  
                    {/* <Dropdown.Item name="selector-value" value={value}> </Dropdown.Item>    */}
                </DropdownButton>  
                </Container>  

        </div>
  )
};