import { connect } from "react-redux";
import HomePage from "./component";
import { logout } from "../../../actions/auth";

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, {
  logout
})(HomePage);
