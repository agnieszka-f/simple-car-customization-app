// selectors
export const getCheckedGearbox = ({gearboxes}) => gearboxes.find(gearbox => gearbox.checked === true);
// action name creator
const reducerName = 'gearboxes';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TOGGLE_CHACKED = createActionName('TOGGLE_CHACKED');

// action creators
export const createActionToggleChackedGearbox = payload => ({payload, type: TOGGLE_CHACKED});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case TOGGLE_CHACKED:{
      const gearboxes = statePart;
      const gearboxId = action.payload; 
      return gearboxes.map(gearbox => gearbox.id === gearboxId ? {...gearbox, checked:!gearbox.checked}: gearbox.checked ? {...gearbox,checked:!gearbox.checked}:{...gearbox});
    }
    default:
      return statePart;
  }
}