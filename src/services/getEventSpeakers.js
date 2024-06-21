import axios from "../utils/axios"


const getEventSpeakers = async () => {
  
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/konfhub-frontend-evaluation-task/speakers`,
   
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error)
  }
};

export default getEventSpeakers;
