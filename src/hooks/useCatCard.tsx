import { useQuery } from "./useQuery";
import { getRandomCatImage } from "@/api";

export const useCatCard = () => {
  const { data, isLoading } = useQuery({
    queryFn: getRandomCatImage
  });

  return { data, isLoading };
};
