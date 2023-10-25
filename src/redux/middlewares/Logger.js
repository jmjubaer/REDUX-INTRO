const Logger = (state) => (next) => (action) => {
    const currentState = state.getState()
    console.log("Current state: " , currentState);
    console.log("Action Dispatch: " , action);
    next(action);
    console.log("Updated state: " , state.getState());
}

export default Logger;