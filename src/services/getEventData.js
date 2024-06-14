import axios from "../utils/axios"


const getEventData = async () => {
  
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/konfhub-frontend-evaluation-task`,
   
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error)
  }
};

export default getEventData;
