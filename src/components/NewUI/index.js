import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


import * as jsonActions from '../../reducer/reducer';


export class ActionsMenu extends Component {
    constructor(props) {
        super(props);
        this.onClickBeautify = this.onClickBeautify.bind(this);
        this.onClickRemoveWhiteSpaces = this.onClickRemoveWhiteSpaces.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
    }

    onClickBeautify() {
        console.log("beautify");
        this.props.actions.beautify(this.props.convertText);
    }

    onClickRemoveWhiteSpaces() {
        console.log("remove white space");
        this.props.actions.removeWhiteSpace(this.props.convertText);
    }

    onClickReset() {
        console.log("reset");
        this.props.actions.reset();
    }

    render() {
        return (
            <Toolbar>

                <ToolbarGroup firstChild={true}>
                    <FlatButton label="Beautify"
                                icon={
                                    <FontIcon
                                        className="material-icons">
                                        sort
                                    </FontIcon>
                                }
                                onTouchTap={this.onClickBeautify}/>
                    <FlatButton label="Remove White Space"
                                icon={
                                    <FontIcon
                                        className="material-icons">
                                        compare_arrows
                                    </FontIcon>
                                }
                                onTouchTap={this.onClickRemoveWhiteSpaces}/>
                    <FlatButton label="Reset"
                                icon={
                                    <FontIcon
                                        className="material-icons">
                                        clear
                                    </FontIcon>
                                }
                                onTouchTap={this.onClickReset}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}


const mapStateToProps = (state) => ({
    convertText: state.convertText
});

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(jsonActions, dispatch)
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(ActionsMenu);
