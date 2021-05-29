import { Component, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @ViewChild('mapa',{static: true}) mapa;
  @Input() coords: string;

  constructor() { }

  ngOnInit() {
    const LatLng = this.coords.split(',');
    const Lat = Number(LatLng[0]);
    const Lng = Number(LatLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZHJha2VyZWRmaWVsZDIiLCJhIjoiY2tveXpnNDNsMG53MTJwazh1aWV6ODM0byJ9.dmpBRKWlRr255Z8wxf4c1A';
    var map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[ Lng, Lat ],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
                               .setLngLat([ Lng, Lat ])
                               .addTo( map );
  }

}
