// fetchMovies
// fetchMovieDetails

//useFetch(fetchMovies)
import { useEffect, useState } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null); // Reset error state before fetching

            const result = await fetchFunction();

            setData(result);
        } catch (err) {
            // @ts-ignore
            setError(err instanceof Error ? err : new Error('An error occured')); // if an error is an instance of error then forward entire error else create a new error and pass in a string
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }
    
    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);
    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;
// Usage example:
// const { data, loading, error, refetch } = useFetch(fetchMovies);