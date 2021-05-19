const INITIAL_STATE = {
    user: null,
};

// we defined an initial state, and the userReducer for that state, which is going to take the state, if it is not passed, so it is going
// to take the normal one, the initial with user null, next, it is going to check for the action, which type it is
// okay, going on, the default case is going to be just return the previrous state

const userReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {

        // default, just leave the previous state
        default:
            return state;
    }
}

// updates the state
// exporting this reducer
export default userReducer;
