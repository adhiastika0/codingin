const findLevelById = (chapter, levelId) => {
  return chapter?.levels?.find((level) => level.id === levelId);
};

export { findLevelById };
