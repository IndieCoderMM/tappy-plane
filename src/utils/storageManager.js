const HISCORE_KEY = 'TPY_PLANE_HISCORE';
const USER_KEY = 'TPY_PLANE_USERNAME';

export const getHiScore = () => {
  return localStorage.getItem(HISCORE_KEY) || 0;
};

export const getUserName = () => {
  return localStorage.getItem(USER_KEY) || 404;
};

export const storeUserName = (name) => localStorage.setItem(USER_KEY, name);

export const storeHiScore = (score) => localStorage.setItem(HISCORE_KEY, score);
