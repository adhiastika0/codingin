const importCheckCode = async (chapterId, levelId) => {
  try {
    console.log(chapterId, levelId);
    const func = await import(
      `@/utils/testing_codingin/${chapterId}/${levelId}`
    );
    return func.default;
  } catch (error) {
    console.error('Failed to load checkCode function:', error);
    return null;
  }
};

export default importCheckCode;
