// 設定地圖顯示內容 
L.mapbox.accessToken = 'pk.eyJ1Ijoiczk5MjEzMTYiLCJhIjoiY2tqbzJmd2x0MGl3bzJycHJ4YWZkNmNybiJ9.mhK4o-eCYqLs0gFsDjC-tQ';

var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/s9921316/ckljcjp7l0sa217mnnn93u0qh/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
       attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
       tileSize: 512,
       zoomOffset: -1 });

var map = L.map('map')
  .addLayer(mapboxTiles)
  .setView([25.010383, 121.533350], 20);


console.log(" 這邊 是 mapBOX  1"); 


//  static/UI/runPage_Pin_v1.png

console.log(" 這邊 是 mapBOX  2"); 


// 創建 icon (黑色)
const audioIcon = new L.Icon({
        iconUrl: 'static/UI/runPage_Pin_v1.png', 
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [50, 42],
        iconAnchor: [24, 82],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
  });


//   const voice_Icon = new L.Icon({
//         iconUrl: url('static/UI/runPage_Pin_v1.png'),
//         iconSize: [50, 42],
//         iconAnchor: [24, 82],
//         popupAnchor: [1, -34]
//  });
// var p1p2p3p4 = [[25.01059435623696,121.53328752145173], [25.0293645690867,121.52273740852254],
//     [25.0193645690867,121.22273740852254], [25.0193642690867,121.52273740852254]];

    const datad = 
    [ 
    { pk: '12',Goe_N:'25.019759495623696', Goe_W:'121.53998752145173',fileType:'voiceFile' },
    { pk: '13',Goe_N:'25.01359495623696', Goe_W:'121.53998752145173',fileType:'voiceFile' },
    { pk: '14',Goe_N:'25.01459495623696', Goe_W:'121.53998752145173',fileType:'voiceFile' },  
    ]
;


    datad.forEach(item => {

        console.log("Here is :"+item.fileType);
    //     let myIcon;
    //     if (item.fileType == "voiceFile") {
    //         myIcon = voice_Icon;
    //     }
    //     else
    //     {
    //         myIcon = audioIcon;
    //     }

    //     // 添加標記點
        L.marker([item.Goe_N,item.Goe_W], { icon: audioIcon  })
        .addTo(map)
        .on('click', function(e) {
            console.log(e.latlng);  
            console.log("LL ="+e.latlng);
        } 
        ); 

    })



 var marker = 
    // L.marker([25.01059435623696,121.53328752145173],p1p2p3p4 [25.01059495623696,121.53398752145173]
    L.marker([25.01059435623696,121.53328752145173], {icon: audioIcon})
    .addTo(map)
    .on('click', function(e) {
        console.log(e.latlng);  
        console.log("LL ="+e.latlng);
    } 
    );

    

    // var marker3 = L.marker(p1p2p3p4,[2000, 3000, 2000], {autostart: true,icon: marker3}).addTo(map);
console.log(" 這邊 是 mapBOX  3"); 


// L.marker([item.Goe_N,item.Goe_W], {
//     title: item.name,
//     icon: myIcon,
//     alt: item.pk })
// .addTo(map)
// .on('click', function(e) {
// console.log(e.latlng);


// var marker3 = L.icon({
//     iconUrl: 'https://i.imgur.com/mRt2rog.png',
//     iconSize:     [54.6, 22.7], // size of the icon
//     iconAnchor:   [27.3, 11.35], // point of the icon which will correspond to marker's location
//     });
    
// var p1p2p3p4 = [[25.0193645690867,121.52273740852254], [25.0293645690867,121.52273740852254],
// [25.0193645690867,121.22273740852254], [25.0193642690867,121.52273740852254]];
// map.fitBounds(p1p2p3p4);
        
// marker3 = L.Marker.movingMarker(p1p2p3p4,[2000, 3000, 2000], {autostart: true,icon: marker3}).addTo(map);
// sMap_file_List.forEach(item => {
//     // 設定 icon 顯示金色，其餘則為黑色

//     console.log("Here is :"+item.fileType);
//     let myIcon;
//     if (item.fileType == "voiceFile") {
//         myIcon = voice_Icon;
//     }
//     else
//     {
//         myIcon = audioIcon;
//     }

//     // 添加標記點
//     L.marker([item.Goe_N,item.Goe_W], {
//               title: item.name,
//               icon: myIcon,
//               alt: item.pk })
//     .addTo(map) 