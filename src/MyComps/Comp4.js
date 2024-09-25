import React, { useState, useEffect } from 'react';
import Popup1 from './PopupComp/Popup1';
import Popup2 from './PopupComp/Popup2';
import Popup3 from './PopupComp/Popup3';
import Popup4 from './PopupComp/Popup4';
import Popup5 from './PopupComp/Popup5';
import Popup6 from './PopupComp/Popup6';
import Popup7 from './PopupComp/Popup7';
import Popup8 from './PopupComp/Popup8';
import Popup9 from './PopupComp/Popup9';
import Popup10 from './PopupComp/Popup10';
import Popup11 from './PopupComp/Popup11';
import Popup12 from './PopupComp/Popup12';
import Popup13 from './PopupComp/Popup13';
import Popup14 from './PopupComp/Popup14';
import Popup15 from './PopupComp/Popup15';

import { useTranslation } from "react-i18next";
import './Comp4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


const YourComponent = () => {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);
  const [showComponent5, setShowComponent5] = useState(false);
  const [showComponent6, setShowComponent6] = useState(false);
  const [showComponent7, setShowComponent7] = useState(false);
  const [showComponent8, setShowComponent8] = useState(false);
  const [showComponent9, setShowComponent9] = useState(false);
  const [showComponent10, setShowComponent10] = useState(false);
  const [showComponent11, setShowComponent11] = useState(false);
  const [showComponent12, setShowComponent12] = useState(false);
  const [showComponent13, setShowComponent13] = useState(false);
  const [showComponent14, setShowComponent14] = useState(false);
  const [showComponent15, setShowComponent15] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);
  

  const toggleParagraph = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleButton1Click = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };

  const handleButton2Click = () => {
    setShowComponent1(false);
    setShowComponent2(true);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton3Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(true);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton4Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(true);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton5Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(true);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton6Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(true);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton7Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(true);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton8Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(true);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton9Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(true);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton10Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(true);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton11Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(true);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton12Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(true);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton13Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(true);
    setShowComponent14(false);
    setShowComponent15(false);
  };
  const handleButton14Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(true);
    setShowComponent15(false);
  };
  const handleButton15Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(true);
  };

  const closeComponents = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent5(false);
    setShowComponent6(false);
    setShowComponent7(false);
    setShowComponent8(false);
    setShowComponent9(false);
    setShowComponent10(false);
    setShowComponent11(false);
    setShowComponent12(false);
    setShowComponent13(false);
    setShowComponent14(false);
    setShowComponent15(false);
  };




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
    <div className="your-component">
      <h3 className='endpla'
        style={{
          textAlign: 'center', color: '#30323e', borderBottom: '1px solid black',
          display: 'flex', justifyContent: 'center', textTransform: 'uppercase', fontWeight: 'bold'
        }}> {t("BTEP")}{' '} </h3>
      <p style={{ fontSize: '13px', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>{t("OnlyBTEP")}</p>

      {/* Header 1 */}
      <div className="header" onClick={() => toggleParagraph(1)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Hageniaabyssinica1")} {openIndex === 1 ? '(-)' : '(+)'}
        </div>
        {openIndex === 1 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis1")}{' '}
              <button className="link-button" onClick={handleButton1Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>

      {/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(2)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#cecc08", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 2 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis2")}{' '}
              <button className="link-button" onClick={handleButton1Click}>
                {t('RM')}
              </button>
            </p>
          </div>
        )}
      </div>
      {/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(3)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#ff9900", paddingRight: "1px" }} />  {t("HeaderEnd.Enset1")}  {openIndex === 3 ? '(-)' : '(+)'}
        </div>
        {openIndex === 3 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis3")}{' '}
              <button className="link-button" onClick={handleButton3Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(4)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fdfe1b", paddingRight: "1px" }} />  {t("HeaderEnd.Eragrostis1")}  {openIndex === 4 ? '(-)' : '(+)'}
        </div>
        {openIndex === 4 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis4")}{' '}
              <button className="link-button" onClick={handleButton4Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(5)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#94f3a1", paddingRight: "1px" }} />  {t("HeaderEnd.Coffee1")}  {openIndex === 5 ? '(-)' : '(+)'}
        </div>
        {openIndex === 5 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis5")}{' '}
              <button className="link-button" onClick={handleButton5Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(6)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Acacia1")}  {openIndex === 6 ? '(-)' : '(+)'}
        </div>
        {openIndex === 6 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis6")}{' '}
              <button className="link-button" onClick={handleButton6Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(7)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#3aaafc", paddingRight: "1px" }} />  {t("HeaderEnd.Kniphofia1")}  {openIndex === 7 ? '(-)' : '(+)'}
        </div>
        {openIndex === 7 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis7")}{' '}
              <button className="link-button" onClick={handleButton7Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(8)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Kalanchoe1")}  {openIndex === 8 ? '(-)' : '(+)'}
        </div>
        {openIndex === 8 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis8")}{' '}
              <button className="link-button" onClick={handleButton8Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(9)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#3aaafc", paddingRight: "1px" }} />  {t("HeaderEnd.Lippia1")}  {openIndex === 9 ? '(-)' : '(+)'}
        </div>
        {openIndex === 9 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis9")}{' '}
              <button className="link-button" onClick={handleButton9Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(10)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Jasminum1")}  {openIndex === 10 ? '(-)' : '(+)'}
        </div>
        {openIndex === 10 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis10")}{' '}
              <button className="link-button" onClick={handleButton10Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(11)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#ec9d1b", paddingRight: "1px" }} />  {t("HeaderEnd.Millettia1")}  {openIndex === 11 ? '(-)' : '(+)'}
        </div>
        {openIndex === 11 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis11")}{' '}
              <button className="link-button" onClick={handleButton11Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(12)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#d22b24", paddingRight: "1px" }} />  {t("HeaderEnd.Vernonia1")}  {openIndex === 12 ? '(-)' : '(+)'}
        </div>
        {openIndex === 12 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis12")}{' '}
              <button className="link-button" onClick={handleButton12Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(13)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#304fa1", paddingRight: "1px" }} />  {t("HeaderEnd.Triumfetta1")}  {openIndex === 13 ? '(-)' : '(+)'}
        </div>
        {openIndex === 13 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis13")}{' '}
              <button className="link-button" onClick={handleButton13Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(14)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Laggera1")}  {openIndex === 14 ? '(-)' : '(+)'}
        </div>
        {openIndex === 14 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis14")}{' '}
              <button className="link-button" onClick={handleButton14Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(15)}>
        <div className="header-title">
          <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#969998", paddingRight: "1px" }} />  {t("HeaderEnd.JasminumAb1")}  {openIndex === 15 ? '(-)' : '(+)'}
        </div>
        {openIndex === 15 && (
          <div>
            <p className="paragraph">
              {t("EndmicList.Dis15")}{' '}
              <button className="link-button" onClick={handleButton15Click}>{t("RM")}</button>
            </p>
          </div>
        )}
      </div>

      {showComponent1 && <Popup1 onClose={closeComponents} />}
      {showComponent2 && <Popup2 onClose={closeComponents} />}
      {showComponent3 && <Popup3 onClose={closeComponents} />}
      {showComponent4 && <Popup4 onClose={closeComponents} />}
      {showComponent5 && <Popup5 onClose={closeComponents} />}
      {showComponent6 && <Popup6 onClose={closeComponents} />}
      {showComponent7 && <Popup7 onClose={closeComponents} />}
      {showComponent8 && <Popup8 onClose={closeComponents} />}
      {showComponent9 && <Popup9 onClose={closeComponents} />}
      {showComponent10 && <Popup10 onClose={closeComponents} />}
      {showComponent11 && <Popup11 onClose={closeComponents} />}
      {showComponent12 && <Popup12 onClose={closeComponents} />}
      {showComponent13 && <Popup13 onClose={closeComponents} />}
      {showComponent14 && <Popup14 onClose={closeComponents} />}
      {showComponent15 && <Popup15 onClose={closeComponents} />}
    </div>
  );
};

export default YourComponent;
