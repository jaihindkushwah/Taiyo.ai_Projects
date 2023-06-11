import React, { useEffect, useState } from 'react';
import {MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';




const MapComponent = () => {
    const [countriesData,setCountriesData]=useState([]);
    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/countries')
        .then((res)=>res.json())
        .then((res)=>{setCountriesData([...res])});
    },[])

    const customIcon= new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/512/819/819814.png",
        iconSize:[30,30]
    })

  return (
    <Map center={[0, 0]} zoom={2} className='z-10 sm:h-[450px] w-full sm:bg-slate-400 text-red-50'>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData.map((country) => (
        <Marker position={[country.countryInfo.lat, country.countryInfo.long]} icon={customIcon} key={country.name}>
          <Popup>
            <div>
              <h2>Country : { country.country}</h2>
              <p>Total Active Cases: {country.active}</p>
              <p>Total Recovered Cases: {country.recovered}</p>
              <p>Total Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
    // </div>
  );
};

export default MapComponent;
