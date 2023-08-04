
let pano1= new PANOLENS.ImagePanorama( 'images/re.jpg' );
let pano2 = new PANOLENS.ImagePanorama('images/img1.jpg');
let imageContainer = document.querySelector('.pan1')


var positions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

//  let info= new PANOLENS.Infospot(500, PANOLENS.DataImage.Info, true);
//  info.position.set(-100,-500,-5000 );
//  info.addHoverText( "M1 air 2020" );

// pano1.add( info );

pano1.link( pano2, positions[0]);
pano2.link( pano1, positions[1]);

viewer.add( pano1,pano2 );