const esprima = require('esprima');

// Fungsi untuk memeriksa apakah user code memenuhi syarat
function checkCode(userCode) {
    try {
        // Parse user code
        const ast = esprima.parseScript(userCode);

        // Flag untuk menandai apakah ada operasi penjumlahan
        let additionOperationFound = false;

        // Cek setiap node di AST
        ast.body.forEach(node => {
            // Jika node merupakan ekspresi (expression)
            if (node.type === 'ExpressionStatement') {
                // Cek apakah ekspresi tersebut berada dalam console.log
                if (node.expression.type === 'CallExpression' && node.expression.callee.property && node.expression.callee.property.name === 'log') {
                    // Jika ekspresi tersebut memiliki argument
                    if (node.expression.arguments.length > 0) {
                        // Cek apakah argument tersebut adalah BinaryExpression yang merupakan operasi penjumlahan
                        const argument = node.expression.arguments[0];
                        if (argument.type === 'BinaryExpression' && argument.operator === '+') {
                            // Jika ya, set flag additionOperationFound menjadi true
                            additionOperationFound = true;
                        } else if (argument.type === 'Literal' && typeof argument.value === 'number') {
                            // Jika argumen adalah angka, maka tidak termasuk dalam operasi aritmatika, tetapi mungkin hasil akhir
                        } else {
                            // Jika ekspresi tidak termasuk dalam operasi penjumlahan, kembalikan pesan error
                            return {
                                success: false,
                                message: "Program harus memiliki operasi penjumlahan"
                            };
                        }
                    }
                }
            }
        });

        // Jika tidak ditemukan operasi penjumlahan, kembalikan pesan error
        if (!additionOperationFound) {
            return {
                success: false,
                message: "Program harus memiliki operasi penjumlahan"
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

        const expected = 17;
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
console.log(11 + 6);
`;

const result = checkCode(userCode);
console.log(result);
