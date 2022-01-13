// selectors
export const getCheckedModel = ({models}) => models.find(model => model.checked === true);
// action name creator
const reducerName = 'models';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TOGGLE_CHACKED = createActionName('TOGGLE_CHACKED');

// action creators
export const createActionToggleChackedModel = payload => ({payload, type: TOGGLE_CHACKED});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case TOGGLE_CHACKED:{
      const models = statePart;
      const modelId = action.payload; 
      return models.map(model => model.id === modelId ? {...model, checked:!model.checked}: model.checked ? {...model,checked:!model.checked}:{...model});
    }
    default:
      return statePart;
  }
}