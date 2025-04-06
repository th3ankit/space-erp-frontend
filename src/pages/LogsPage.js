const baseURL = process.env.REACT_APP_API_BASE_URL;
axios.get(`${baseURL}/api/logs`)
  .then((response) => {
    console.log(response.data); // show logs
  })
  .catch((error) => {
    console.error("Error fetching logs:", error);
  });

