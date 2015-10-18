import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 47.655299,
  lng: -122.311558
};

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state={
      rows: [
        {lat: '47.655218', lng: '-122.307457'},
        {lat: '47.654882', lng: '-122.307183'},
        {lat: '47.654669', lng: '-122.307054'},
        {lat: '47.654669', lng: '-122.307054'},
        {lat: '47.654425', lng: '-122.306921'},
        {lat: '47.654187', lng: '-122.306717'},
        {lat: '47.653898', lng: '-122.306513'},
        {lat: '47.653706', lng: '-122.305901'},
        {lat: '47.653608', lng: '-122.305488'},
        {lat: '47.653568', lng: '-122.305150'},
        {lat: '47.653167', lng: '-122.305306'},
        {lat: '47.652915', lng: '-122.305483'},
        {lat: '47.652561', lng: '-122.305901'},
        {lat: '47.652254', lng: '-122.306454'},
        {lat: '47.652055', lng: '-122.307221'},
        {lat: '47.652041', lng: '-122.308095'},
        {lat: '47.652178', lng: '-122.308948'},
        {lat: '47.652471', lng: '-122.309619'},
        {lat: '47.652905', lng: '-122.310241'},
        {lat: '47.653480', lng: '-122.310445'},
        {lat: '47.654107', lng: '-122.310426'},
        {lat: '47.654934', lng: '-122.310394'},
        {lat: '47.655107', lng: '-122.311140'},
        {lat: '47.655299', lng: '-122.311558'},
        {lat: '47.655322', lng: '-122.312035'},
        {lat: '47.655355', lng: '-122.312722'},
        {lat: '47.655351', lng: '-122.313317'},
        {lat: '47.654769', lng: '-122.313317'},
        {lat: '47.654205', lng: '-122.313357'},
        {lat: '47.653439', lng: '-122.313358'},
        {lat: '47.653602', lng: '-122.314302'},
        {lat: '47.653660', lng: '-122.315761'},
        {lat: '47.653689', lng: '-122.316904'},
        {lat: '47.653964', lng: '-122.317998'},
        {lat: '47.654394', lng: '-122.318840'},
        {lat: '47.654773', lng: '-122.318566'},
      ]
    }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });

    var flightPlanCoordinates1 = [
      {lat: 47.655218, lng: -122.307457},
      {lat: 47.654882, lng: -122.307183},
      {lat: 47.654669, lng: -122.307054},
      {lat: 47.654669, lng: -122.307054},
      {lat: 47.654425, lng: -122.306921},
      {lat: 47.654187, lng: -122.306717},
      {lat: 47.653898, lng: -122.306513},
      {lat: 47.653706, lng: -122.305901},
      {lat: 47.653608, lng: -122.305488},
      {lat: 47.653568, lng: -122.305150},
    ];
    var flightPath1 = new google.maps.Polyline({
      path: flightPlanCoordinates1,
      geodesic: true,
      strokeColor: '#00FF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath1.setMap(map);

    var flightPlanCoordinates2 = [
      {lat: 47.653568, lng: -122.305150},
      {lat: 47.653167, lng: -122.305306},
      {lat: 47.652915, lng: -122.305483},
      {lat: 47.652561, lng: -122.305901},
      {lat: 47.652254, lng: -122.306454},
      {lat: 47.652055, lng: -122.307221},
      {lat: 47.652041, lng: -122.308095},
    ];
    var flightPath2 = new google.maps.Polyline({
      path: flightPlanCoordinates2,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath2.setMap(map);

    var flightPlanCoordinates3 = [
      {lat: 47.652041, lng: -122.308095},
      {lat: 47.652178, lng: -122.308948},
      {lat: 47.652471, lng: -122.309619},
      {lat: 47.652905, lng: -122.310241},
      {lat: 47.653480, lng: -122.310445},
      {lat: 47.654107, lng: -122.310426},
      {lat: 47.654934, lng: -122.310394},
    ];
    var flightPath3 = new google.maps.Polyline({
      path: flightPlanCoordinates3,
      geodesic: true,
      strokeColor: '#00FF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath3.setMap(map);

    var flightPlanCoordinates4 = [
      {lat: 47.654934, lng: -122.310394},
      {lat: 47.655107, lng: -122.311140},
      {lat: 47.655299, lng: -122.311558},
      {lat: 47.655322, lng: -122.312035},
      {lat: 47.655355, lng: -122.312722},
      {lat: 47.655351, lng: -122.313317},
    ];
    var flightPath4 = new google.maps.Polyline({
      path: flightPlanCoordinates4,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath4.setMap(map);

    var flightPlanCoordinates5 = [
      {lat: 47.655351, lng: -122.313317},
      {lat: 47.654769, lng: -122.313317},
      {lat: 47.654205, lng: -122.313357},
      {lat: 47.653439, lng: -122.313358},
      {lat: 47.653602, lng: -122.314302},
      {lat: 47.653660, lng: -122.315761},
    ];
    var flightPath5 = new google.maps.Polyline({
      path: flightPlanCoordinates5,
      geodesic: true,
      strokeColor: '#00FF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath5.setMap(map);

    var flightPlanCoordinates6 = [
      {lat: 47.653660, lng: -122.315761},
      {lat: 47.653689, lng: -122.316904},
      {lat: 47.653964, lng: -122.317998},
      {lat: 47.654394, lng: -122.318840},
      {lat: 47.654773, lng: -122.318566},
    ];
    var flightPath6 = new google.maps.Polyline({
      path: flightPlanCoordinates6,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath6.setMap(map);
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
        zoom={16}
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
