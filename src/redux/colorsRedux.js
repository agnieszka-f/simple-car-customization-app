export const getCheckedColor = ({colors}) => colors.find(color => color.checked === true);
// action name creator
const reducerName = 'colors';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TOGGLE_CHACKED = createActionName('TOGGLE_CHACKED');

// action creators
export const createActionToggleChackedColor = payload => ({payload, type: TOGGLE_CHACKED});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case TOGGLE_CHACKED:{
      const colors = statePart;
      const colorId = action.payload; 
      return colors.map(color => color.id === colorId ? {...color, checked:!color.checked}: color.checked ? {...color,checked:!color.checked}:{...color});
    }
    default:
      return statePart;
  }
}