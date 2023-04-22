let mapOptions = {
    center:[-34.6879893, -58.5850811],
    zoom:10
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let customIcon = {
    iconUrl:"https://icons.iconarchive.com/icons/icons-land/vista-map-markers/128/Map-Marker-Push-Pin-1-Pink-icon.png",
    iconSize:[40,40]
}

let myIcon = L.icon(customIcon);
//let myIcon = L.divIcon();

let iconOptions = {
    title:"company name",
    draggable:true,
    icon:myIcon
}

let marker = new L.Marker([-34.6879893, -58.5850811] , iconOptions);
marker.addTo(map);
marker.bindPopup("<span style='font-size: 18px;'>Dog King: Pet Shop<br>Cerviño 4719, Isidro Casanova</span>").openPopup();

//http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png


