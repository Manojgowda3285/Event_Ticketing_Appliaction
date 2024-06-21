import axios from "../utils/axios"


const getEventWorkshops = async () => {
  
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/konfhub-frontend-evaluation-task/workshops`,
   
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error)
  }
};

export default getEventWorkshops;
