import { storage } from '@/firebase/clientApp';
import { getDownloadURL, ref } from 'firebase/storage';

const getModuleImagesUrl = async (chapter) => {
  const newImageUrls = {};
  for (const content of chapter.modules.contents) {
    if (content.image) {
      if (typeof content.image === 'string') {
        console.log(content.image);
        const imageRef = ref(storage, `chapter/${content.image}.png`);
        const url = await getDownloadURL(imageRef);
        newImageUrls[content.image] = url;
      } else if (Array.isArray(content.image)) {
        for (const img of content.image) {
          const imageRef = ref(storage, `chapter/${img}.png`);
          const url = await getDownloadURL(imageRef);
          newImageUrls[img] = url;
        }
      }
    }
  }

  return newImageUrls;
};

const getLevelImageUrl = async (level) => {
  if (level.image) {
    if (typeof level.image === 'string') {
      const imageRef = ref(storage, `chapter/${level.image}.png`);
      const url = await getDownloadURL(imageRef);
      return url;
    } else if (Array.isArray(level.image)) {
      for (const img of level.image) {
        const imageRef = ref(storage, `chapter/${img}.png`);
        const url = await getDownloadURL(imageRef);
        return url;
      }
    }
  }
};

export { getModuleImagesUrl, getLevelImageUrl };