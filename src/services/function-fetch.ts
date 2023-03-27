export const getConsumption = async <T>(url: string): Promise<T> => {
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};
//function fetch para reutlização
