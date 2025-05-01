import { useEffect, useRef, useState } from "react";

interface IQuery<T> {
  queryFn: () => Promise<T>;
  refetchInterval?: number;
}

export const useQuery = <T,>({ queryFn, refetchInterval }: IQuery<T>) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await queryFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!data) fetchData();

    if (refetchInterval) {
      intervalRef.current = setInterval(fetchData, refetchInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [queryFn, refetchInterval]);

  return { data, isLoading, error, refetch: fetchData };
};
