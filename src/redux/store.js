import {combineReducers, createStore} from 'redux';
import modelsReducer from './modelsRedux';
import enginesReducer from './enginesRedux';
import gearboxesReducer from './gearboxesRedux';
import colorsReducer from './colorsRedux';
//import searchStringReducer from './searchStringRedux';

// define initial state and shallow-merge initial data
const initialState = {
    models:[
        {id:'pro_r53',name:'PRO R53', price:70000, checked:false},
        {id:'uber_rs2',name:'UBER RS2', price:50000, checked:false},
        {id:'standard',name:'STANDARD', price:40000, checked:false},
        {id:'wk',name:'WK', price:30000, checked:false}
    ],
    engines:[
        {id:'01',name:'5.2L 532BHP', price:5000, checked:false, fitfor:['pro_r53']},
        {id:'02',name:'4.2L 443BHP', price:3000, checked:false, fitfor:['pro_r53','uber_rs2']},
        {id:'03',name:'3.6L 374BHP', price:2000, checked:false, fitfor:['pro_r53','uber_rs2','standard']},
        {id:'04',name:'2.0L 166BHP', price:1000, checked:false, fitfor:['pro_r53','standard','wk']}
    ],
    gearboxes:[
        {id:'aut', name:'Automatic', price: 10000, checked:false, fitfor:['01','02']},
        {id:'man', name:'Manual', price:5000, checked:false, fitfor:['02','03','04']}
    ],
    colors:[
      {id:'white', name:'White', price:0, checked:false},
      {id:'red', name:'Red', price:500, checked:false},
      {id:'blue', name:'Blue', price:400, checked:false},
      {id:'silver', name:'Silver', price:450, checked:false}
    ],
};

// define reducers
const reducers = {
  models: modelsReducer,
  engines: enginesReducer,
  gearboxes: gearboxesReducer,
  colors: colorsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;