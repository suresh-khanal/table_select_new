
var osm = new ol.layer.Tile({
    title: "Open Street Map",
    baseLayer: true,
    source: new ol.source.OSM(),  
    attribution: '© OpenStreetMap contributors',
    className: 'osm_cl'
  });


var PipelineStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#e80e0eff',
                width: 2
            })
        });

var AssessmentStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#d304fcff',
                width: 2
            })
        });

var LinePipeStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#1504fcff',
                width: 2
            })
        });

var ValveStyle = new ol.style.Style({
           image: new ol.style.Circle({
        radius: 6,
        fill: new ol.style.Fill({ color: '#c4f5ad' }),
        stroke: new ol.style.Stroke({
            color: 'black', width: 1
        })
    }),
        text: new ol.style.Text({      
            text: 'V',
            fill: new ol.style.Fill({
              color: 'black'
            })
          })
        });

var CapStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 6,
        fill: new ol.style.Fill({ color: 'cyan' }),
        stroke: new ol.style.Stroke({
            color: 'black', width: 1
        })
    }),
    text: new ol.style.Text({      
        text: 'C',
        fill: new ol.style.Fill({
          color: 'red'
        })
      })
});

var ElbowStyle =  new ol.style.Style({
    image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({ color: '#98f363ff' }),
        stroke: new ol.style.Stroke({
            color: 'black', width: 1
        })
    }),
    text: new ol.style.Text({      
        text: 'E',
        fill: new ol.style.Fill({
          color: '#310244'
        })
      })
});


var FlangeStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({ color: '#de9debff' }),
        stroke: new ol.style.Stroke({
            color: 'black', width: 1
        })
    }),
    text: new ol.style.Text({      
        text: 'F',
        fill: new ol.style.Fill({
          color: 'blue'
        })
      })
});


  var Pipeline = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/collections/WRK.Pipeline/items',
            }),
            // style: TunnelLineStyle,
            title: 'Pipeline',
            declutter: true,
            style:PipelineStyle,
        });
var Coating = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/collections/WRK.Coating/items',
            }),
            // style: TunnelLineStyle,
            title: 'Coating',
            declutter: true,
            style:AssessmentStyle,
        });

//   var LinePipe = new ol.layer.Vector({
//     source: new ol.source.Vector({
//         format: new ol.format.GeoJSON(),
//         url: 'http://dvaigeo3corp:9000/collections/WRK.LinePipe/items',
//     }),
//     // style: TunnelLineStyle,
//     title: 'LinePipe',
//     declutter: true,
//     style:LinePipeStyle,
// });


  var Assessment = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/collections/WRK.Assessment/items',
            }),
            // style: TunnelLineStyle,
            title: 'Assessment',
            declutter: true,
            style:AssessmentStyle,
        });

  var Valve = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/functions/featureserv_wrk.get_midpoints/items',
            }),
            // style: TunnelLineStyle,
            title: 'Valve',
            declutter: true,
            style:ValveStyle,
        });

  var Flange = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/collections/WRK.Flange/items',
            }),
            // style: TunnelLineStyle,
            title: 'Flange',
            declutter: true,
            style:FlangeStyle,
        });

  var Elbow = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/collections/WRK.Elbow/items',
            }),
            // style: TunnelLineStyle,
            title: 'Elbow',
            declutter: true,
            style:ElbowStyle,
        });

  var Cap = new ol.layer.Vector({
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON(),
                url: 'http://dvaigeo3corp:9000/collections/WRK.Cap/items',
            }),
            // style: TunnelLineStyle,
            title: 'Cap',
            declutter: true,
            style:CapStyle,
        });



   var tileWmsLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        attributions: ['USGS'],
                url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer/USGSTopo',
                params: {'LAYERS': '0'},
                serverType: 'ESRImapserver',
                projection: 'EPSG:3857'
     }),
    title: 'USGSTopo',
  
    
}); 

tileWmsLayer.set('title', 'USGSTopo')


var PipelineADA2 = new ol.layer.Tile({
source: new ol.source.TileWMS({
                 url: 'http://tsaiweb2corp.eprod.com:8080/geoserver/wms',
                 params: {'LAYERS': 'ADA2_Test:PipelineADA',
                         'TILED' : true},
                 serverType: 'geoserver'
      }),
     title: 'PipelineADA',
     className: 'ppl_cl'
    
}); 
var ComplexADA2 = new ol.layer.Tile({
source: new ol.source.TileWMS({
                 url: 'http://tsaiweb2corp.eprod.com:8080/geoserver/wms',
                 params: {'LAYERS': 'ADA2_Test:ComplexGroup_ADA2',
                         'TILED' : true},
                 serverType: 'geoserver'
      }),
     title: 'ComplexGroup_ADA2',
    
}); 


var ValveADA2 = new ol.layer.Tile({
source: new ol.source.TileWMS({
                 url: 'http://tsaiweb2corp.eprod.com:8080/geoserver/wms',
                 params: {'LAYERS': 'ADA2_Test:Valve_ADA2',
                         'TILED' : true},
                 serverType: 'geoserver'
      }),
     title: 'Valve_ADA2',
   
    

}); 

var MarkerADA2 = new ol.layer.Tile({
source: new ol.source.TileWMS({
                 url: 'http://tsaiweb2corp.eprod.com:8080/geoserver/wms',
                 params: {'LAYERS': 'ADA2_Test:Marker_ADA2',
                         'TILED' : true},
                 serverType: 'geoserver'
      }),
     title: 'Marker_ADA2',

    
     noSwitcherDelete: true,

}); 

// Custom filter
    var pencil = new ol.filter.PencilSketch({
    blur: 0,      // Adjust blur for softer lines
    intensity: 0.5, // Strength of the sketch effect
    opacity: 1
});


// The map
var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        zoom: 10,
        maxZoom: 21,
        center: [-10616314.971583098, 3472448.7167625874]
    }),
    layers: [osm, 
        Pipeline,
        Coating,
        PipelineADA2,
		ComplexADA2,
        Assessment,
		ValveADA2,
		MarkerADA2,
        ]
});

var layerSwitcher = new ol.control.LayerSwitcher({
    selection: true,
    noSwitcherDelete: true
});

map.addControl(layerSwitcher);



const mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(6),
    projection: 'EPSG:4326'  
  });
 map.addControl(mousePositionControl)



// Function to prepare layers for the print request
function getPrintableLayers(map) {
    var layers = [];   
    var layerCollection = Basemap.getLayers()
    const layerList = [];
    layerCollection.forEach(function(layer) {       
        layerList.push(layer);
        });    
    layerList.forEach(function(layer) {
        if (layer.getVisible()) {
            var source = layer.getSource();
            
            // WMS Layer Configuration
            if (source instanceof ol.source.ImageWMS || source instanceof ol.source.TileWMS) {
                var layerNames = source.getParams().LAYERS.split(',');
                var styleNames = source.getParams().STYLES ? source.getParams().STYLES.split(',') : [];
		// console.log('LayerNames', layerNames)
                layerNames.forEach(function(name, index) {
                    var cleanName = name.split(':').pop(); 

                //    console.log('CleanName', cleanName)
                    layers.push({
                        type: 'wms',
                        baseURL: 'http://tsaiweb2corp:8080/geoserver/wms',
                        opacity: layer.getOpacity(),
                        layers: [layer.get('title')], // This "cleanName" will now be the label in the PDF tree
                        title: layer.get('title'),
                        format: 'image/png',
                        styles: [styleNames[index] ? styleNames[index].trim() : ""],
                        // This "group" property often helps split them in the PDF tree
                        customParams: {
                            "unique_id": cleanName 
                        }
                    });
                });
            } 
            // OpenStreetMap Layer Configuration
           //else if (source instanceof ol.source.OSM) {                
            //         layers.push({
            //             type: 'xyz', 
            //             // 1. FIXED URL: Added the '/' after '.org' to prevent the Authority error
            //             baseURL: "http://a.tile.openstreetmap.org",
                        
            //             // 2. NAMING: Provide both for maximum compatibility across plugin versions
            //             title: "OpenStreetMap", 
            //             name: "OpenStreetMap",
                                            
            //             extension: 'png',
            //             maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
            //             tileSize: [256, 256],
            //             resolutions: [
            //                 156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875,
            //                 4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875,
            //                 305.7481130859375, 152.87405654296875, 76.43702827148438, 38.21851413574219,
            //                 19.109257067871094, 9.554628533935547, 4.777314266967773, 2.3886571334838867,
            //                 1.1943285667419433, 0.5971642833709717, 0.2985821416854858
            //             ]
            //         });
			// }
        }
    });
	// console.log(layers)
    return layers;
}

function calculateScale(resolution, units, dpi) {
  // Conversion factors
  const INCHES_PER_UNIT = {
    'm': 39.3701,             // Meters to Inches
    'degrees': 4374754,       // Approximation for Degrees at Equator
    'ft': 12,                 // Feet to Inches
    'us-ft': 12               // US Feet to Inches
  };

  // Formula: Resolution * UnitsToInches * DPI
  const scale = resolution * (INCHES_PER_UNIT[units] || 39.3701) * dpi;
  
  return Math.round(scale);
}
// Get Closest Scale to find the nearest scale  mentioned in yaml file
function getClosestScale(calculatedScale) {
    const validScales =  [500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000,
                          20000,25000,30000,35000,40000,45000,50000,
                         55000,60000,65000,70000,75000,80000,85000,90000,100000,125000,150000,
                         200000,250000,300000,350000,400000,500000,600000,700000,800000,900000,1000000,1500000,2000000,2500000,3000000,3500000,4000000,
                        4500000, 5000000, 5500000, 6000000, 6500000, 7000000];
    // console.log('Calculated Scale', calculatedScale)
    // console.log('Valid Scale', validScales.reduce((prev, curr) => Math.abs(curr - calculatedScale) < Math.abs(prev - calculatedScale) ? curr : prev))
    return validScales.reduce((prev, curr) => 
        Math.abs(curr - calculatedScale) < Math.abs(prev - calculatedScale) ? curr : prev
    );
}
// Function to trigger the print
function printMap() {    
    var view = map.getView();
    var resolution = view.getResolution();
    var center = view.getCenter();
    var layers = getPrintableLayers(map);
	// Create Legend metadata for each WMS layer
    var legendSpecs = layers.map(l => {
     if (l.type === 'wms' && l.title !== 'USGSTopo' && l.title !== 'Graticule') {
        console.log('Legend Title', l.title)
        var fullName = l.layers[0];
        var cleanName = fullName.split(':').pop();
        var scaleDenominator = getClosestScale(calculateScale(map.getView().getResolution(), 'm', 72));
        return {
            name: cleanName, 
            classes: [{
                name: "",
                icons: [
                    "http://tsaiweb2corp:8080/geoserver/wms?REQUEST=GetLegendGraphic" +
                    "&FORMAT=image/png" +
                    "&LAYER=" + fullName + // Use full name for request
                    "&SCALE=" + scaleDenominator + 
                    // "&WIDTH=30" +            // Force uniform icon width
                    // "&HEIGHT=30" +           // Force uniform icon height
                    "&LEGEND_OPTIONS=" + 
                    "dpi:300;" + 
                    "fontName:Arial;" + 
                    //"fontSize:10;" + 
                    "forceLabels:on;" + 
                    "columns:2;" +        // Split long legends into 2 columns
                    "columnMargin:40;" +  // Space between columns
                    "paddingLeft:20;" +
                    "bgColor:0xecf6fc;" +
                    "fontAntiAliasing:true"
                ]
            }]
        };
    }
     
    else if (l.type === 'osm' || l.type === 'xyz' || l.type === 'OSM') {
        return {
            name: "OpenStreetMap", 
            classes: [] 
        };
    }
    return null;
}).filter(item => item !== null);

    // Calculate Scale for print using 72 dpi as per OGC standard. For the PDF we will layer use 300 dpi

   var scaleForPrint = calculateScale(map.getView().getResolution(), 'm', 72);

    // The print module uses a JSON format for the print request.
    var printSpec = {
        layout: 'A3 Landscape',
        srs: map.getView().getProjection().getCode(),
        units: 'm',
        mapTitle: 'AIM: PDF map with layers',
        comment: 'Legend should be larger now.',
        layers: layers,
        legends: legendSpecs,
        pages: [{
            center: map.getView().getCenter(),
            scale: getClosestScale(scaleForPrint), 
            dpi: 300
        }]
    };
	// console.log('PrintSpec',JSON.stringify(printSpec));
    // The endpoint URL for the GeoServer print service
    // Change from global to workspace-specific
    var printUrl = 'http://tsaiweb2corp:8080/geoserver/pdf/create.json'; 


    // Send the request
    fetch(printUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(printSpec)
    })
    .then(response => response.blob())
    .then(blob => {
        // Handle the response, which should be a PDF file
        var fileURL = URL.createObjectURL(blob);
        // Open the PDF in a new window or trigger a download
        window.open(fileURL);
    })
    .catch(error => {
        // console.error('Error printing map:', error);
    });
}



// Random GUID generator to populate some ID fields in form
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// Select interaction
var selecti = new ol.interaction.Select({
    hitTolerance: 5,
    condition: ol.events.condition.singleClick
});
map.addInteraction(selecti);

// Select feature when click on the reference index
selecti.on('select', e => {
  if (!table) return;

  const feature = e.selected[0];

  // Clear previous highlights
  $('#featureTable tbody tr')
    .removeClass('row-selected');

  if (!feature) return;

  const uid = feature.ol_uid;

  table.rows().every(function () {
    const data = this.data();
    if (data && data._uid === uid) {
      const node = this.node();
      $(node)
        .addClass('row-selected');

      // Scroll row into view if needed
      table.row(this.index()).scrollTo(false);
    }
  });
});

// -----------------------------------------------
// Step 1 – Extract Dynamic Field Names
function getFeatureFields(features) {
  if (!features.length) return [];

  const props = features[0].getProperties();

  return Object.keys(props).filter(
    k => k !== 'geometry' && k !== 'geom' && !k.startsWith('_')
  );
}

// Step 2 – Convert Features → Row Objects
function featuresToRows(features, fields) {
  return features.map(f => {
    const row = { _feature: f };

    fields.forEach(field => {
      row[field] = f.get(field);
    });

    return row;
  });
}

// Step 3 – Build Table Header Dynamically
function buildTableHeader(fields) {
  const tableEl = document.getElementById('featureTable');
  if (!tableEl) return;

  tableEl.querySelector('thead')?.remove();

  const thead = document.createElement('thead');
  thead.className = 'table-light';

  const tr = document.createElement('tr');
  fields.forEach(f => {
    const th = document.createElement('th');
    th.textContent = f;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  tableEl.prepend(thead);
}


function buildDataTableColumns(fields) {
  return fields.map(f => ({
    data: f,
    title: f
  }));
}
// Build feature listControl



console.log('jQuery:', typeof $);
console.log('DataTable:', $.fn.DataTable);


// Layer Switcher → Populate FeatureList & Table
function buildTableForLayer(layer) {
  if (!layer?.getSource) return;

  updateTableTitle(layer);

  const features = layer.getSource().getFeatures();
  if (!features.length) return;

  const fields = getFeatureFields(features);
  const rowData = featuresToRows(features, fields);

  // ✅ Safely destroy existing DataTable
  if ($.fn.DataTable.isDataTable('#featureTable')) {
    const dt = $('#featureTable').DataTable();
    dt.clear();
    dt.destroy(false);
  }

  const tableEl = document.getElementById('featureTable');
  if (!tableEl) return;

  // ✅ FULL reset (critical when column count changes)
  tableEl.querySelector('thead')?.remove();
  tableEl.querySelector('tbody')?.remove();
  tableEl.appendChild(document.createElement('tbody'));

  buildTableHeader(fields);

  const allowAll = features.length <= 2000;
  const lengthMenu = allowAll
    ? [[200, 500, 1000, 2000, -1], [200, 500, 1000, 2000, 'All']]
    : [[200, 500, 1000, 2000], [200, 500, 1000, 2000]];

  table = $('#featureTable').DataTable({
    data: rowData,
    columns: buildDataTableColumns(fields),

    pageLength: 200,
    lengthMenu,

    scrollX: true,
    scrollY: true,
    scrollCollapse: true,
    deferRender: true,

    paging: true,
    searching: true,
    ordering: true,
    autoWidth: false,

    dom: '<"dt-top"lf>rt<"dt-bottom"ip>',
    createdRow: function (row, data) {
      row.dataset.uid = data._uid;
    }
  });

}

function updateTableTitle(layer) {
  const titleEl = document.querySelector('#featureListHeader .table-title');
  if (!titleEl) return;

  titleEl.textContent =
    layer?.get?.('title') || 'Attribute Table';
}

let table = null;
let currentLayerId = null;

const tableBtn = document.getElementById('LabelBtn');

tableBtn.addEventListener('click', () => {
  const layer = layerSwitcher.getSelection();
  if (!layer) return;

  document.getElementById('featureListShell').style.display = 'flex';
  buildTableForLayer(layer);
});


layerSwitcher.on?.('select', () => {
  const shell = document.getElementById('featureListShell');
  if (shell.style.display !== 'flex') return;

  const layer = layerSwitcher.getSelection();
  if (!layer) return;

  buildTableForLayer(layer);
});

document.getElementById('closeFeatureTable')
  .addEventListener('click', () => {

    // Hide table panel
    const shell = document.getElementById('featureListShell');
    shell.style.display = 'none';

    // Clear selection highlight
    $('#featureTable tbody tr')
      .removeClass('row-selected');

    // Clear map selection
    selectInteraction.getFeatures().clear();
});



$('#featureTable tbody').on('click', 'tr', function () {
  if (!table) return;

  const data = table.row(this).data();
  if (!data?._feature) return;

  // Highlight row immediately
  $('#featureTable tbody tr')
    .removeClass('row-selected');

  $(this).addClass('row-selected');

  // Select feature on map
  selectInteraction.getFeatures().clear();
  selectInteraction.getFeatures().push(data._feature);
});


// Step 7 – FeatureList → Table Highlight



// Step 8 – Keep Table in Sync with FeatureList Updates
function refreshTableFromList() {
  const features = listCtrl.getFeatures();
  const fields = getFeatureFields(features);

  buildTableHeader(fields);

  table.clear();
  table.rows.add(featuresToRows(features, fields));
  table.draw();
}




(function () {
  const panel = document.getElementById('featureListShell');
  const handle = document.getElementById('tableResizeHandle');

  let startY, startHeight;

  handle.addEventListener('mousedown', e => {
    startY = e.clientY;
    startHeight = panel.offsetHeight;
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stop);
  });

  function resize(e) {
    const dy = startY - e.clientY;
    panel.style.height = Math.max(120, startHeight + dy) + 'px';
  }

  function stop() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stop);
  }
})();




// layersqitcher vlick function to popualted the table dynamically
// Set features for the FeatureListControl



  
    //   osm.addFilter(pencil);
  
// filter: grayscale(100%);
//     -webkit-filter: grayscale(100%);

// layersqitcher click function to popualted the table dynamically
// Set features for the FeatureListControl


async function sendData(val) {
    
    try {
        console.log('Sending Request...')
    const response = await fetch('http://localhost:5000/retrieve_form', {
        method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "received_value": val }) // Ensure this key matches request.json.get()
        });

        // Debug: Check if the response is actually OK before parsing
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Server returned an error:", errorText);
            return;
        }

        const result = await response.json();
        return result;
        // console.log("Success:", result);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

document.addEventListener("DOMContentLoaded", function() {
     // Initialize surveyJS
        
        
    // Initialize Survey modal
    const modalElement = document.getElementById('surveyModal');
    const surveyModal = new bootstrap.Modal(modalElement);
    
    // Launch PressureTestReport survery modal
    const ptbtn = document.getElementById("PressureTestFormBtn");
    ptbtn.addEventListener("click", async function() {       
       const val = 'PressureTestReport'
       try {
        // 2. Use 'await' to wait for the actual JSON data
        const surveyJson = await sendData(val);
        
        console.log('Received Survey JSON', surveyJson);

        // 3. Now that we have real data, initialize SurveyJS
        const survey = new Survey.Model(surveyJson);
        const rndGuid = generateGUID();
        survey.setValue("pressuretestID", rndGuid);

        const guidQuestion = survey.getQuestionByName("pressuretestID");
        if (guidQuestion) {
            guidQuestion.readOnly = true;
        }
        survey.render(document.getElementById("surveyContainer"));
                
        surveyModal.show();
        
        survey.onComplete.add((sender) => {
            survey.showCompletedPage = false; 
            const payload = {
                name: "PressureTestReport", 
                response_data: sender.data 
            };

            fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload) 
            })
            .then(response => response.json())
            .then(data => {
                console.log('Submission successful!', data);   
                surveyModal.hide();
                setTimeout(() => {
                    const successToast = document.getElementById('successToast');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(successToast);
                    toastBootstrap.show();
                }, 500); 
            })
            .catch(error => console.error('Error:', error));
        });
                
    } catch (error) {
        console.error("Error loading survey:", error);
    }
});
});

const creator = new SurveyCreator.SurveyCreator({ showSaveButton: true });
const container = document.getElementById("creatorContainer");
const mapdiv = document.getElementById("map");
const btn = document.getElementById("EncroachmentFormBtn");
btn.onclick = function() {
    if (container.style.display === "none") {
        console.log("closing  map")        
        mapdiv.style.display = "none";
        console.log("showing survey container")
        container.style.display = "block";
        console.log("changing button to close")
        btn.innerText = "Close Creator";       
        creator.render("creatorContainer"); // Render only when shown
        const savedJSON = localStorage.getItem("MySurveySave");
    if (savedJSON) {
    creator.JSON = JSON.parse(savedJSON);
    }
        
    } else {
        container.style.display = "none";
        mapdiv.style.display = 'block';
        btn.innerText = "Open Creator";
    }
};



creator.saveSurveyFunc = (saveNo, callback) => {
  console.log("Save button clicked!"); // Check your console for this!
  
  // Save to localStorage
  const surveyData = JSON.stringify(creator.JSON);
  localStorage.setItem("MySurveySave", surveyData);
  
  // You MUST call the callback to tell SurveyJS the save is finished
  // The first parameter is the saveNo, second is success (true/false)
  callback(saveNo, true);
};




function populateLabelFields(source) {
  const select = document.getElementById('labelField');
  select.innerHTML = '';

  const feature = source.getFeatures()[0];
  Object.keys(feature.getProperties())
    .filter(k => k !== 'geometry')
    .forEach(attr => {
      const opt = document.createElement('option');
      opt.value = attr;
      opt.textContent = attr;
      select.appendChild(opt);
    });
}

function updateLabelPreview() {
  const size = document.getElementById('fontSize').value;
  const font = document.getElementById('fontFamily').value;
  const fill = document.getElementById('fontColor').value;
  const stroke = document.getElementById('strokeColor').value;
  const strokeWidth = document.getElementById('strokeWidth').value;

  const preview = document.getElementById('labelPreview');
  preview.style.font = `${size}px ${font}`;
  preview.style.color = fill;
  preview.style.textShadow = `0 0 ${strokeWidth}px ${stroke}`;
  preview.textContent = 'Sample Label';
}

document.querySelectorAll(
  '#labelModal input, #labelModal select'
).forEach(el => el.addEventListener('input', updateLabelPreview));
    

function buildTextStyle(feature, params) {
  return new ol.style.Style({
    text: new ol.style.Text({
      text: String(feature.get(params.field) ?? ''),
      font: `${params.size}px ${params.font}`,
      fill: new ol.style.Fill({ color: params.fill }),
      stroke: new ol.style.Stroke({
        color: params.stroke,
        width: params.strokeWidth
      }),
      offsetY: params.offsetY,
      overflow: true
    })
  });
}

function createLabelLayer(source, params) {
  const labelSource = new ol.source.Vector();

  source.getFeatures().forEach(f => {
    const labelFeature = new ol.Feature({
      geometry: f.getGeometry().clone(),
      ...f.getProperties()
    });
    labelSource.addFeature(labelFeature);
  });

  return new ol.layer.Vector({
    source: labelSource,
    declutter: true,
    style: feature => buildTextStyle(feature, params)
  });
}

document.getElementById('applyLabels').addEventListener('click', () => {
  const params = {
    field: document.getElementById('labelField').value,
    size: Number(fontSize.value),
    font: fontFamily.value,
    fill: fontColor.value,
    stroke: strokeColor.value,
    strokeWidth: Number(strokeWidth.value),
    offsetY: Number(offsetY.value)
  };

  const labelLayer = createLabelLayer(dataLayer.getSource(), params);
  map.addLayer(labelLayer);

  bootstrap.Modal.getInstance(
    document.getElementById('labelModal')
  ).hide();
});


// const labelModalEl = document.getElementById('labelModal');
// const labelModal = new bootstrap.Modal(labelModalEl, {
//   backdrop: 'static',   // optional: prevent click-outside close
//   keyboard: false       // optional: prevent ESC close
// });

// labelModalEl.onclick = function () {
//   // Populate field list every time modal opens
//   populateLabelFields(dataLayer.getSource());

//   // Initialize preview with current values
//   updateLabelPreview();

//   // Show modal
//   labelModal.show();
// };
