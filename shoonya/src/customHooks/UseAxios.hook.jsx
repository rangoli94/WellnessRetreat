import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const baseURL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (setter, requestParams) => {
    try {
      setIsLoading(true)
      const response = await axios.get(baseURL, { params: requestParams })
      setError(null)
      setter([...response?.data])
    } catch (err) {
      setError(err?.response?.data || 'An error occurred');
    } finally {
      setIsLoading(false)
    }
  }

  return {
    error,
    isLoading,
    fetchData
  }
}

export default useAxios;