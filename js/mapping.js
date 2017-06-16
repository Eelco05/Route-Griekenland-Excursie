var locations = [
    [
        'Begintpunt', 
        39.610603, 19.927313,
        '2 meter boven zeeniveau', 
        'Begin van de excursie en eerste uitleg.',
        'icons/icon_I.png'
    ],
    [
        'Ruines',
        39.60741162, 19.9225232, 
        '11 meter boven zeeniveau', 
        'Resten Romeinse gebouw en Vroeg-Christelijke Basiliek.',
        'icons/icon_I.png'
    ],
    [
        'Artemis Tempel', 
        39.607136, 19.918220, 
        '10 meter boven zeeniveau', 
        'Archaische Tempel gewijd aan de godin Artemis.',
        'icons/icon_I.png'
    ],
    [
        'Mon Repons', 
        39.606383, 19.926030, 
        '26 meter boven zeeniveau', 
        'Voormalige Britse gouverneurswoning en Grieks Koninklijk vakantiehuis, dient nu als lokaal museum.',
        'icons/icon_I.png'
    ],
    [
        'Akropolis ', 
        39.602834, 19.924952, 
        '44 meter boven zeeniveau', 
        'Akropolis van het Kerkyra van de Oudheid.',
        'icons/icon_I.png'
    ],
    [
        'Kardaki Tempel', 
        39.60152154, 19.92597684, 
        '35 meter boven zeeniveau', 
        'Mogelijk gewijd aan Apollo. Door kusterosie is de helft hiervan in zee gevallen.',
        'icons/icon_I.png'
    ],
    [
        'Ingang Kasteel Corfu', 
        39.62338969, 19.92593631, 
        '10 meter boven zeeniveau', 
        'Ingang van het Venitiaans kasteel van Kerkyra.',
        'icons/icon_I.png'
    ],
    [
        'Top Kasteel Corfu', 
        39.62354877, 19.92884919, 
        '24 meter boven zeeniveau', 
        'Hoogste deel van het Kasteel. Uitzicht dat zowel de stad als het vaarwater om het eiland beheerst.',
        'icons/icon_I.png'
    ],
    [
        'Veerboot', 
        39.55805947, 20.04936218, 
        '0 meter boven zeeniveau', 
        'Begin dag 2 met overtocht naar vasteland.',
        'icons/icon_II.png'
    ],
    [
        'Haven', 
        39.49211914, 20.26119232, 
        '2 meter boven zeeniveau', 
        'Aankomst vasteland.',
        'icons/icon_II.png'
    ],
];

var map;
function initMap() {} 
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: new google.maps.LatLng(40.08, 21.96),
        mapTypeId: google.maps.MapTypeId.ROADMAP
});

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var infowindow = new google.maps.InfoWindow();
var marker, i;

for (i = 0; i < locations.length; i++) { 
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: locations[i][5],
        map: map
});

google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
        infowindow.setContent(
            '<b>' + locations[i][0] + '</b>' + '<br>' + 
            '<i>' + locations[i][3] + '</i>' + '<br>' + 
            locations[i][4]);
        infowindow.open(map, marker);
        google.maps.event.addListener(map,'mouseout', function(){ 
                infowindow.close();
            }); 
    }
  })(marker, i));
}