

const npmCheck = require('./in');
const createState = require('./state/state');

export default function init(userOptions) {
  return createState(userOptions)
        .then(currentState => npmCheck(currentState));
}
