import jsonlint from 'jsonlint-mod';
import beautifier from 'js-beautify';

const initialObject = {
    convertText: "",
    result: {
        message: "",
        type: ""
    },
    errorLines: []
};

export default function reducer(state = initialObject, action) {
    switch (action.type) {
        case 'SET_CONVERT_TEXT':
        case 'REMOVE_WHITE_SPACE':
            return Object.assign({}, state, {
                convertText: action.payload
            });
        case "BEAUTIFY":
            return Object.assign({}, state, {
                convertText: action.payload,
                result: action.result,
                errorLines: action.errorLines
            });
        case "RESET":
            return Object.assign({}, state, {
                convertText: initialObject.convertText,
                result: initialObject.result,
                errorLines: initialObject.errorLines
            });
        default:
            return state;
    }
}

export function setConvertText(val) {
    return {
        type: "SET_CONVERT_TEXT",
        payload: val
    }
}

function getErrorLines(err) {
    return err.message.match(/([0-9]+)/);
}

export function beautify(input) {
    let lineMatches = [];

    let message = "JSON is valid!";
    let type = "success";

    let newText = input;
    if (newText) {
        newText = beautifier.js_beautify(newText, {
            indent_with_tabs: true
        });

        try {
            jsonlint.parse(newText);
        } catch (e) {
            lineMatches = getErrorLines(e);
            type = "error";
            message = "JSON is not valid: " + e;
        }

    }
    return {
        type: "BEAUTIFY",
        payload: newText,
        result: {
            message: message,
            type: type
        },
        errorLines: lineMatches
    }
}


export function removeWhiteSpace(input) {
    let newText = input;
    if (input) {
        const jsonObj = JSON.parse(input);
        newText = JSON.stringify(jsonObj);
    }
    return {
        type: "REMOVE_WHITE_SPACE",
        payload: newText
    }
}

export function reset() {
    return {
        type: "RESET"
    }
}
