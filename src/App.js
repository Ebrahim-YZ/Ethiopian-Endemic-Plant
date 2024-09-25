import React, { useState, useEffect } from 'react';
import Comp1 from './MyComps/Comp1';
import Comp2 from './MyComps/Comp2';
import YourComponent from './MyComps/Comp4';

import './App.css';
import { useTranslation } from "react-i18next";


// Component 1
const Component1 = () => {
  return <div><Comp1></Comp1></div>;
};

// Component 2
const Component2 = () => {
  return <div><Comp2></Comp2></div>;
};

function App() {
  const [currentComponent, setCurrentComponent] = useState(1);

  // For tracking selected button
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (componentNumber) => {
    setCurrentComponent(componentNumber);
    setSelectedButton(componentNumber);
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
    <>
      <div className="container">
        <div className="column1">

          <div className="row1">
            {currentComponent === 1 ? <Component1 /> : <Component2 />}
          </div>
          
          <div className="row2">

            <button
              onClick={() => handleButtonClick(1)}
              className={selectedButton === 1 ? 'btn1 selected' : 'btn1'}
            >
              {t("kopBtn")}
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={selectedButton === 2 ? 'btn2 selected' : 'btn2'}
            >
              {t("TRDBtn")}
            </button>

          </div>
        </div>
        <div className="column2">
          <YourComponent/>
        </div>
      </div>
    </>
  );
}

export default App;
