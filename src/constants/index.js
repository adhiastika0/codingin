'use strict';

export const toolboxJson = {
  contents: [
    {
      // Logic Category
      kind: 'CATEGORY',
      name: 'Logic',
      colour: '#D1C4E9',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowLogic',
      },
      contents: [
        {
          kind: 'BLOCK',
          type: 'controls_if',
        },
        {
          kind: 'BLOCK',
          type: 'logic_compare',
        },
        {
          kind: 'BLOCK',
          type: 'logic_operation',
        },
        {
          kind: 'BLOCK',
          type: 'logic_negate',
        },
        {
          kind: 'BLOCK',
          type: 'logic_boolean',
        },
        {
          kind: 'BLOCK',
          type: 'logic_ternary',
        },
      ],
    },

    {
      // Loops Category
      kind: 'CATEGORY',
      name: 'Loops',
      colour: '#A5D6A7',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowLoops',
      },
      contents: [
        {
          kind: 'BLOCK',
          type: 'controls_repeat_ext',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 10 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'controls_whileUntil',
        },
        {
          kind: 'BLOCK',
          type: 'controls_for',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 10 },
              },
            },
            BY: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'controls_forEach',
        },
        {
          kind: 'BLOCK',
          type: 'controls_flow_statements',
        },
      ],
    },

    {
      // Math Category
      kind: 'CATEGORY',
      name: 'Math',
      colour: '#2196F3',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowMath',
      },
      contents: [
        {
          kind: 'BLOCK',
          type: 'math_number',
          fields: { NUM: 123 },
        },
        {
          kind: 'BLOCK',
          type: 'math_arithmetic',
          inputs: {
            A: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_single',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 9 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_trig',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 45 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_atan2',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_constant',
        },
        {
          kind: 'BLOCK',
          type: 'math_number_property',
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 0 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_round',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 3.1 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_on_list',
        },
        {
          kind: 'BLOCK',
          type: 'math_modulo',
          inputs: {
            DIVIDEND: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 64 },
              },
            },
            DIVISOR: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 10 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_constrain',
          inputs: {
            VALUE: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 50 },
              },
            },
            LOW: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
            HIGH: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 100 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_random_int',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 1 },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 100 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'math_random_float',
        },
      ],
    },

    {
      // Text Category
      kind: 'CATEGORY',
      name: 'Text',
      colour: '#FFCA28',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowText',
      },
      contents: [
        {
          kind: 'BLOCK',
          type: 'text',
        },
        {
          kind: 'BLOCK',
          type: 'text_join',
          extraState: { itemCount: 2 },
        },
        {
          kind: 'BLOCK',
          type: 'text_append',
          fields: {
            VAR: {
              name: 'text',
              type: 'String',
            },
          },
          inputs: {
            TEXT: {
              shadow: { type: 'text' },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_length',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_isEmpty',
          inputs: {
            VALUE: {
              shadow: { type: 'text' },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_indexOf',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc' },
              },
            },
            FIND: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'b' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_charAt',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_getSubstring',
          inputs: {
            STRING: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_changeCase',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_trim',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: { TEXT: ' abc ' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_count',
          inputs: {
            SUB: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'a' },
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'banana' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_replace',
          inputs: {
            FROM: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'm' },
              },
            },
            TO: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'w' },
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'mom' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_reverse',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'cba',
                },
              },
            },
          },
        },
        {
          kind: 'label',
          text: '',
        },
        {
          kind: 'BLOCK',
          type: 'text_print',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc', FIELDNAME: 'text' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'text_prompt_ext',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: { TEXT: 'abc' },
              },
            },
          },
        },
      ],
    },

    {
      // Lists Category
      kind: 'CATEGORY',
      name: 'Lists',
      colour: '#4DB6AC',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowLists',
      },
      contents: [
        {
          kind: 'BLOCK',
          type: 'lists_create_with',
          extraState: { itemCount: 0 },
        },
        {
          kind: 'BLOCK',
          type: 'lists_create_with',
          extraState: { itemCount: 3 },
        },
        {
          kind: 'BLOCK',
          type: 'lists_repeat',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: { NUM: 5 },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_length',
        },
        {
          kind: 'BLOCK',
          type: 'lists_isEmpty',
        },
        {
          kind: 'BLOCK',
          type: 'lists_indexOf',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_getIndex',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_setIndex',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_getSublist',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_getSublist',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_split',
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: { TEXT: ',' },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_sort',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
        {
          kind: 'BLOCK',
          type: 'lists_reverse',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
                id: 'Jyppgi#k[zERF`IH{gqY',
                fields: {
                  VAR: {
                    name: '%{BKY_VARIABLES_DEFAULT_NAME}',
                    type: 'List',
                  },
                },
              },
            },
          },
        },
      ],
    },

    {
      kind: 'SEP',
    },

    {
      // Variables Category
      kind: 'CATEGORY',
      custom: 'VARIABLE',
      name: 'Variables',
      colour: '#EF9A9A',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowVariables',
      },
    },

    {
      // Procedures Category
      kind: 'CATEGORY',
      custom: 'PROCEDURE',
      name: 'Procedures',
      colour: '#D7CCC8',
      cssConfig: {
        row: 'blocklyTreeRow blocklyTreeRowProcedures',
      },
    },
  ],
};

export const rotateConnector = [0, 0, 180, 180, 239, 239, 60, 60];

const data = [
  {
    id: 'c1',
    index: '1',
    desc: 'Bayangkan kita sedang bermain dengan banyak mainan yang berbeda. Ada boneka, mobil-mobilan, bola, dan banyak lagi. Setiap mainan memiliki bentuk dan cara bermain yang berbeda, bukan? Nah, di dalam dunia pemrograman, tipe data itu seperti mainan kita. Setiap tipe data memiliki peran dan cara kerja yang unik. Tipe data adalah cara kita memberitahu komputer jenis informasi apa yang akan kita gunakan dalam program kita.',
    title: 'Tipe Data',
    modules: {
      ending:
        'Sudah pahamkan cara menggunakan tipe data? Ayo kita coba belajar menggunakannya!',
      opening:
        'Kita akan belajar 3 jenis Tipe Data, yaitu Teks, Angka, dan Boolean.',
      contents: [
        {
          body: 'Block teks (biasa disebut string) dapat kita gunakan untuk menuliskan teks yang diinginkan. Perlu diingat bahwa semua hal yang diisikan ke blok ini akan dianggap sebuah teks. Contohnya ketika mengisinya dengan angka, angka tersebut akan tetap dianggap sebagai teks.',
          title: 'Teks',
          image: ['m2/p1', 'm2/p2'],
        },
        {
          image: ['m2/p3', 'm2/p4'],
          body: 'Block Angka dapat digunakan untuk mengisi bilangan bulat ataupun bilangan desimal. Angka desimal ditandai dengan tanda titik, bukan tanda koma.',
          title: 'Angka',
        },
        {
          image: ['m2/p5', 'm2/p6'],
          title: 'Boolean',
          body: 'Block boolean dapat digunakan untuk menandai suatu kondisi True (benar) dan juga False (salah).',
        },
      ],
      desc: 'Bayangkan kita sedang bermain dengan banyak mainan yang berbeda. Ada boneka, mobil-mobilan, bola, dan banyak lagi. Setiap mainan memiliki bentuk dan cara bermain yang berbeda, bukan? Nah, di dalam dunia pemrograman, tipe data itu seperti mainan kita. Setiap tipe data memiliki peran dan cara kerja yang unik. Tipe data adalah cara kita memberitahu komputer jenis informasi apa yang akan kita gunakan dalam program kita.',
      video: '',
    },
    levels: [
      {
        test_case: [
          {
            output: 'saya talenta digital',
          },
        ],
        question:
          'Cetak tipe data String yang bertuliskan kalimat “Saya Talenta Digital”',
        title: 'Tipe Data String',
        expected_output: 'Saya Talenta Digital',
        id: 'C2L1',
      },
      {
        question: 'Cetak tipe data Number yang berisi angka 404',
        test_case: [
          {
            output: '404',
          },
        ],
        id: 'C2L2',
        title: 'Tipe Data Number',
      },
      {
        question: 'Berikan contoh tipe data Number yang berisi kondisi True',
        test_case: [
          {
            output: 'true',
          },
        ],
        id: 'C2L3',
        title: 'Tipe Data Booelan',
      },
    ],
  },
  {
    id: 'c6',
    index: '6',
    title: 'If Else',
    modules: {
      id: 'm5',
      contents: [
        {
          body: 'Pengkondisian if (jika) else merupakan lanjutan dari operator kondisi. Pada materi sebelumnya, komputer sudah mengetahui cara membuat keputusan. Namun, berdasarkan keputusan tersebut, belum ada aksi yang dilakukan selanjutnya. Semisal kalian mengetahui jalan di depan sedang banjir. Kita perlu melakukan pengkondisian “Jika jalan didepan banjir, maka saya akan mencari jalan lain, jika tidak banjir, saya akan lanjut berjalan”. Ayo kita pahami blok yang digunakan dalam melakukan pengkondisian if else.',
          image: '',
        },
        {
          body: 'Gunakan block if else dengan pengkondisian menggunakan operator kondisi. Semisal menggunakan contoh Jika jalan didepan banjir, maka saya akan mencari jalan lain.',
          image: 'm5/p1',
        },
        {
          body: 'Namun, bagaimana jika perlu mengecek kondisi jika tidak banjir, saya akan lanjut berjalan? Kita perlu menambahkan pengkondisian lain. Tekan tombol bergambar gerigi pada blok if else.',
          image: 'm5/p2',
        },
        {
          image: 'm5/p3',
          body: 'Tekan else if jika kondisi selanjutnya diketahui. Karena kita mengetahui kondisi yang perlu di cek adalah “jika tidak hujan” maka kita perlu menggunakan tambahan else if.',
        },
        {
          image: 'm5/p4',
          body: 'Geser blok else if kebawah block if yang ada pada sebelah kanan.',
        },
        {
          image: 'm5/p5',
          body: 'Tambahkan kondisi yang diinginkan, dimana pada contoh kali ini adalah “jika tidak banjir, saya lanjut jalan”',
        },
        {
          body: 'Kita bisa tambahkan kondisi lain lagi dengan menekan tombol berbentuk gerigi. Ada 1 block lagi kita perlu pelajari, yaitu else. Block ini biasa digunakan untuk pengkondisian selain yang diharapkan. Contohnya, “Jika banjir, saya cari jalan lain. Selain kondisi itu, saya akan lanjut jalan”. Else tidak memerlukan operator kondisi tambahan seperti else if.',
          image: ['m5/p6', 'm5/p7'],
        },
        {
          image: '',
          body: 'Sekarang, kita sudah bisa memberikan instruksi untuk membuat keputusan dan melakukan aksi berdasarkan keputusan tersebut. Hebat kan? Ayo kita kerjakan tantangannya!',
        },
      ],
    },
    desc: 'Pengkondisian if (jika) else merupakan lanjutan dari operator kondisi. Pada materi sebelumnya, komputer sudah mengetahui cara membuat keputusan. Namun, berdasarkan keputusan tersebut, belum ada aksi yang dilakukan selanjutnya. Semisal kalian mengetahui jalan di depan sedang banjir. Kita perlu melakukan pengkondisian “Jika jalan didepan banjir, maka saya akan mencari jalan lain, jika tidak banjir, saya akan lanjut berjalan”. Ayo kita pahami blok yang digunakan dalam melakukan pengkondisian if else.',
    levels: [
      {
        question:
          'Saat ini, uang saya adalah 10. Buatkan instruksi pengkondisian Jika saya memiliki Uang sebanyak 10, maka akan tercetak kalimat String “Membeli Nasi Kuning”. Namun, jika Uang tidak sama dengan 10, maka akan tercetak kalimat “Puasa”.',
        id: 'C5L1',
        test_case: [
          {
            output: 'membeli nasi kuning',
            input: '123',
          },
          {
            input: '-1',
            output: 'puasa',
          },
        ],
        expected_output: 'Membeli Nasi Kuning',
        expected_statement: 'IfStatement',
        title: 'Uang I Sangat Much',
      },
      {
        title: 'Umur Saya',
        id: 'C5L2',
        question:
          'Saat ini, Umur saya adalah 13 tahun. Buatkan instruksi pengkondisian jika Umur saya kurang dari 13, maka akan tercetak kalimat String “Anak-anak”.  Jika Umur saya kurang dari 20, maka akan tercetak kalimat String “Remaja”. Selain kondisi tersebut, maka akan tercetak kalimat String “Dewasa”',
        test_case: [
          {
            output: 'anak-anak',
            input: '10',
          },
          {
            output: 'remaja',
            input: '15',
          },
          {
            output: 'dewasa',
            input: '30',
          },
        ],
        expected_output: 'Anak-anak',
        expected_statement: 'IfStatement',
      },
    ],
  },
];
