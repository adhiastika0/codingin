import { parseScript } from 'esprima';

// Fungsi untuk memeriksa apakah user code memenuhi syarat
async function C5L1(userCode, testCases) {
  try {
    const ast = parseScript(userCode);
    let statement = false;

    ast.body.forEach((node) => {
      if (node.type === 'IfStatement') {
        statement = true;
      }
    });

    if (!statement) {
      return {
        success: false,
        message: `Program harus mengandung balok If Else`,
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
        const modifiedCode = userCode.replace(
          /Uang\s*=\s*\d+/g,
          `Uang = ${testCase.input}`
        );

        eval(modifiedCode);

        console.log = originalConsoleLog;

        const expectedOutput = testCase.output;
        const actualOutput = output.toString().toLowerCase();
        const success = actualOutput === expectedOutput;

        testResults[testCase.input] = {
          success,
          expected: expectedOutput,
          output: output,
        };

        if (!success) {
          allTestsPassed = false;
        }
      } catch (error) {
        allTestsPassed = false;
        testResults[testCase.input] = {
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
    // Tangani kesalahan parsing user code
    return {
      success: false,
      message: 'Terjadi kesalahan: ' + error.message,
    };
  }
}

export default C5L1;
