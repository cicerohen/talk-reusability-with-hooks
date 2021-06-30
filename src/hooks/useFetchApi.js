import { useEffect, useState, useCallback } from "react";
import { fetchApi } from "../api";

const useFetchApi = resource => {
  // ARMAZENA O STATUS DA REQUISIÇÃO
  const [isFetching, setIsFetching] = useState(true);

  // ARMAZENA OS DADOS DA  REQUISIÇÃO
  const [data, setData] = useState([]);

  /* ARMAZENA OS ERROS DA REQUISIÇÃO */
  const [error, setError] = useState(null);

  // EFETUA A REQUISIÇÃO
  const fetchData = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await fetchApi(resource);
      const { data } = await response.json();
      if (data && data.results) {
        setData(data.results);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  }, [setIsFetching, resource, setError]);

  // INICIA A REQUISIÇÃO ASSIM QUE O COMPONENTE FOR CARREGADO
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // RETORNA OS DADOS DA REQUISIÇÃO
  return {
    isFetching,
    data,
    error,
    fetchData
  };
};

export default useFetchApi;
