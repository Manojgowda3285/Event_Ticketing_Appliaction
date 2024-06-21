import axios from "../utils/axios"


const getEventSponsors = async () => {
  
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/konfhub-frontend-evaluation-task/sponsors`,
   
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error)
  }
};

export default getEventSponsors;
