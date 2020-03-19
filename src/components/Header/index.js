import { Header } from './Header';
import { changeInputValue } from '../../redux/actions';
import { connect } from 'react-redux';

const mapState2props = (state) => ({
  inputValues: state.inputValues
});

const mapDispatch2props = {
  changeInputValue
}

const headerHandler = connect(mapState2props, mapDispatch2props)(Header);

export { headerHandler as Header };
