import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MessageBar, MessageBarType} from 'office-ui-fabric-react';
import MainPage from './components/MainPage';
import Menu from './components/Menu';

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderMessage() {
        if (this.props.result.message !== "") {
            return (
                <MessageBar
                    messageBarType={ this.props.result.type == "error" ? MessageBarType.error : MessageBarType.success }
                >
                    {this.props.result.message}
                </MessageBar>
            )
        }
    }

    render() {
        return (
            <div>
                <Menu/>
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
