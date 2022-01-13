import React from 'react';
import './Option.css';

class Option extends React.Component{
  render(){
    const {collection, handleChecked, checkedOption, option} = this.props; 
    if(option !== 'Color')  
      return(
        <div>
        <h4>{option}</h4>
        {
          collection.map(item => <button key={item.id} 
                                      className={item.checked? 'checked':''}
                                      onClick={()=>handleChecked(item.id)}
                                      disabled={(checkedOption && item.fitfor.includes(checkedOption.id)) || !item.fitfor ? false : true}
                              >
                                {item.name}
                              </button>)
        }
      </div>          
      );
    else 
      return(
        <div>
        <h4>{option}</h4>
        { 
           collection.map(color => <button key={color.id} 
                                      className={`colorBtn ${color.id} ${(color.checked ? ' colorChecked' : '')}`}
                                      onClick={()=>handleChecked(color.id)}
                              >
                              </button>)
        }         
      </div>        
      );
  }
}

export default Option;