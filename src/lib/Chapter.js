import { db } from '@/firebase/clientApp';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

const addChapter = async () => {
  const docData = {
    title: 'If Else',
    desc: 'Pengkondisian if (jika) else merupakan lanjutan dari operator kondisi. Pada materi sebelumnya, komputer sudah mengetahui cara membuat keputusan. Namun, berdasarkan keputusan tersebut, belum ada aksi yang dilakukan selanjutnya. Semisal kalian mengetahui jalan di depan sedang banjir. Kita perlu melakukan pengkondisian “Jika jalan didepan banjir, maka saya akan mencari jalan lain, jika tidak banjir, saya akan lanjut berjalan”. Ayo kita pahami blok yang digunakan dalam melakukan pengkondisian if else.',
    levels: [
      {
        id: 'c',
        title: '',
        desc: '',
        question: '',
      },
    ],
    modules: {
      id: '',
      video: '',
      content: [
        {
          body: 'Gunakan block if else dengan pengkondisian menggunakan operator kondisi. Semisal menggunakan contoh Jika jalan didepan banjir, maka saya akan mencari jalan lain.',
          image: '',
        },
      ],
    },
    stars_required: '',
  };

  await addDoc(collection(db, 'chapters'), docData);
};

const findChapterById = (chapters, chapterId) => {
  return chapters.find((chapter) => chapter.id === chapterId);
};

export { addChapter, findChapterById };
