const esprima = require('esprima');

// Fungsi untuk memeriksa apakah user code memenuhi syarat
function checkCode(userCode) {
    try {
        // Parse user code
        const ast = esprima.parseScript(userCode);

        // Flag untuk menandai apakah ada mekanisme if
        let variableDeclared = false;

        // Cek setiap node di AST
        ast.body.forEach(node => {
            // Jika node merupakan conditional statement (if statement)
            if (node.type === 'VariableDeclaration') {
                // Set flag ifFound menjadi true
                variableDeclared = true;
            }
        });

        // Jika tidak ditemukan mekanisme if, kembalikan pesan error
        if (!variableDeclared) {
            return {
                success: false,
                message: "Program harus memiliki mekanisme variabel"
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

        const expected = 10;

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
var Terserah;

Terserah = 10;

console.log(Terserah);
`;

const result = checkCode(userCode);
console.log(result);
