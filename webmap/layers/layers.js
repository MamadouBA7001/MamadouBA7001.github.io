ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5023412.717414, 1535522.647639, 2062771.897307, 6473101.939227]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Structures_1 = new ol.format.GeoJSON();
var features_Structures_1 = format_Structures_1.readFeatures(json_Structures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Structures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Structures_1.addFeatures(features_Structures_1);
cluster_Structures_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Structures_1
});
var lyr_Structures_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Structures_1, 
                style: style_Structures_1,
                popuplayertitle: 'Structures',
                interactive: true,
    title: 'Structures<br />\
    <img src="styles/legend/Structures_1_0.png" /> Lycée de Kébémer<br />\
    <img src="styles/legend/Structures_1_1.png" /> Office National des Forêts<br />\
    <img src="styles/legend/Structures_1_2.png" /> Tribu Concevoire Durable<br />\
    <img src="styles/legend/Structures_1_3.png" /> Université Cheikh Anta Diop de Dakar<br />\
    <img src="styles/legend/Structures_1_4.png" /> Université d\'Orléans<br />\
    <img src="styles/legend/Structures_1_5.png" /> Université de Rouen<br />\
    <img src="styles/legend/Structures_1_6.png" /> Université Paris 1 Panthéon Sorbonne<br />\
    <img src="styles/legend/Structures_1_7.png" /> Université Paris Sorbonne Nord<br />\
    <img src="styles/legend/Structures_1_8.png" /> Wanaka<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Structures_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Structures_1];
lyr_Structures_1.set('fieldAliases', {'fid': 'fid', 'Structures': 'Structures', 'Infos': 'Infos', });
lyr_Structures_1.set('fieldImages', {'fid': 'TextEdit', 'Structures': 'TextEdit', 'Infos': 'TextEdit', });
lyr_Structures_1.set('fieldLabels', {'fid': 'hidden field', 'Structures': 'header label - always visible', 'Infos': 'header label - always visible', });
lyr_Structures_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});