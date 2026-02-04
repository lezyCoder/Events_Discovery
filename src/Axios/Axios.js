import axios from "axios";

const fetchEvents = async (page) => {
  const response = await axios.get(`/api/discovery/v2/events.json`, {
    params: {
      apikey: import.meta.env.VITE_DISCOVERY_API,
      page: page,
      size: 20
    },
    headers: {
      accept: "application/json",
    },
  });

  // console.log("axios response", response.data);
  return response.data;
};

export default fetchEvents;
