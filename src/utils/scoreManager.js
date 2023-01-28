export const cleanScores = (scorelist) => {
  const cleanedList = [];
  for (let i of scorelist) {
    let dupes = false;
    for (let j of cleanedList) {
      if (i.user.toLowerCase() === j.user.toLowerCase()) {
        dupes = true;
        if (i.score > j.score) j.score = i.score;
      }
    }
    if (!dupes) cleanedList.push(i);
  }
  return cleanedList;
};
