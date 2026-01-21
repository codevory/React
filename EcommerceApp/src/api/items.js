import axios from "axios";

export const onSearch = async ({ query }) => {
  const res = await axios.get(`https://dummyjson.com/products/search?`, {
    params: {
      q: query,
    },
  });
  return res.data;
};
