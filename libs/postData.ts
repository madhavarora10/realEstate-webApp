import axios from 'axios';

export const postPropertyFunction = async (formData) => {
  try {
    console.log('from post data', formData);
    const response = await axios.post('http://localhost:3000/api/properties', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
