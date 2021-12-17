import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { posix } from "path";
import CustomInfoWindow from "./CustomInfoWindow";
import CustomInfoWindowOptions from "../types/CustomInfoWindowOptions";
import CustomMarker from "./CustomMarker";
import CustomMarkerOptions from "../types/CustomMarkerOptions";

/**
 * Mapに使用するプロパティ
 */
interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  options: google.maps.MapOptions;
}


/**
 * MapのPropsの初期値
 */
const containerStyle = {
    height: "100vh",
    width: "100%",
}
const initialMapProps: MapProps = {
  center: {
    lat: 38.240567493884434,
    lng: 140.36396563273115,
  },
  zoom: 18,
  options: {
    styles: [{
      featureType: "all",
      elementType: "labels",
      stylers: [
        { "visibility": "off" }
      ],
    }]
  },
};

const initialMarkerOptions: CustomMarkerOptions = {
  label: {
    text: "山形県庁、県庁食堂、レストラン16",
    fontSize: '20px',
  },
  position: {
    lat: 38.240567493884434,
    lng: 140.36396563273115,
  },
}

const initialMarkerOptions2: CustomMarkerOptions = {
  label: {
    text: "山形グランドホテル",
    fontSize: '14px',
  },
  position: {
    lat: 38.25065834617286,
    lng: 140.3370987596618,
  },
}

const initialMarkerOptions3: CustomMarkerOptions = {
  label: {
    text: "ラ・セーヌ",
    fontSize: '14px',
  },
  position: {
    lat: 38.25065834617286 + 0.0001,
    lng: 140.3370987596618,
  },
}

const initialMarkerOptions4: CustomMarkerOptions = {
  label: {
    text: "桃花苑",
    fontSize: '14px',
  },
  position: {
    lat: 38.25065834617286,
    lng: 140.3370987596618 + 0.0001,
  },
}

const initialMarkerOptions5: CustomMarkerOptions = {
  label: {
    text: "辰寿し",
    fontSize: '14px',
  },
  position: {
    lat: 38.25065834617286 - 0.0001,
    lng: 140.3370987596618,
  },
}

const initialInfoWindowOptions: CustomInfoWindowOptions = {
  label: "山形県庁あああ",
  position: {
    lat: 38.240567493884434,
    lng: 140.36396563273115,
  },
}




/**
 * APIキー
 */
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';

/**
 * サンプルとして地図を表示するコンポーネント
 */
const MapView = () => {
  const [mapProps, setMapProps] = useState<MapProps>(initialMapProps);
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
 
  const createOffsetSize = () => {
      return setSize(new window.google.maps.Size(0, -45));
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <LoadScript googleMapsApiKey={API_KEY} onLoad={() => createOffsetSize()}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapProps.center}
          zoom={mapProps.zoom}
          options={mapProps.options}>
          <CustomMarker options={initialMarkerOptions} />
          <CustomMarker options={initialMarkerOptions2} />
          <CustomMarker options={initialMarkerOptions3} />
          <CustomMarker options={initialMarkerOptions4} />
          <CustomMarker options={initialMarkerOptions5} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
  
};

export default MapView;