import { Header } from './Header';
import { changeInputValue } from '../../redux/actions';
import { connect } from 'react-redux';
import { selectInputValues } from '../../redux/selectors';

const mapState2props = (state) => ({
  inputValues: selectInputValues(state),
});

const mapDispatch2props = {
  changeInputValue
}

const headerHandler = connect(mapState2props, mapDispatch2props)(Header);

export { headerHandler as Header };
