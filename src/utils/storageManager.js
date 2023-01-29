const STORAGE_KEY = 'TPY_PLANE_DATA_0123';
const initialData = {
  user: 'null',
  score: 0,
};

export const getLocalData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : initialData;
};

export const storeLocalData = ({ user, score }) => {
  const data = {
    user: user.toLowerCase(),
    score: parseInt(score, 10),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getLocalHiscore = () => {
  const data = getLocalData();
  return data.score;
};
