import { useState, useEffect } from 'react';
import http from '../utils/http';

const usePut = (url, updateData) => {
    const [data, setData] = useState([]);
    const [fetching, setFeching] = useState(true);
    const [err, setErr] = useState(false);
    
    const axiosData = async () => {
        try {
          const result = await http.put(url,updateData);
          setData(result.data);
          setFeching(false);
        } catch (error) {
          setErr(true);
          setFeching(false);
          setData(null);
        }
      };
    useEffect(() => {
        axiosData();
      }, [url]);
    return [data, fetching, err];
}

export default usePut
