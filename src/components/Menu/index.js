import React, {Component} from 'react';
import {CommandBar} from 'office-ui-fabric-react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as jsonActions from '../../reducer/reducer';


export class Menu extends Component {
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
        let menuItems = [
            {
                name: "Beautify",
                icon: "ms-Icon ms-Icon--Code",
                onClick: this.onClickBeautify
            },
            {
                name: "Remove White Space",
                icon: "ms-Icon ms-Icon--ClearFormatting",
                onClick: this.onClickRemoveWhiteSpaces
            },
            {
                name: "Reset",
                icon: "ms-Icon ms-Icon--Delete",
                onClick: this.onClickReset
            }];
        return (
            <div>
                <CommandBar
                    isSearchBoxVisible={ false }
                    items={ menuItems }
                />
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
