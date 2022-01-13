// selectors
export const getCheckedEngine = ({engines}) => engines.find(engine => engine.checked === true);
// action name creator
const reducerName = 'engines';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TOGGLE_CHACKED = createActionName('TOGGLE_CHACKED');

// action creators
export const createActionToggleChackedEngine = payload => ({payload, type: TOGGLE_CHACKED});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case TOGGLE_CHACKED:{
      const engines = statePart;
      const engineId = action.payload; 
      return engines.map(engine => engine.id === engineId ? {...engine, checked:!engine.checked}: engine.checked ? {...engine,checked:!engine.checked}:{...engine});
    }
    default:
      return statePart;
  }
}