import API from "./api";


export const registerUser = async (data) => {
    try {
       const response = await API.post('/auth/register', data);
       return response.data;
    } catch (error) {
         throw error;
    }
};

export const loginUser = async (email, password) => {
 try {
     const response = await API.post("/auth/login", { email, password });
     return response.data;
 } catch (error) {
    throw error;
 }
};

export const logoutUser = async (refreshToken) => {
  try {
    const response = await API.post("/auth/logout", { refreshToken });
    return response.data;   
  } catch (error) {
    throw error;
  }
};