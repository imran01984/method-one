import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap CSS
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./searchmodal.css"
 
function StaticExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 1658 436" width="640" height="436">
  <title>Accenture-svg</title>
  <style>
   
    .shp0 { fill: #a100ff }
    .shp1 { fill: #000000 }
  </style>
  <g id="Layer">
    <path id="Layer" class="shp0" d="M964.92 121.67L1060.29 86.19L964.92 49.68L964.92 0L1128.27 65.91L1128.27 106.47L964.92 172.37L964.92 121.67Z"/>
    <path id="Layer" fill-rule="evenodd" class="shp1" d="M62.91 436C28.41 436 0 418.76 0 380.23L0 378.2C0 331.56 40.59 315.34 90.3 315.34L113.64 315.34L113.64 306.21C113.64 286.95 105.52 275.8 85.23 275.8C66.97 275.8 57.83 285.93 56.82 300.13L6.09 300.13C10.15 257.54 43.63 237.27 88.27 237.27C133.93 237.27 167.41 256.53 167.41 304.19L167.41 431.94L115.67 431.94L115.67 409.64C105.52 423.83 88.27 436 62.91 436ZM113.64 369.08L113.64 350.83L92.33 350.83C65.95 350.83 52.76 357.93 52.76 375.16L52.76 377.19C52.76 390.37 60.88 399.5 79.14 399.5C97.4 398.48 113.64 388.34 113.64 369.08ZM288.16 436C235.4 436 196.84 403.55 196.84 338.66L196.84 335.62C196.84 270.73 237.42 236.25 288.16 236.25C331.79 236.25 367.3 258.56 371.36 308.24L320.62 308.24C317.58 289.99 307.43 277.82 289.17 277.82C266.85 277.82 250.61 296.07 250.61 333.59L250.61 339.67C250.61 378.2 264.82 395.44 289.17 395.44C307.43 395.44 320.62 382.26 323.67 360.97L372.37 360.97C369.33 405.58 339.9 436 288.16 436ZM487.02 436C434.26 436 395.71 403.55 395.71 338.66L395.71 335.62C395.71 270.73 436.29 236.25 487.02 236.25C530.65 236.25 566.17 258.56 570.22 308.24L519.49 308.24C516.45 289.99 506.3 277.82 488.04 277.82C465.72 277.82 449.48 296.07 449.48 333.59L449.48 339.67C449.48 378.2 463.69 395.44 488.04 395.44C506.3 395.44 519.49 382.26 522.54 360.97L571.24 360.97C568.2 405.58 538.77 436 487.02 436ZM686.91 436C632.12 436 594.58 403.55 594.58 339.67L594.58 335.62C594.58 271.74 634.15 236.25 685.89 236.25C733.58 236.25 773.15 262.61 773.15 326.49L773.15 349.81L648.35 349.81C650.38 384.29 665.6 397.47 687.92 397.47C708.21 397.47 719.38 386.32 723.43 373.13L773.15 373.13C767.06 408.62 736.62 436 686.91 436ZM649.37 314.33L720.39 314.33C719.38 285.93 706.19 273.77 684.88 273.77C668.64 274.78 653.42 283.91 649.37 314.33ZM859.4 241.32L859.4 269.71C868.53 251.46 887.8 237.27 917.23 237.27C951.73 237.27 975.06 258.56 975.06 304.19L975.06 431.94L921.29 431.94L921.29 312.3C921.29 289.99 912.16 279.85 892.88 279.85C874.61 279.85 859.4 291 859.4 315.34L859.4 431.94L805.62 431.94L805.62 241.32L859.4 241.32ZM1073.48 183.53L1073.48 241.32L1110.01 241.32L1110.01 280.87L1073.48 280.87L1073.48 371.11C1073.48 385.3 1079.57 392.4 1092.76 392.4C1100.88 392.4 1105.95 391.39 1111.02 389.36L1111.02 430.93C1104.94 432.96 1093.78 434.99 1080.59 434.99C1038.99 434.99 1019.71 415.72 1019.71 377.19L1019.71 280.87L997.39 280.87L997.39 241.32L1019.71 241.32L1019.71 205.83L1073.48 183.53ZM1310.91 431.94L1258.15 431.94L1258.15 403.55C1249.01 421.8 1230.75 436 1202.34 436C1167.84 436 1142.48 414.71 1142.48 370.09L1142.48 241.32L1196.25 241.32L1196.25 363C1196.25 385.3 1205.39 395.44 1223.65 395.44C1241.91 395.44 1257.13 383.27 1257.13 359.95L1257.13 241.32L1310.91 241.32L1310.91 431.94ZM1350.48 241.32L1404.25 241.32L1404.25 276.81C1415.41 251.46 1433.68 239.29 1462.09 239.29L1462.09 292.02C1425.56 292.02 1404.25 303.17 1404.25 334.6L1404.25 432.96L1350.48 432.96L1350.48 241.32ZM1570.65 436C1515.86 436 1478.32 403.55 1478.32 339.67L1478.32 335.62C1478.32 271.74 1517.89 236.25 1569.64 236.25C1617.33 236.25 1656.9 262.61 1656.9 326.49L1656.9 349.81L1533.11 349.81C1535.14 384.29 1550.36 397.47 1572.68 397.47C1592.98 397.47 1604.14 386.32 1608.2 373.13L1657.91 373.13C1649.8 408.62 1620.37 436 1570.65 436ZM1532.1 314.33L1604.14 314.33C1603.12 285.93 1589.93 273.77 1568.62 273.77C1552.39 274.78 1537.17 283.91 1532.1 314.33Z"/>
  </g>
</svg>
  `;
 
   // Modified handleShow function to open modal and navigate to /search.js
   const handleShow = () => {
    setShow(true);
   
  };
  return (
    <>
    <div className="white-button" onClick={handleShow}>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="24"
            opacity="1"
            width="24"
            color="black"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </a>
      </div>
 
   
      <Modal show={show}  onHide={handleClose} size="lg" >
     
 
      <Modal.Body style={{maxHeight: '100vh', overflowY: 'auto', marginRight: '0px' }} >
          <Button
            variant="secondary"
            style={{
              marginLeft: '48vw',
              marginRight: 'auto',
              backgroundColor: '#ffffff',
              color: 'black',
              border: 'none',
            }}
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <h2 style={{ fontWeight: 'bold', marginLeft: '4vw' }}>New to Method One?</h2>
          <div className="top-head">
            <div className="row">
            <div className="col-md-1"></div>
              {/* First Column */}
              <div className="col-md-3">
                <div className="circle-container">01</div>
                <p>Filter results to get exactly what you need</p>
              </div>
              {/* Second Column */}
              <div className="col-md-3">
                <div className="circle-container">02</div>
                <p>Choose a view that works for you</p>
              </div>
              {/* Third Column */}
              <div className="col-md-3">
                <div className="circle-container">03</div>
                <p>Pick a card to preview what's in store</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: '2vw', backgroundColor:'#ffffff' , color:'black'}}dangerouslySetInnerHTML={{ __html: svgMarkup }} />
          <div style={{ marginLeft: '2vw', backgroundColor:'#ffffff' , color:'black'}}dangerouslySetInnerHTML={{ __html: svgMarkup }} />
        </Modal.Body>
 
        <Modal.Footer  style={{ position: 'sticky', bottom: 0, zIndex: 1, backgroundColor: '#fff', padding: '20px' }}>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} style={{ marginLeft: '-42vw', backgroundColor:'#ffffff' , color:'black'}}>
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Do not show this again`}
                />
              </div>
            ))}
          </Form>
          <a href="/" className="btn btn-new" onClick={handleClose}>
            Get Started
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default StaticExample;