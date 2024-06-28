import { parseScript } from 'esprima';

function C2L1(userCode, testCases) {
  try {
    const ast = parseScript(userCode);
    let statement = false;

    ast.body.forEach((node) => {
      if (
        node.expression.callee.object.name === 'console' &&
        node.expression.callee.property.name === 'log'
      ) {
        statement = true;
      }
    });

    if (!statement) {
      return {
        success: false,
        message: `Program harus mengandung balok Print`,
      };
    }

    let allTestsPassed = true;
    let testResults = {};

    testCases.forEach((testCase) => {
      let output;
      const originalConsoleLog = console.log;
      console.log = (msg) => {
        output = msg;
      };

      try {
        eval(userCode);

        console.log = originalConsoleLog;

        const expectedOutput = testCase.output.toString().toLowerCase();
        const actualOutput = output.toString().toLowerCase();
        const success = actualOutput === expectedOutput;

        testResults = {
          success,
          expected: expectedOutput,
          output: output,
        };

        if (!success) {
          allTestsPassed = false;
        }
      } catch (error) {
        allTestsPassed = false;
        testResults = {
          success: false,
          expected: testCase.output,
          output: 'Terjadi kesalahan: ' + error.message,
        };
      }
    });

    if (allTestsPassed) {
      return {
        success: true,
        message: 'Semua tes berhasil sesuai dengan kriteria',
        testResults,
      };
    } else {
      return {
        success: false,
        message: 'Terdapat kesalahan dalam satu atau lebih tes',
      };
    }
  } catch (error) {
    return {
      success: false,
      output: 'Terjadi kesalahan: ' + error.message,
    };
  }
}

export default C2L1;
