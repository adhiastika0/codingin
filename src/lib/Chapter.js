import { db } from '@/firebase/clientApp';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const addChapter = async () => {
  const docData = {
    levels: [
      {
        id: 'C1L1',
        question:
          'Cetak tipe data String yang bertuliskan kalimat “Saya Talenta Digital”',
        test_case: [
          {
            output: 'saya talenta digital',
          },
        ],
        expected_output: 'Saya Talenta Digital',
        title: 'Tipe Data String',
      },
      {
        id: 'C1L2',
        question: 'Cetak tipe data Number yang berisi angka 404',
        test_case: [
          {
            output: '404',
          },
        ],
        title: 'Tipe Data Number',
      },
      {
        id: 'C2L3',
        title: 'Tipe Data Booelan',
        test_case: [
          {
            output: 'true',
          },
        ],
        question: 'Berikan contoh tipe data Number yang berisi kondisi True',
      },
    ],
    title: 'Variabel',
    desc: 'Pada saat membuat program, seringkali, kita ingin menyimpan nilai-nilai untuk dapat digunakan kembali. Di dalam pemrograman, variabel digunakan untuk menyimpan nilai-nilai. Selain menyimpan nilai, sebuah variabel juga harus memiliki nama sehingga dapat dibedakan dengan variabel lainnya. Nama variabel haruslah mudah untuk dikenali.',
    index: '3',
    modules: {
      video: '',
      contents: [
        {
          body: 'Block teks (biasa disebut string) dapat kita gunakan untuk menuliskan teks yang diinginkan. Perlu diingat bahwa semua hal yang diisikan ke blok ini akan dianggap sebuah teks. Contohnya ketika mengisinya dengan angka, angka tersebut akan tetap dianggap sebagai teks.',
          image: ['m2/p1', 'm2/p2'],
          title: 'Teks',
        },
        {
          image: ['m2/p3', 'm2/p4'],
          title: 'Angka',
          body: 'Block Angka dapat digunakan untuk mengisi bilangan bulat ataupun bilangan desimal. Angka desimal ditandai dengan tanda titik, bukan tanda koma.',
        },
        {
          image: ['m2/p5', 'm2/p6'],
          title: 'Boolean',
          body: 'Block boolean dapat digunakan untuk menandai suatu kondisi True (benar) dan juga False (salah).',
        },
      ],
      desc: 'Pada saat membuat program, seringkali, kita ingin menyimpan nilai-nilai untuk dapat digunakan kembali. Di dalam pemrograman, variabel digunakan untuk menyimpan nilai-nilai. Selain menyimpan nilai, sebuah variabel juga harus memiliki nama sehingga dapat dibedakan dengan variabel lainnya. Nama variabel haruslah mudah untuk dikenali. Untuk memudahkan pemahaman, anggap variabel sebagai sebuah box yang bisa di isi berbagai jenis barang. Untuk mempermudah mengetahui apa isi barang dari box tersebut, kita perlu menuliskan label keterangan yang memudahkan kita memahami isi dari box tersebut. Box tersebut dapat menyimpan data dengan tipe tertentu. Tipe-tipe data yang telah kita pelajari di chapter sebelumnya lah yang bisa kita simpan dalam box tersebut.',
      opening: 'Ayo kita lihat contoh penerapan variabel pada Codingin:',
      id: 'm3',
      ending:
        'Sekarang pahamkan variabel itu apa? Ayo kita kerjakan tantangan yang ada pada chapter ini!',
    },
  };

  await setDoc(doc(db, 'chapters', 'c3'), docData);
};

const findChapterById = (chapters, chapterId) => {
  return chapters.find((chapter) => chapter.id === chapterId);
};

async function getAllChapters() {
  const chaptersCollection = collection(db, 'chapters');
  const chaptersSnapshot = await getDocs(chaptersCollection);
  const chaptersList = chaptersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return chaptersList;
}

export { addChapter, findChapterById, getAllChapters };
