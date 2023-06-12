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
    <Map center={[0, 0]} zoom={2} className='z-10 sm:h-[450px] h-[240px]  w-full sm:bg-slate-400 text-red-50'>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData.map((country) => (
        <Marker position={[country.countryInfo.lat, country.countryInfo.long]} icon={customIcon} key={country.name}>
          <Popup >
            <div className='text-[13px]'>
              <div className='flex items-center justify-center m-1 mb-[12px]'><img src={country.countryInfo.flag} className='border-[2px] border-x-zinc-400 p-[2px] ' width={60} height={40} alt='flag'/></div>
              <h2><span className='font-semibold'>Country : </span> { country.country}</h2>
              <p> <span className='font-semibold'>Total Active Cases:</span> {country.active}</p>
              <p> <span className='font-semibold'>Total Recovered Cases:</span>  {country.recovered}</p>
              <p> <span className='font-semibold'> Total Deaths:</span> {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
    // </div>
  );
};

export default MapComponent;
