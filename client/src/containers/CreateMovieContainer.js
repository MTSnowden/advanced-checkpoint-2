import { connect } from "react-redux";
import CreateMovie from "../components/CreateMovie";
import { createMovie } from "../actions";


const mapDispatchToProps = { createMovie: createMovie };

export default connect(null, mapDispatchToProps)(CreateMovie);
