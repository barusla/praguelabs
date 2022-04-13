import React, { useEffect, useState } from 'react';
import LoadMoreButton from '../components/ButtonComponents/LoadMoreButton';
import CaravanComponent from '../components/CaravanComponent';
import {
  Caravans,
  CaravansSection,
} from '../components/CaravanComponent/CaravanElements';
import Search from '../components/Search';

const CaravansPage = () => {
  const [filteredCaravans, setFilteredCaravans] = useState([]);
  const [caravans, setCaravans] = useState([]);
  const [isLoadAllClicked, setIsLoadAllClicked] = useState(false);
  const [reservationFilter, setReservationFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState([100, 10000]);
  const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    fetchCaravans();
  }, [allVisible]);

  const [filter, setFilter] = useState({
    Campervan: false,
    BuiltIn: false,
    Intergrated: false,
    Alcove: false,
  });

  useEffect(() => {
    filterCaravans();
  }, [priceFilter, filter, reservationFilter, isLoadAllClicked, caravans]);

  const filterCaravans = () => {
    let newFilteredCaravans = [];
    for (const [type, isClicked] of Object.entries(filter)) {
      if (isClicked) {
        newFilteredCaravans.push(
          ...caravans.filter((caravan) => caravan.vehicleType == type)
        );
      }
    }

    if (newFilteredCaravans.length == 0) {
      newFilteredCaravans = caravans;
    }
    newFilteredCaravans = newFilteredCaravans.filter(
      (caravan) => caravan.price >= priceFilter[0]
    );

    newFilteredCaravans = newFilteredCaravans.filter(
      (caravan) => caravan.price <= priceFilter[1]
    );
    if (reservationFilter) {
      newFilteredCaravans = newFilteredCaravans.filter(
        (caravan) => caravan.instantBookable == reservationFilter
      );
    }

    if (newFilteredCaravans.length <= 6) {
      setAllVisible(true);
      setIsLoadAllClicked(false);
    } else {
      setAllVisible(false);
    }
    if (!isLoadAllClicked) {
      newFilteredCaravans = newFilteredCaravans.slice(0, 6);
    }
    setFilteredCaravans(newFilteredCaravans);
  };

  function setReservation() {
    setReservationFilter(!reservationFilter);
  }

  function setPrice(priceArray) {
    setPriceFilter(priceArray);
    // filterCaravans();
  }

  function setOneFilter(filterName, value) {
    // filter[filterName] = value;
    setFilter({ ...filter, [filterName]: value });
    // filterCaravans();
  }

  function loadAll() {
    setIsLoadAllClicked(!isLoadAllClicked);
  }

  const fetchCaravans = async () => {
    const caravansData = await fetch(`http://127.0.0.1:3000/api/data`);
    const caravansJson = await caravansData.json();
    setCaravans(caravansJson.items);
    filterCaravans();
    // setAllVisible(false);
  };

  return (
    <div>
      <Search
        setOneFilter={setOneFilter}
        setPrice={setPrice}
        setReservation={setReservation}
      />
      <CaravansSection>
        <Caravans>
          {filteredCaravans.map((caravan, idx) =>
            CaravanComponent(caravan, idx)
          )}
        </Caravans>
        {allVisible ? null : <LoadMoreButton loadAll={loadAll} />}
        {/* {loadAllCaravans ? (
          <Caravans>
            {filteredCaravans
              .slice(6, undefined)
              .map((caravan, idx) => CaravanComponent(caravan, idx))}
          </Caravans>
        ) : null} */}
      </CaravansSection>
    </div>
  );
};

export default CaravansPage;
