import './Popup1.css'; // Make sure to have your styling imported
import Acacia from '../../Images/Acacia.jpg';
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";




const Popup6 = ({ onClose }) => {
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
    <div className="popup">
      <p>  <b style={{ color: '#30323e', fontSize: '15px' }}>{t("EndmicList.FamName")}</b>{t("EndmicList.Acacia.FN")}</p>
      <img src={Acacia} alt="Description of the image" />
      <p><b style={{ color: '#30323e', fontSize: '15px' }}>{t("EndmicList.LanName")}</b>{t("EndmicList.Acacia.LN")}</p>
      <p><b style={{ color: '#30323e', fontSize: '15px' }}>{t("EndmicList.ShDis")}</b>{t("EndmicList.Dis6")}</p>
      <button onClick={onClose}> {t("Exit")}</button>
    </div>
  );
};

export default Popup6;
