import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import "codemirror/mode/javascript/javascript";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as jsonActions from '../../reducer/reducer';

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.onChanged = this.onChanged.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errorLines && nextProps.errorLines.length > 0) {
            nextProps.errorLines.map(line => {
                this.refs.editor.codeMirror.doc.addLineClass(parseInt(line) - 1, "background", "error");
            });
        }
    }

    onChanged(val) {
        this.props.actions.setConvertText(val);
    }

    render() {
        if (this.props.errorLines && this.props.errorLines.length > 0) {
            this.props.errorLines.map(line => {
                this.refs.editor.codeMirror.doc.addLineClass(parseInt(line) - 1, "background", "error");
            });
        }

        const options = {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            indentWithTabs: true,
            autofocus: true,
            mode: 'javascript'
        };

        return (
            <div className="beautifier">
                <div className="beautifier-text">
                    <CodeMirror
                        ref="editor"
                        value={this.props.convertText}
                        onChange={this.onChanged}
                        options={options}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    convertText: state.convertText,
    errorLines: state.errorLines
});

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(jsonActions, dispatch)
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
