import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);

    try {
      const Result = await axios.get(url);
      setData(Result.data);
      console.log("Data:");
      console.table(Result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, loading, error };
};

export default useAxios;
