import Drawer from "../../components/Drawer";
import { connect } from "react-redux";
import { TOGGLE_DRAWER } from "./actions";

const mapStateToProps = state => ({
  toggled: state.drawer.toggled
});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch({ type: TOGGLE_DRAWER, payload: { toggled: false } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
