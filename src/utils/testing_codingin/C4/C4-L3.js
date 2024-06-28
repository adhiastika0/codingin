const esprima = require('esprima');

// Fungsi untuk memeriksa apakah user code memenuhi syarat
function checkCode(userCode) {
    try {
        // Parse user code
        const ast = esprima.parseScript(userCode);

        // Flag untuk menandai apakah ada operasi perkalian
        let multiplicationOperationFound = false;

        // Cek setiap node di AST
        ast.body.forEach(node => {
            // Jika node merupakan ekspresi (expression)
            if (node.type === 'ExpressionStatement') {
                // Cek apakah ekspresi tersebut berada dalam console.log
                if (node.expression.type === 'CallExpression' && node.expression.callee.property && node.expression.callee.property.name === 'log') {
                    // Jika ekspresi tersebut memiliki argument
                    if (node.expression.arguments.length > 0) {
                        // Cek apakah argument tersebut adalah BinaryExpression yang merupakan operasi perkalian
                        const argument = node.expression.arguments[0];
                        if (argument.type === 'BinaryExpression' && argument.operator === '*') {
                            // Jika ya, set flag multiplicationOperationFound menjadi true
                            multiplicationOperationFound = true;
                        } else if (argument.type === 'Literal' && typeof argument.value === 'number') {
                            // Jika argumen adalah angka, maka tidak termasuk dalam operasi aritmatika, tetapi mungkin hasil akhir
                        } else {
                            // Jika ekspresi tidak termasuk dalam operasi perkalian, kembalikan pesan error
                            return {
                                success: false,
                                message: "Program harus memiliki operasi perkalian"
                            };
                        }
                    }
                }
            }
        });

        // Jika tidak ditemukan operasi perkalian, kembalikan pesan error
        if (!multiplicationOperationFound) {
            return {
                success: false,
                message: "Program harus memiliki operasi perkalian"
            };
        }
        // Tangkap output dari console.log
        let output;
        // Menimpa console.log agar hasilnya dapat ditangkap
        const originalConsoleLog = console.log;
        console.log = (msg) => {
            output = msg;
        };

        // Jalankan user code menggunakan eval
        eval(userCode);


        // Mengembalikan console.log ke fungsi aslinya
        console.log = originalConsoleLog;

        const expected = 100;
        // Jika output sesuai dengan yang diharapkan, kembalikan hasil yang sesuai
        if (output === expected) {
            return {
                success: true,
                expected,
                output: output
            };
        } else {
            // Jika output tidak sesuai, kembalikan pesan error
            return {
                success: false,
                expected,
                output: output
            };
        }
    } catch (error) {
        // Tangani kesalahan parsing atau eksekusi user code
        return {
            success: false,
            output: "Terjadi kesalahan: " + error.message
        };
    }
}

// Contoh penggunaan
const userCode = `
console.log(20 * 5);
`;

const result = checkCode(userCode);
console.log(result);
