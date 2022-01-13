import {connect} from 'react-redux';
import App from './App';
import {createActionToggleChackedModel, getCheckedModel} from '../redux/modelsRedux.js';
import {createActionToggleChackedEngine, getCheckedEngine} from '../redux/enginesRedux.js';
import {createActionToggleChackedGearbox, getCheckedGearbox} from '../redux/gearboxesRedux.js';
import {createActionToggleChackedColor, getCheckedColor} from '../redux/colorsRedux.js';

const mapStateToProps = state => ({
  models: state.models,
  checkedModel: getCheckedModel(state),
  engines: state.engines,
  checkedEngine: getCheckedEngine(state),
  gearboxes: state.gearboxes,
  checkedGearbox: getCheckedGearbox(state),
  colors: state.colors,
  checkedColor: getCheckedColor(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  toggleCheckedModel: id => dispatch(createActionToggleChackedModel(id)),
  toggleCheckedEngine: id => dispatch(createActionToggleChackedEngine(id)),
  toggleCheckedGearbox: id => dispatch(createActionToggleChackedGearbox(id)),
  toggleCheckedColor: id => dispatch(createActionToggleChackedColor(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);