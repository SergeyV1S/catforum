import { api } from "./instance";
import type { ICatImage } from "@/types";

export const getRandomCatImage = async () =>
  api.get<ICatImage[]>("/images/search").then((res) => res.data);
