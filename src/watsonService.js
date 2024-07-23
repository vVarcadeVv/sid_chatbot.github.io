import axios from 'axios';

const watsonService = axios.create({
  baseURL: 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/18982a6c-7095-417b-bd96-2d855e174cdd', // Ensure this is the correct URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer AmZvqdDCRoPfj_g63IQ7aDBNHqkPGHNbifqXauPs1J5z` // Ensure this is the correct API key
  }
});

export const sendMessage = async (message) => {
  const payload = {
    input: {
      text: message
    }
  };

  // Debugging logs
  console.log("Request URL: ", watsonService.defaults.baseURL);
  console.log("Request Headers: ", watsonService.defaults.headers);
  console.log("Request Payload: ", payload);

  try {
    const response = await watsonService.post('/v3/assistants/c28cf7e3-adac-4c5c-bc03-dacf2f9422c8/message?version=2024-06-25', payload); // Ensure the workspace ID and version are correct
    console.log("Response: ", response);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  } 
};
