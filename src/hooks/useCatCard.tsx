import { useQuery } from "./useQuery";
import { getRandomCatImage } from "@/api";
import { useState } from "react";

export const useCatCard = () => {
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [canRefresh, setCanRefresh] = useState(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryFn: getRandomCatImage,
    refetchInterval: autoRefresh ? 5000 : undefined
  });

  const toggleAutoRefresh = () => setAutoRefresh((prev) => !prev);
  const toggleCanRefresh = () => setCanRefresh((prev) => !prev);

  return {
    request: {
      data,
      isLoading,
      error
    },
    refresh: {
      autoRefresh,
      canRefresh,
      toggleCanRefresh,
      toggleAutoRefresh,
      refetch
    }
  };
};
