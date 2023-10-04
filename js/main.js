
let pano1= new PANOLENS.ImagePanorama( 'images/new/out3.jpg' );
let pano2 = new PANOLENS.ImagePanorama('images/new/prayer.jpg');
let pano3 = new PANOLENS.ImagePanorama('images/new/prayer_wall.jpg');
let pano4 = new PANOLENS.ImagePanorama('images/new/tv.jpg');
let imageContainer = document.querySelector('.pan1')


var positions = [
    new THREE.Vector3(748.96, -638.22, -4891.75),
    new THREE.Vector3(-4601.78, -1771.32, -768.97),
    new THREE.Vector3(4547.04, -1330.67, 1574.16),
    new THREE.Vector3(3810.83, -2011.48, -2518.90),
    new THREE.Vector3(3069.33, -489.80, -3904.85),
    new THREE.Vector3(-4675.20, -76.64, -1745.33),
    new THREE.Vector3(2333.88, -481.02, -4385.72),
    new THREE.Vector3(3792.85, -314.42, 3230.81),
    
  ];
// pano1.setLinkingImage("./download.png", 400)
// pano2.setLinkingImage("./download.png", 400)
// pano3.setLinkingImage("./download.png", 400)
// pano4.setLinkingImage("./download.png", 400)
const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.1,
    controlBar: true,

  controlButtons: [],            // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
  autoHideControlBar: false,        // Auto hide control bar
  autoHideInfospot: true,            // Auto hide infospots
  horizontalView: false,            // Allow only horizontal camera control
  cameraFov: 60,                // Camera field of view in degree
  reverseDragging: false,            // Reverse orbit control direction
  enableReticle: false,            // Enable reticle for mouseless interaction
  dwellTime: 1500,            // Dwell time for reticle selection in millisecond
  autoReticleSelect: true,        // Auto select a clickable target after dwellTime
  viewIndicator: false,            // Adds an angle view indicator in upper left corner
  indicatorSize: 30,            // Size of View Indicator
  output: 'console'  
});

 let info= new PANOLENS.Infospot(300, PANOLENS.DataImage.Info, true);
 info.position.set(-3574.90, -1208.62, -3274.89);
 info.addHoverText( "Plants" );

 let info2= new PANOLENS.Infospot(200, PANOLENS.DataImage.Info, true);
 info2.position.set(4328.15, -2466.66, -319.19);
 info2.addHoverText( "FPV Drone" );

 let info3= new PANOLENS.Infospot(200, PANOLENS.DataImage.Info, true);
 info3.position.set(3044.71, -1758.16, 3543.95);
 info3.addHoverText( "RadioMaster Zorro" );

 
 let info4= new PANOLENS.Infospot(200, PANOLENS.DataImage.Info, true);
 info4.position.set(-4539.90, -545.24, 2012.79);
 info4.addHoverText( "VU 43\" LED TV" );

pano1.add( info);
pano2.add(info2);
pano3.add(info3);
pano4.add(info4);

pano1.link( pano2, positions[0]);
pano2.link( pano1, positions[1]);
pano2.link(pano3,positions[2]);
pano3.link(pano2,positions[3]);
pano3.link(pano1,positions[4]);
pano3.link(pano4,positions[5]);
pano4.link(pano3,positions[6]);
pano2.link(pano4,positions[7]);


viewer.add( pano1,pano2,pano3,pano4 );

