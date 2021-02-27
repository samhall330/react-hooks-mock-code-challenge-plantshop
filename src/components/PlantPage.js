import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {

const [search, setSearchQuery] = useState("")

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search search={search} setSearchQuery={setSearchQuery}/>
      <PlantList plants={plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))}/>
    </main>
  );
}

export default PlantPage;
