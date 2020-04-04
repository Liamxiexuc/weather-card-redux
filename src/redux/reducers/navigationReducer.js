import {
    CHANGE_UNIT_ACTION,
    CHANGE_INPUT,
} from '../actions/navigationActions.js';

const initialState = {
    unit: 'c',
    input: '',
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_UNIT_ACTION:
            const unit = state.unit  === 'c' ? 'f' : 'c';

            return {
                ...state,
                unit,
            }
    
        case CHANGE_INPUT:
                const input = action.event.target.value;

                return {
                    ...state,
                    input,
                }

        default:
            return state;
    }
}

export default navigationReducer;