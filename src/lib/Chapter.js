import { db } from '@/firebase/clientApp';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';

const addChapter = async () => {
  const docData = {
    title: 'Tipe Data',
    desc: 'Bayangkan kita sedang bermain dengan banyak mainan yang berbeda. Ada boneka, mobil-mobilan, bola, dan banyak lagi. Setiap mainan memiliki bentuk dan cara bermain yang berbeda, bukan? Nah, di dalam dunia pemrograman, tipe data itu seperti mainan kita. Setiap tipe data memiliki peran dan cara kerja yang unik. Tipe data adalah cara kita memberitahu komputer jenis informasi apa yang akan kita gunakan dalam program kita.',
    levels: [
      {
        id: 'C2L1',
        title: 'Tipe Data String',
        question:
          'Cetak tipe data String yang bertuliskan kalimat “Saya Talenta Digital”',
        test_case: [
          {
            output: 'Saya Talenta Digital',
          },
        ],
      },
      {
        id: 'C2L2',
        title: 'Tipe Data Number',
        question: 'Cetak tipe data Number yang berisi angka 404',
        test_case: [
          {
            output: '404',
          },
        ],
      },
      {
        id: 'C2L3',
        title: 'Tipe Data Booelan',
        question: 'Berikan contoh tipe data Number yang berisi kondisi True',
        test_case: [
          {
            output: 'true',
          },
        ],
      },
    ],
    modules: {
      contents: [
        {
          body: 'Kita akan belajar 3 jenis Tipe Data, yaitu Teks, Angka, dan Boolean.',
          image: '',
        },
        {
          title: 'Teks',
          body: 'Block teks (biasa disebut string) dapat kita gunakan untuk menuliskan teks yang diinginkan. Perlu diingat bahwa semua hal yang diisikan ke blok ini akan dianggap sebuah teks. Contohnya ketika mengisinya dengan angka, angka tersebut akan tetap dianggap sebagai teks.',
          image: ['m2/p1', 'm2/p2'],
        },
        {
          title: 'Angka',
          body: 'Block Angka dapat digunakan untuk mengisi bilangan bulat ataupun bilangan desimal. Angka desimal ditandai dengan tanda titik, bukan tanda koma.',
          image: ['m2/p3', 'm2/p4'],
        },
        {
          title: 'Boolean',
          body: 'Block boolean dapat digunakan untuk menandai suatu kondisi True (benar) dan juga False (salah).',
          image: ['m2/p5', 'm2/p6'],
        },
        {
          body: 'Sudah pahamkan cara menggunakan tipe data? Ayo kita coba belajar menggunakannya!',
          image: '',
        },
      ],
    },
  };

  await setDoc(doc(db, 'chapters', 'C2'), docData);
};

const findChapterById = (chapters, chapterId) => {
  return chapters.find((chapter) => chapter.id === chapterId);
};

export { addChapter, findChapterById };
