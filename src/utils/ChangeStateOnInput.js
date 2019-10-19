function changeStateOnInput (e, currState, changeStateFunc) {
    let currStateCopy = Object.assign({}, currState);
    currStateCopy[e.target.name] = e.target.value;
    changeStateFunc(currStateCopy);
}

export default changeStateOnInput;