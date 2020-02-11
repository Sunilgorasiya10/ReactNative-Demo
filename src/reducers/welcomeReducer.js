import { WELCOME_ACTION_PRESSED } from "../actions/types";

const initialState = {
    welcomeText: 'welcome to React Native!!!!!'
}

export default welcome = (state = initialState, action) => {
    switch (action.type) {
        case WELCOME_ACTION_PRESSED:
            return { welcomeText: action.payload };
        default:
            return state;
    }
} 