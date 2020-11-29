import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import {environment} from "../../../../../environments/environment";


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  map: Mapboxgl.Map;
  geojson = [
    {
      "lng": -73.35563728823938,
      "lat": 8.237423960385316,
    },
    {
      "lng": -73.35490699980129,
      "lat": 8.236926755085287,
    }
  ]


  mapbox(){

    Mapboxgl.accessToken = environment.accessTokenMapbox;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.35563728823938,8.237423960385316],
      zoom: 17,

    });


    this.map.addControl(new Mapboxgl.NavigationControl());



    for (let i=0; i<this.geojson.length; i++){
      this.createMarker(this.geojson[i]["lng"],this.geojson[i]["lat"]);
    }

  }

  createMarker(lng:number, lat:number){
    const marker = new Mapboxgl.Marker().setLngLat([lng,lat]).addTo(this.map);

  }



  ngOnInit() {
    this.mapbox();
  }

}
