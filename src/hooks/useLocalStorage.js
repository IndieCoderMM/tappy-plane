import { useEffect, useState } from 'react';
import { getLocalData, storeLocalData } from '../utils/storageManager';

const useLocalStorage = () => {
  const [data, setData] = useState(() => {
    return getLocalData();
  });

  useEffect(() => {
    storeLocalData(data);
  }, [data]);

  return [data, setData];
};

export default useLocalStorage;
