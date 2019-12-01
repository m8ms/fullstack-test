const fetchFromApiAndParse = async subUrl => {
  const response = await fetch(process.env.REACT_APP_API_URL + subUrl, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
  return await response.json();
};

export const getChewbacca = () => fetchFromApiAndParse("character");
