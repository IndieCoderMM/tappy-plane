const ScoreCleaner = (scores) => {
  const cleanedList = [];
  scores.forEach((item) => {
    let dupes = false;
    cleanedList.forEach((data) => {
      if (data.user === item.user) {
        dupes = true;
        if (data.score < item.score) data.score = item.score;
      }
    });
    if (!dupes) cleanedList.push({ ...item });
  });
  return cleanedList;
};

export default ScoreCleaner;
