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
    index: '6',
    title: 'If Else',
    modules: {
      id: 'm6',
      contents: [
        {
          body: 'Pengkondisian if (jika) else merupakan lanjutan dari operator kondisi. Pada materi sebelumnya, komputer sudah mengetahui cara membuat keputusan. Namun, berdasarkan keputusan tersebut, belum ada aksi yang dilakukan selanjutnya. Semisal kalian mengetahui jalan di depan sedang banjir. Kita perlu melakukan pengkondisian “Jika jalan didepan banjir, maka saya akan mencari jalan lain, jika tidak banjir, saya akan lanjut berjalan”. Ayo kita pahami blok yang digunakan dalam melakukan pengkondisian if else.',
          image: '',
        },
        {
          body: 'Gunakan block if else dengan pengkondisian menggunakan operator kondisi. Semisal menggunakan contoh Jika jalan didepan banjir, maka saya akan mencari jalan lain.',
          image: 'm6/p1',
        },
        {
          body: 'Namun, bagaimana jika perlu mengecek kondisi jika tidak banjir, saya akan lanjut berjalan? Kita perlu menambahkan pengkondisian lain. Tekan tombol bergambar gerigi pada blok if else.',
          image: 'm6/p2',
        },
        {
          image: 'm6/p3',
          body: 'Tekan else if jika kondisi selanjutnya diketahui. Karena kita mengetahui kondisi yang perlu di cek adalah “jika tidak hujan” maka kita perlu menggunakan tambahan else if.',
        },
        {
          image: 'm6/p4',
          body: 'Geser blok else if kebawah block if yang ada pada sebelah kanan.',
        },
        {
          image: 'm6/p5',
          body: 'Tambahkan kondisi yang diinginkan, dimana pada contoh kali ini adalah “jika tidak banjir, saya lanjut jalan”',
        },
        {
          body: 'Kita bisa tambahkan kondisi lain lagi dengan menekan tombol berbentuk gerigi. Ada 1 block lagi kita perlu pelajari, yaitu else. Block ini biasa digunakan untuk pengkondisian selain yang diharapkan. Contohnya, “Jika banjir, saya cari jalan lain. Selain kondisi itu, saya akan lanjut jalan”. Else tidak memerlukan operator kondisi tambahan seperti else if.',
          image: ['m6/p6', 'm6/p7'],
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
        id: 'C6L1',
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
        id: 'C6L2',
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
  };

  await setDoc(doc(db, 'chapters', 'c6'), docData);
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
