import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainPage from './components/MainPage';
import Snackbar from 'material-ui/Snackbar';

import NewUI from './components/NewUI';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    renderMessage() {
        if (this.props.result.message !== "") {
            return (
                <MuiThemeProvider>
                    <Snackbar
                        open={true}
                        message={this.props.result.message}
                        autoHideDuration={4000}
                        className={ this.props.result.type }
                    />
                </MuiThemeProvider>
            )
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <NewUI/>
                </MuiThemeProvider>
                {this.renderMessage()}
                <MainPage/>
            </div>
        );
    };
}
const mapStateToProps = (state) => ({
    result: state.result
});
export default connect(mapStateToProps, null)(App);
