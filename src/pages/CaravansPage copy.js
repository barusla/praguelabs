import React, { useEffect, useState } from 'react';
import CaravanComponent from '../components/CaravanComponent';
import {
  Caravans,
  CaravansSection,
} from '../components/CaravanComponent/CaravanElements';
import Search from '../components/Search';

const CaravansPage = () => {
  const [filteredCaravans, setFilteredCaravans] = useState([]);

  useEffect(() => {
    fetchCaravans();
  }, []);

  const filterCaravans = () => {
    let newFilteredCaravans = [];
    for (const [type, isClicked] of Object.entries(filter)) {
      if (isClicked) {
        newFilteredCaravans.push(
          ...caravans.filter((caravan) => caravan.vehicleType == type)
        );
      }
    }
    setFilteredCaravans(newFilteredCaravans);
  };

  const [caravans, setCaravans] = useState([]);
  const [filter, setFilter] = useState({
    Campervan: false,
    BuiltIn: false,
    Intergrated: false,
    Alcove: false,
  });
  function setOneFilter(filterName, value) {
    filter[filterName] = value;
    setFilter(filter);
    console.log(filter);
    filterCaravans();
  }
  const fetchCaravans = async () => {
    const caravansData = await fetch(`http://127.0.0.1:3000/api/data`);
    const caravansJson = await caravansData.json();
    setCaravans(caravansJson.items);
    setFilteredCaravans(caravansJson.items);
  };
  return (
    <div>
      <Search setOneFilter={setOneFilter} />
      <CaravansSection>
        <Caravans>
          {filteredCaravans.map((caravan, idx) =>
            CaravanComponent(caravan, idx)
          )}
        </Caravans>
      </CaravansSection>
    </div>
  );
};

export default CaravansPage;
