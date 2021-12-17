import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { CustomInfoWindowOptions } from "../types/CustomInfoWindowOptions";


const divStyle = {
  background: "white",
  fontSize: 7.5,
}

type infoWindowOptionsPropsType = {
  options: CustomInfoWindowOptions;
}

const CustomInfoWindow = (optionsProps: infoWindowOptionsPropsType) => {
  const {options} = optionsProps;
  return (
    <InfoWindow position={options.position} >
      <div style={divStyle}>
        <h1>{options.label}</h1>
      </div>
    </InfoWindow>
  );
};

export default CustomInfoWindow;