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
        'Haven Corfu', 
        39.6300852, 19.90158319, 
        '0 meter boven zeeniveau', 
        'Vertrek Corfu dag 2.',
        'icons/anchor.png'
    ],
    [
        'Veerboot', 
        39.55805947, 20.04936218, 
        '0 meter boven zeeniveau', 
        'Overtocht naar vasteland.',
        'icons/boat.png'
    ],
    [
        'Haven Igoumenitsa', 
        39.49211914, 20.26119232, 
        '0 meter boven zeeniveau', 
        'Aankomst vasteland.',
        'icons/anchor.png'
    ],
    [
        'Busreis', 
        39.37650661, 20.4015255, 
        '120 meter boven zeeniveau', 
        'Onderweg van Igoumenitsa naar Necromanteion.',
        'icons/bus_right.png'
    ],
    [
        'Necromanteion', 
        39.23610492, 20.5340454, 
        '38 meter boven zeeniveau', 
        'Mogelijke locatie Necromanteion uit bronnen, maar was net zo waarschijnlijk versterkte boerderij.',
        'icons/icon_II.png'
    ],
    [
        'Busreis', 
        39.12686432, 20.59387207, 
        '13 meter boven zeeniveau', 
        'Onderweg van Necromanteion naar Nicopolis.',
        'icons/bus_right.png'
    ],
    [
        'Nicopolis', 
        39.00899684, 20.73358297, 
        '28 meter boven zeeniveau', 
        'Romeinse stad, gebouwd ter ere van de slag bij Actium.',
        'icons/icon_II.png'
    ],
    [
        'Poort Nicopolis', 
        39.01019733, 20.731287, 
        '20 meter boven zeeniveau', 
        'Gereconstueerde poort in de ommuring van Nicopolis.',
        'icons/icon_II.png'
    ],
    [
        'Odeon Nicopolis', 
        39.01106434, 20.72911978, 
        '23 meter boven zeeniveau', 
        'Type theater, speciaal voor zang en voordacht. Vaak kleiner dan een normaal theater en was overdekt.',
        'icons/icon_II.png'
    ],
    [
        'Nikopolis Archeologisch Museum', 
        38.9920351, 20.7402533, 
        '20 meter boven zeeniveau', 
        'Modern, diachroon opgezet museum. Hier staan de archeologische vonsten van Nicopolis opgesteld.',
        'icons/icon_II.png'
    ],
    [
        'Overwinningsaltaar bij Nicopolis', 
        39.02776051, 20.73539615, 
        '76 meter boven zeeniveau', 
        'Altaar gebouwd om de slag bij Actium in 31 v. Chr. te herdenken. Hierbij versloeg Octavianus in een zeeslag de gezamelijke vloot van Marcus Antonius en Cleopatra, waarna Octavianus Augustus werd, eerste Keizer van het Romeinse Rijk.',
        'icons/icon_II.png'
    ],
    [
        'Busreis', 
        39.08743603, 20.70819855, 
        '26 meter boven zeeniveau', 
        'Onderweg van Nicopolis naar Cassope.',
        'icons/bus_left.png'
    ],
    [
        'Cassope', 
        39.14505583, 20.67461729, 
        '555 meter boven zeeniveau', 
        'Geweldig goed bewaarde Griekse stad uit de 4de eeuw v. Chr.. Wordt verlaten na de aanleg van Nicopolis in 31 v.Chr..',
        'icons/icon_II.png'
    ],
    [
        'Busreis', 
        39.42346419, 20.70922852, 
        '459 meter boven zeeniveau', 
        'Onderweg van Cassope naar Ioánnina.',
        'icons/bus_right.png'
    ],
    [
        'Kastee; Ioánnina', 
        39.67074432, 20.86255431, 
        '484 meter boven zeeniveau', 
        'Fortificaties bij de stad van Ioánnina uit de Ottomaanse Periode, met de eerste fase uit de 11e eeuw en de nu zichtbare resten gebouwd door Ali Pasha in 1795.',
        'icons/icon_II.png'
    ],
    [
        'Overnachting', 
        39.66346015, 20.85050583, 
        '505 meter boven zeeniveau', 
        'Overnachting in Ioánnina.',
        'icons/hotel.png'
    ],
];

var map;
function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: new google.maps.LatLng(40.08, 21.96),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    // locations.forEach(function(locations) {
    //     var marker = new google.maps.Marker({
    //         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //         icon: locations[i][5],
    //         map: map
    //     });
    // });

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
      })(marker, i))
    };
};