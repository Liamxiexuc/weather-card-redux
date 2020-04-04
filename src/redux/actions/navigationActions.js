export const CHANGE_UNIT_ACTION = 'CHANGE_UNIT_ACTION';
export const CHANGE_INPUT = 'CHANGE_INPUT';




export const changeUnitAction = () => ({
    type: CHANGE_UNIT_ACTION,
});

export const changeInputAction = event => ({
    type: CHANGE_INPUT,
    event
});

