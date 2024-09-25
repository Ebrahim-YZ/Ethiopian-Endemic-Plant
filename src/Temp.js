import React, { useState,useEffect } from 'react';
import Popup1 from './PopupComp/Popup1';
import Popup2 from './PopupComp/Popup2';
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
  };

  const closeComponents = () => {
    setShowComponent1(false);
    setShowComponent2(false);
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
      style={{textAlign:'center',color:'#30323e',borderBottom:'1px solid black',
      display:'flex',justifyContent:'center',textTransform:'uppercase',fontWeight:'bold'}}>Ethiopian Endemic Plants </h3>
      {/* Header 1 */}
      <div className="header" onClick={() => toggleParagraph(1)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Hageniaabyssinica1")} {openIndex === 1 ? '(-)' : '(+)'}
        </div>
        {openIndex === 1 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 1.{' '}
              <button onClick={handleButton1Click}>Open Component1</button>
            </p>
          </div>
        )}
      </div>

      {/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(2)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 2 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>
      {/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(3)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 3 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(4)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 4 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(5)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 5 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(6)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 6 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(7)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 7 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(8)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 8 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(9)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 9 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(10)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 10 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(11)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 11 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(12)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 12 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(13)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 13 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(14)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 14 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>{/* Header 2 */}
      <div className="header" onClick={() => toggleParagraph(15)}>
        <div className="header-title">
        <FontAwesomeIcon icon={faSquare} fade size="lg" style={{ color: "#fe6712", paddingRight: "1px" }} />  {t("HeaderEnd.Rosaabyssinica1")}  {openIndex === 2 ? '(-)' : '(+)'}
        </div>
        {openIndex === 15 && (
          <div>
            <p className="paragraph">
              This is the paragraph for Header 2.{' '}
              <button onClick={handleButton2Click}>Open Component2</button>
            </p>
          </div>
        )}
      </div>

      {showComponent1 && <Popup1 onClose={closeComponents} />}
      {showComponent2 && <Popup2 onClose={closeComponents} />}
    </div>
  );
};

export default YourComponent;
