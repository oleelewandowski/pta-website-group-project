import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axios.get("/api/articles/get-featured");
      return data;
    },
  });
};
