import React, { useEffect, useState } from "react";
import img1 from '../Images/Ethio_Map.png';
import './Comp1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";


function ImageWithDisc() {
    /* LangTran-started*/
    const { t, i18n } = useTranslation();
    const onChangeLang = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    
    useEffect(() => {
        for (
            let index = 0;
            index < document.getElementsByClassName("lang").length;
            index++
        ) {
            const element = document.getElementsByClassName("lang")[index];
            if (element.value === i18n.language) {
                element.setAttribute("selected", "true");
            }
        }
    });
    /* LangTran-ended*/

    return (
        <>
            <div className="container1">
                <div className="column1 left-column1">
                    <img src={img1} alt="Description" style={{ width: '600px', height: '500px' }} />
                    <h3 style={{
                        color: "#30323e", textAlign: 'center', fontSize: '20px', paddingTop: '5px',
                        fontWeight: 'bold'
                    }}>  {t("Kop")}</h3>
                </div>
                <div className="column1 right-column1">

                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#fe6712", paddingRight: "5px" }} />   {t("WDC")}</p>
                    <p><FontAwesomeIcon icon={faCircle} beatFade size="lg" style={{ color: "#ff9900", paddingRight: "5px" }} /> {t("WSEC")}</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#3aaafc", paddingRight: "5px" }} /> {t("TSC")}</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#dbf0dd", paddingRight: "5px" }} />{t("HUC")}</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#94f3a1", paddingRight: "5px" }} />{t("SUC")}</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#94f770", paddingRight: "5px" }} />{t("TEC")} </p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#fdfe1b", paddingRight: "5px" }} /> {t("WARC")}</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#cecc08", paddingRight: "5px" }} /> {t("TEMEC")}</p>
                    <select
                        className='selc'
                        onChange={onChangeLang}>
                        <option value="en" className="lang">
                            EN(እን)
                        </option>
                        <option value="am" className="lang">
                            Am(አማ)
                        </option>
                    </select>
                </div>
            </div>

        </>
    );
}

export default ImageWithDisc;
