'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
// import './map.css';
type Propstype = {
  coordinates:[
        lng:number,
        lat:number,
  ],
};
type PropsMapAll = {
  coordinatesArray:Array<Array<number>>,
};
const Map = (props:Propstype) => {
  const {
    coordinates,
  } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, lng] = coordinates;
  console.log(coordinates);
  const [zoom] = useState(8);
  maptilersdk.config.apiKey = '7AfXUElR7W3GAfFoOGrW';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [lng, lat],
      zoom,
    });
    new maptilersdk.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap mt-12">
      <div ref={mapContainer} className=" rounded-lg h-64 w-full" />
    </div>
  );
};
const MapAll = (props:PropsMapAll) => {
  const {
    coordinatesArray,
  } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lat, lng] = coordinates;
  // console.log(coordinatesArray);
  const [zoom] = useState(8);
  maptilersdk.config.apiKey = '7AfXUElR7W3GAfFoOGrW';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    const [latCenter, lngCenter] = coordinatesArray[0];
    // setCenter(coordinatesArray[0].reverse() as [number, number]);
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [lngCenter, latCenter],
      zoom,
    });
    coordinatesArray?.forEach((el:[number, number]) => {
      const [lat, lng] = el;
      const marker = new maptilersdk.Marker().setLngLat([lng, lat]).addTo(map.current);
    });
  }, [coordinatesArray]);

  return (
    <div className="map-wrap h-full">
      <div ref={mapContainer} className=" rounded-lg h-full w-full" />
    </div>
  );
};
export { Map, MapAll };
