export const onSearch = async (query) => {
  let result = [];
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => result.push(data));
  return result;
};
