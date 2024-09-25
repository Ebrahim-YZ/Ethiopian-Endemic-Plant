import img1 from '../Images/Ethio_Map.png';
import './Comp1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons';



function ImageWithDisc() {

    return (
        <>
            <div className="container1">
                <div className="column1 left-column1">
                    <img src={img1} alt="Description" style={{ width: '600px', height: '500px' }} />
                    <h3 style={{
                        color: "#30323e", textAlign: 'center', fontSize: '20px',  paddingTop: '5px',
                        fontWeight: 'bold'
                    }}> Ethiopian Köppen Climate Classification</h3>
                </div>
                <div className="column1 right-column1">
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#fe6712", paddingRight: "5px" }} /> Warm Desert Climate</p>
                    <p><FontAwesomeIcon icon={faCircle} beatFade size="lg" style={{ color: "#ff9900", paddingRight: "5px" }} /> Warm Semi-Arid Climate</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#3aaafc", paddingRight: "5px" }} /> Tropical Savanna Climate</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#dbf0dd", paddingRight: "5px" }} /> Humid Subtropical Climate</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#94f3a1", paddingRight: "5px" }} /> Subtropical Oceanic Climate</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#94f770", paddingRight: "5px" }} /> Temperate Oceanic Climate </p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#fdfe1b", paddingRight: "5px" }} /> Warm Mediterranean Climate</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#cecc08", paddingRight: "5px" }} /> Temperate Mediterranean Climate</p>

                </div>
            </div>

        </>
    );
}

export default ImageWithDisc;
