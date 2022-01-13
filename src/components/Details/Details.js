import React from 'react';
import './Details.css';
import {calculate} from '../../utils/calculate.js';

class Details extends React.Component{
  render(){
    const {checkedModel, checkedEngine, checkedGearbox, checkedColor} = this.props;

      return (
        <div className="details">
            <div className="img">
              <svg width="150px">
                <path d="M28,13h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.8L25,8c-0.8-1.8-2.6-3-4.6-3h-8.7C9.6,5,7.8,6.2,7,8l-1.3,3H3c-0.6,0-1,0.4-1,1
                    s0.4,1,1,1h1c-1.2,0.9-2,2.4-2,4v4c0,0.9,0.4,1.7,1,2.2V25c0,1.7,1.3,3,3,3h2c1.7,0,3-1.3,3-3v-1h10v1c0,1.7,1.3,3,3,3h2
                    c1.7,0,3-1.3,3-3v-1.8c0.6-0.5,1-1.3,1-2.2v-4C30,15.4,29.2,13.9,28,13z M27,18c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h3
                    C26.6,17,27,17.4,27,18z M6,17h3c0.6,0,1,0.4,1,1s-0.4,1-1,1H6c-0.6,0-1-0.4-1-1S5.4,17,6,17z M10.4,22l1.2-2.3
                    c0.5-1,1.5-1.7,2.7-1.7h3.5c1.1,0,2.2,0.6,2.7,1.7l1.2,2.3H10.4z M8.9,8.8C9.4,7.7,10.4,7,11.6,7h8.7c1.2,0,2.3,0.7,2.8,1.8l1.4,3.2
                    h-17L8.9,8.8z" fill={checkedColor ? checkedColor.id:'white'} />
                </svg>
            </div>
            <div className="itemDetails">
                <p>Model</p>
                <p>{checkedModel ? checkedModel.name : ''}</p>
            </div>
            <div className="itemDetails">
                <p>Engine</p>
                <p>{checkedEngine ? checkedEngine.name : ''}</p>
            </div>
            <div className="itemDetails">
                <p>Gearbox</p>
                <p>{checkedGearbox ? checkedGearbox.name : ''}</p>
            </div>
            <div className="itemDetails">
                <p>Color</p>
                <p>{checkedColor ? checkedColor.name : ''}</p>
            </div>
            <div className="itemDetails summary">
                <p>Summary</p>
                <p>{calculate(checkedModel, checkedEngine, checkedGearbox, checkedColor)}</p>
            </div>
         </div>
      );
  }
}

export default Details;