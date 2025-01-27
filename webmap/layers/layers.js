ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-218381.940527, 6014617.616558, 670098.806958, 6633701.704581]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Structure_1 = new ol.format.GeoJSON();
var features_Structure_1 = format_Structure_1.readFeatures(json_Structure_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Structure_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Structure_1.addFeatures(features_Structure_1);
cluster_Structure_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Structure_1
});
var lyr_Structure_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Structure_1, 
                style: style_Structure_1,
                popuplayertitle: 'Structure',
                interactive: true,
    title: 'Structure<br />\
    <img src="styles/legend/Structure_1_0.png" /> Lycée de Kébémer<br />\
    <img src="styles/legend/Structure_1_1.png" /> Université Cheikh Anta Diop de Dakar<br />\
    <img src="styles/legend/Structure_1_2.png" /> Université de Rouen<br />\
    <img src="styles/legend/Structure_1_3.png" /> Université Paris Sorbonne Nord<br />\
    <img src="styles/legend/Structure_1_4.png" /> Université d\'Orléans<br />\
    <img src="styles/legend/Structure_1_5.png" /> Université Paris 1 Panthéon Sorbonne<br />\
    <img src="styles/legend/Structure_1_6.png" /> Tribu Concevoire Durable<br />\
    <img src="styles/legend/Structure_1_7.png" /> Wanaka<br />\
    <img src="styles/legend/Structure_1_8.png" /> Office National des Forêts<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Structure_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Structure_1];
lyr_Structure_1.set('fieldAliases', {'fid': 'fid', 'Structures': 'Structures', 'Infos': 'Infos', });
lyr_Structure_1.set('fieldImages', {'fid': 'TextEdit', 'Structures': 'TextEdit', 'Infos': 'TextEdit', });
lyr_Structure_1.set('fieldLabels', {'fid': 'hidden field', 'Structures': 'inline label - always visible', 'Infos': 'inline label - always visible', });
lyr_Structure_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});