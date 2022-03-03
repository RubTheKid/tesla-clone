import React from 'react';
import './App.css';
import Header from './components/Header'
import Item from './components/Item'

import Cybertruck from './assets/Cybertruck.jpeg'
import Accessories from './assets/Accessories.jpg'
import ModelS from './assets/ModelS.jpeg'
import Model3 from './assets/Model3.jpeg'
import ModelX from './assets/ModelX.jpeg'
import ModelY from './assets/ModelY.jpeg'
import SolarPanels from './assets/SolarPanels.jpeg'
import SolarRoof from './assets/SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
    <Header />
    <div className="app_itemsContainer">
      <Item
      title='The New CyberTruck'
      desc='It will be out (someday)'
      descLink=''
      backgroundImg={Cybertruck}
      leftBtnTxt='ORDER NOW'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      rightBtnLink=''
      twoButtons='true'
      first
      />
      <Item
      title='Model S'
      desc='FROM $94,990'
      descLink=''
      backgroundImg={ModelS}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Model S Plaid'
      rightBtnLink=''
      twoButtons='true'
      />
      <Item
      title='Model 3'
      desc='FROM $44,990'
      descLink=''
      backgroundImg={Model3}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      />
      <Item
      title='Model Y'
      desc='FROM $53,940'
      descLink=''
      backgroundImg={ModelY}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Model Y Performance'
      rightBtnLink=''
      twoButtons='true'
      />
      <Item
      title='Model X'
      desc='FROM $104,990'
      descLink=''
      backgroundImg={ModelX}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Model X Plaid'
      rightBtnLink=''
      twoButtons='true'
      />
      <Item
      title='Solar Roof'
      desc='Clean Power, Outage Protection'
      descLink=''
      backgroundImg={SolarRoof}
      leftBtnTxt='ORDER NOW'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      rightBtnLink=''
      twoButtons='true'
      />
      <Item
      title='Shop Accessories'
      desc='Everything for your car and home'
      descLink=''
      backgroundImg={Accessories}
      leftBtnTxt='VIEW ACCESSORIES'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      rightBtnLink=''
      twoButtons='true'
      />

    </div>

    </div>
  );
}

export default App;
