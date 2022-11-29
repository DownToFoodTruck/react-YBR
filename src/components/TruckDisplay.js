import React from "react"

export const TruckDisplay = ({name, img}) => {
console.log(name)
console.log(img)

return(
  <div className="truck-display">
    
    <article className="truck-article">
			<img className="truck-img" src="" alt="Food Truck Image" />
      <h2>NAME</h2>
    </article>

  </div>
)
}