import './App.css';
import React from 'react';
import Option from './Option/Option.js';
import Details from './Details/Details.js';

class App extends React.Component {
render(){ 
  const {models, engines, gearboxes, colors, toggleCheckedModel, toggleCheckedEngine, toggleCheckedGearbox, toggleCheckedColor, checkedModel, checkedEngine, checkedGearbox, checkedColor} = this.props;

  function handleCheckedModel(id){
    toggleCheckedModel(id); 
    if(checkedEngine) toggleCheckedEngine(checkedEngine.id);
    if(checkedGearbox) toggleCheckedGearbox(checkedGearbox.id);
  };
  
  function handleCheckedEngine(id){
    toggleCheckedEngine(id); 
    if(checkedGearbox) toggleCheckedGearbox(checkedGearbox.id);
  }
  
  function handleCheckedGearbox(id){
    toggleCheckedGearbox(id);
  }
  function handleCheckedColor(id){
    toggleCheckedColor(id)
  }

  return (
    <div className="container"> 
      <div className="options">
        <h3>Config 5.1</h3>
        <Option collection={models} handleChecked={handleCheckedModel} option={'Model'}/>

        <Option collection={engines} handleChecked={handleCheckedEngine} checkedOption={checkedModel} option={'Engine'}/>

        <Option collection={gearboxes} handleChecked={handleCheckedGearbox} checkedOption={checkedEngine} option={'Gearbox'}/>

        <Option collection={colors} handleChecked={handleCheckedColor} option={'Color'}/>
      </div>

      <Details checkedModel={checkedModel} checkedEngine={checkedEngine} checkedGearbox={checkedGearbox} checkedColor={checkedColor}/>
    </div>
   );
 }
}

export default App;
