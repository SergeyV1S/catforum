import { useEffect, useState } from "react";

interface IQuery<T> {
  queryFn: () => Promise<T>;
}

export const useQuery = <T,>({ queryFn }: IQuery<T>) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    fetchData();
  }, [queryFn]);

  return { data, isLoading, error };
};
