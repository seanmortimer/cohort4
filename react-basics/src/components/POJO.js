
const functions = {
    lastValue: null,

    doSomething(parm) {
        functions.lastValue = parm;
        return parm;
    },

    getLastStuff() {
        return functions.lastValue;
    }
}

export default functions;