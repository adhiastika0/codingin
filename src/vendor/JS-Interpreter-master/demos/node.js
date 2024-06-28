import Interpreter from 'js-interpreter'; // Ensure this path is correct based on your project structure

export function executeJavaScript(code, callback) {
  let logValues = [];

  function initApi(interpreter, globalObject) {
    // Add an API function for console.log
    const consoleLogWrapper = function (...args) {
      logValues.push(args.map((arg) => arg.toString()).join(' ') + '\n');
    };

    const consoleObject = interpreter.createObject(interpreter.OBJECT);
    interpreter.setProperty(globalObject, 'console', consoleObject);

    interpreter.setProperty(
      consoleObject,
      'log',
      interpreter.createNativeFunction(consoleLogWrapper)
    );

    // Add an API function for the alert() block
    const alertWrapper = function (text) {
      return arguments.length ? text : '';
    };
    interpreter.setProperty(
      globalObject,
      'alert',
      interpreter.createNativeFunction(alertWrapper)
    );

    // Add an API function for the prompt() block
    const promptWrapper = function (text) {
      return prompt(text);
    };
    interpreter.setProperty(
      globalObject,
      'prompt',
      interpreter.createNativeFunction(promptWrapper)
    );
  }

  const myInterpreter = new Interpreter(code, initApi);

  function nextStep() {
    while (!myInterpreter.run() && myInterpreter.paused_) {
      setTimeout(nextStep, 10);
      return;
    }

    if (callback) {
      callback(logValues);
    }
  }

  nextStep();
}
