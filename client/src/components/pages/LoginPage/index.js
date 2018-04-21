import { connect } from "react-redux";
import LoginPage from "./component";

import { login } from "../../../actions/auth";

export default connect(null, { login })(LoginPage);
