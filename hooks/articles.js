import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useArticles = (ARTICLE_TYPE) => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/articles/get-${ARTICLE_TYPE}`);
      return data;
    },
  });
};
