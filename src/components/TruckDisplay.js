import React, {useState} from 'react';
import {PantryModal} from './PantryModal';


export default function FoodDisplay() {
  const [showModal, setShowModal] = useState(false); //set to false default
  const [title, setTitle] = useState(""); 
  const [ingredients, setIngredients] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [prep, setPrep] = useState("");
  const [time, setTime] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [error, setError] = useState("");
  
  
  function setShowModalHelper() {
	  setShowModal(false)
  }
  
  
  async function sendIngredients() {
	
	let values = []
	let checkboxes = document.querySelectorAll('input:checked')
	  
	  checkboxes.forEach((checkbox) => { 
	  values.push(checkbox.value)
	  })
	  
	  values.join(',')
	  console.log(values)
	  
		
	   try{
		 const url = "/api?ingredients=" + values
		 const rawRes = await fetch(url)
		 const rawResJSON = await rawRes.json()
		  
		setTitle(rawResJSON.title)
		setTime(rawResJSON.time)
		setImgSrc(rawResJSON.img)
		setIngredients(rawResJSON.ingredients)
		setNutrition(rawResJSON.nutrition)
		setPrep(rawResJSON.prep)
		setError("")
		setShowModal(true) //setting modal
		} 
		
		catch {
		  console.log('err')
		  setShowModal(false)
		  setError("There are no recipies that fit your search")
		}
	}
	  
	
	return (
		<div>

				<h2>Protein:</h2>
				<div className = "pantry-wrapper">
				
					<div className="pantry-cont">
						  <input type="checkbox" id="chicken" alt="N/A" value="chicken"/>
						  <label htmlFor="chicken">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/chicken.png" />
						  </label>
					</div>

					<div className="pantry-cont">
					  <input type="checkbox" id="beef" alt="N/A" value="beef" />
					  <label htmlFor="beef">
					  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/beef.png" />
					  </label>
					</div>
				
					<div className="pantry-cont">

						  <input type="checkbox" id="fish" alt="N/A" value="fish" />
						<label htmlFor="fish">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/fish.png" />
						</label>
					</div>
					
					<div className="pantry-cont">

						  <input type="checkbox" id="eggs" alt="N/A" value="eggs"/>
						<label htmlFor="eggs">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/eggs.png" />
						</label>

					</div>
				</div>
			
			
			<h2>Vegetables:</h2>
				<div className = "pantry-wrapper">
					<div className="pantry-cont">
				 
						<input type="checkbox" id="scallions" alt="N/A" value="scallions"/>
						<label htmlFor="scallions">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/scallions.png" />
						</label>
					</div>

					 

					<div className="pantry-cont">
						<input type="checkbox" id="broccoli" alt="N/A" value="broccoli"/>
						<label htmlFor="broccoli">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/broccoli.png" />
						</label>
					</div>

				 

					<div className="pantry-cont">
						<input type="checkbox" id="carrots" alt="N/A" value="carrots"/>
						<label htmlFor="carrots">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/carrot.png" />
						</label>
					</div>

				

					<div className="pantry-cont">
						<input type="checkbox" id="onions" alt="N/A" value="onions"/>
						<label htmlFor="onions">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/onion.png" />
						</label>
					</div>

										  

					<div className="pantry-cont">
						 <input type="checkbox" id="mushrooms" alt="N/A" value="mushrooms"/>
						 <label htmlFor="mushrooms">
						 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/mushrooms.png" />
						 </label>
					</div>

										   

					<div className="pantry-cont">
						<input type="checkbox" id="bell-peppers" alt="N/A" value="bell-peppers"/>
						<label htmlFor="bell-peppers">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/bell-pepper.png" />
						</label>
					</div>
				</div>

			
				<h2>Starches:</h2>
				  
				<div className = "pantry-wrapper">
					<div className="pantry-cont">
					  
						<input type="checkbox" id="potatoes" alt="N/A" value="potatoes"/>
						<label htmlFor="potatoes">
						<img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/potato.png" />
						</label>
					</div>

					  
					<div className="pantry-cont">
						 <input type="checkbox" id="noodles" alt="N/A" value="noodles"/>
						 <label htmlFor="noodles">
						 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/noodle.png" />
						 </label>
					</div>
				  
					<div className="pantry-cont">
						 <input type="checkbox" id="rice" alt="N/A" value="rice"/>
						 <label htmlFor="rice">
						 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/rice.png" />
						 </label>
					</div>
				</div>

			  
			 
				   <h2>Fats:</h2>
				   
				<div className = "pantry-wrapper">
				   <div className="pantry-cont">
						  <input type="checkbox" id="butter" alt="N/A" value="butter"/>
						  <label htmlFor="butter">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/butter.png" />
						  </label>
					</div>
					   
					<div className="pantry-cont">
							 <input type="checkbox" id="cheese" alt="N/A" value="cheese"/>
							 <label htmlFor="cheese">
							 <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/cheese.png" />
							 </label>
					</div>
					   
					<div className="pantry-cont">
						  <input type="checkbox" id="vegetable-oil" alt="N/A" value="vegetable-oil"/>
						  <label htmlFor="vegetable-oil">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/vegetable-oil1.png" />
						  </label>
					</div>

					   
					<div className="pantry-cont">
						  <input type="checkbox" id="olive-oil" alt="N/A" value="olive-oil"/>
						  <label htmlFor="olive-oil">
						  <img src="https://raw.githubusercontent.com/Pantrillo/Pantrillo/main/src/img/olive.png" />
						  </label>
					   </div>
				</div>
				
			<button className="select-btn" onClick={functionName}>Select</button>
			
			<div id="error">{error}</div>
			
			{showModal ? <PantryModal showModal={showModal} setShowModalHelper={setShowModalHelper} title={title} time={time} nutrition={nutrition} prep={prep} ingredients={ingredients} imgSrc={imgSrc}/> : null}
	
	</div>	
)}