import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap'; 

export default function Selector() {

    //POPULATE TAG DROPDOWN
    //Make set, append i for i in truck categories, jam into tag drop
    var select1 = document.getElementById("tab-drop");
    for (var i = 0; i < findUniqueTruckTags.length; i++) {
      $('#tab-drop').append('<option>' + findUniqueTruckTags[i] + '</option>');
      sortList()
    }

  return(
        <div className="selector"> 

                <Container className='selector-container'>  
                <DropdownButton id="truck-selector" title="Cuisine">  
                    <Dropdown.Item value=""> </Dropdown.Item>   
                </DropdownButton>  
                </Container>  

        </div>
  )
};