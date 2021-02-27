import React, { useState } from "react";

function NewPlantForm({plants, setPlants}) {

  const [plantFormState, setPlantFormState] = useState({name: "", image: "", price: ""})

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(plantFormState)
  }) 
    .then(response => response.json())
    .then(plantData => {
      const newPlants = [...plants, plantData]
      setPlants(newPlants)
      setPlantFormState({name: "", image: "", price: ""})
    })
  }

  function updateFormState(event){
    const updatedFormState = {...plantFormState}
    updatedFormState[event.target.name] = event.target.name === "price" ? parseFloat(event.target.value) : event.target.value
    setPlantFormState(updatedFormState)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantFormState.name} onChange={updateFormState}/>
        <input type="text" name="image" placeholder="Image URL" value={plantFormState.image} onChange={updateFormState}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantFormState.price} onChange={updateFormState}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
