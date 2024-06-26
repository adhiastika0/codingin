const esprima = require('esprima');

// Fungsi untuk memeriksa apakah user code memenuhi syarat
function checkCode(userCode) {
    try {
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

        const expected = 404;


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
console.log(404)
`;

const result = checkCode(userCode);
console.log(result);
