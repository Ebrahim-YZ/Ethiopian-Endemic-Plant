import img1 from '../Images/Trd_Ethio_Map.png';
import './Comp2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";



function ImageWithDisc2() {
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
            <div className="two-column-container1">
                <div className="column left-column">
                    <img src={img1} alt="Description" style={{ width: '600px', height: '500px', }} />
                    <h3 style={{
                        color: "#30323e", textAlign: 'center', fontSize: '20px', paddingTop: '5px',
                        fontWeight: 'bold'
                    }}> {t("Tkop")}</h3>
                </div>
                <div className="column right-column">
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#ec9d1b", paddingRight: "5px" }} />  {t("Qola")}</p>
                    <p><FontAwesomeIcon icon={faCircle} beatFade size="lg" style={{ color: "#d22b24", paddingRight: "5px" }} />  {t("Berha")}</p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#90d23f", paddingRight: "5px" }} />  {t("WeynaD")} </p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#969998", paddingRight: "5px" }} />  {t("Dega")} </p>
                    <p><FontAwesomeIcon icon={faCircle} fade size="lg" style={{ color: "#304fa1", paddingRight: "5px" }} /> {t("Wurch")}</p>
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

export default ImageWithDisc2;
