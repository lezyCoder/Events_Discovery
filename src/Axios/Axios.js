import axios from "axios";

const fetchEvents = async () => {
  const options = {
    method: "get",
    url: `https://app.ticketmaster.com/discovery/v1/events.json?apikey=${import.meta.env.VITE_DISCOVERY_API}`,
    headers: {
      accept: "application/json",
    },
  };
  const response = await axios(options);

  console.log("axios response", response);
  return response.data 
};

export default fetchEvents;
