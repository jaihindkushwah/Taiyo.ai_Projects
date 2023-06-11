import React, { useEffect, useState } from 'react';
import {MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet';




const MapComponent = () => {
    const [countriesData,setCountriesData]=useState([]);
    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/countries')
        .then((res)=>res.json())
        .then((res)=>{setCountriesData([...res])});
    },[])


  return (
    <div className='w-3/5 h-4/5'>
        <Map center={[0, 0]} zoom={2}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData.map((country) => (
        <Marker position={[country.countryInfo.lat, country.countryInfo.long]} key={country.name}>
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Total Active Cases: {country.active}</p>
              <p>Total Recovered Cases: {country.recovered}</p>
              <p>Total Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
    </div>
  );
};

export default MapComponent;
