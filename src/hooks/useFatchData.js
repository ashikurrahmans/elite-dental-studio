import { useEffect, useState } from "react";

const useFatchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  setLoading(true);
  try {
    var fetchData = async () => {
      const res = await fetch(url);
      const result = await res.json();
      setData(result[0]);
      console.log(result[0]);
      setLoading(false);
    };
  } catch (error) {
    setError(error.message);
  }

  return {
    data,
    error,
    loading,
  };
};

export default useFatchData;
