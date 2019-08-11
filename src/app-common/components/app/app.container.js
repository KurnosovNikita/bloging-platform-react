/*
* App container
* */
import App from './app.component';
import {connect} from "react-redux";

export const mapStateToProps = (state, props) => {
    return {
        pages: state.app.pages,
    };
};

export const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);