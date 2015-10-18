import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 47.6565766,
  lng: -122.309239
};

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state={
      lat:47.6565766,
      lng:-122.309239,
      rows: [
        {lat: '47.63300737749619', lng: '-122.18822479248047'},
        {lat: '47.6603004033596', lng: '-122.41310119628906'},
        {lat: '47.595126981098076', lng: '-122.33156204223633'}
      ]
    }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });

    var flightPlanCoordinates = [
      {lat: 47.63300737749619, lng: -122.18822479248047},
      {lat: 47.6603004033596, lng: -122.41310119628906},
      {lat: 47.595126981098076, lng: -122.33156204223633},
    ];
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
    console.log('onClickLat', e.latLng.lat());
    console.log('onClickLng', e.latLng.lng());
    // this.state.lat=e.latLng.lat();
    // this.state.lng=e.latLng.lng();
  }

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Loading...Please Wait'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}
        onClick={this.onClick}>


        {this.state.rows.map(function(row) {
            return(
              <Marker
                lat={row.lat}
                lng={row.lng} />
            );
          })}
      </Gmaps>
    );
  }

};

export default MapComponent;
