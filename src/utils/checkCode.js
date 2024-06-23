import { parseScript } from 'esprima';

// Fungsi untuk memeriksa apakah user code memenuhi syarat
async function checkCode(userCode, testCases, expected_statement) {
  try {
    // Parse user code menggunakan esprima
    const ast = parseScript(userCode);
    // Flag untuk menandai apakah ada statement if else
    let ifElseFound = false;

    // Cek setiap node di AST
    ast.body.forEach((node) => {
      // Jika node merupakan IfStatement, set ifElseFound menjadi true
      if (node.type === expected_statement) {
        ifElseFound = true;
      }
    });

    // Jika tidak ditemukan statement if else, kembalikan pesan error
    if (!ifElseFound) {
      return {
        success: false,
        message: `Program harus mengandung ${expected_statement}`,
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
        // Ganti nilai Uang di dalam userCode dengan nilai dari testCase.Uang
        const modifiedCode = userCode.replace(
          /Uang\s*=\s*\d+/g,
          `Uang = ${testCase.input}`
        );

        // Jalankan user code yang telah dimodifikasi menggunakan eval
        eval(modifiedCode);

        // Mengembalikan console.log ke fungsi aslinya
        console.log = originalConsoleLog;

        // Memeriksa output hanya berasal dari if else statement
        const expectedOutput = testCase.output;
        const success = output === expectedOutput;

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
        testResults,
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

export { checkCode };
