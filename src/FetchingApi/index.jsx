/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchingApi = () => {
  const apiKey = 'd212dc1bfc2d8009f736f68f2e71938f';
  const endpoint = 'https://api.themoviedb.org/3/movie/top_rated';
  const itemsPerPage = 10

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [years, setYears] = useState([]);
  const IsMouthed = useRef(false)

  const fetchData = async () => {
    if (!hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(endpoint, {
        params: {
          api_key: apiKey,
          page: currentPage,
          limit: itemsPerPage
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setData(prevMovies => [...prevMovies, ...response.data.results]);
      setHasMore(currentPage < response.data.total_pages);
      if (IsMouthed) {
        const uniqueYears = Array.from(new Set(response.data.results.map(movie => new Date(movie.release_date).getFullYear())));
        const sortedYears = uniqueYears.sort((a, b) => b - a);
        setYears(sortedYears);
      }
    } catch (error) {
      setError({ message: 'An error occurred while fetching data.' });
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    )  {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchData()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    data,
    loading,
    error,
    hasMore,
    years
  };
}

export default FetchingApi