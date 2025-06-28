import API from "./api"

// Get all products
export const getAllProducts = async () =>{
    try {
        const response = await API.get('/products/get-all-product');
        return response.data;  
    } catch (error) {
        throw error;
    }
}


export const  getProductById = async (product_id) =>{
    try {
        const response = await API.get(`/products/${product_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}