import img1 from '../Images/Trd_Ethio_Map.png';
import './Comp2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons';



function ImageWithDisc2() {

    return (
        <>
            <div className="two-column-container1">
                <div className="column left-column">
                    <img src={img1} alt="Description" style={{ width: '600px', height: '500px', }} />
                    <h3 style={{
                        color: "#30323e", textAlign: 'center', fontSize: '20px', paddingTop: '5px',
                        fontWeight: 'bold'
                    }}> Ethiopian Traditional Agroecological Zone Classification</h3>
                </div>
                <div className="column right-column">
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#ec9d1b", paddingRight: "5px" }} /> Qola (Less Hot Zone)</p>
                    <p><FontAwesomeIcon icon={faCircle} beatFade size="lg" style={{ color: "#d22b24", paddingRight: "5px" }} /> Berha  (More Hot Zone)</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#90d23f", paddingRight: "5px" }} /> Weyna Dega (Temperate Zone) </p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#969998", paddingRight: "5px" }} /> Dega (Alpine Vegetated Zones)</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#304fa1", paddingRight: "5px" }} /> Wurch  (Very Temperate Zone)</p>

                </div>
            </div>

        </>
    );
}

export default ImageWithDisc2;
