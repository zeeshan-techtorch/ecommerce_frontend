import API from "./api";

export const getCart = async ()=>{
    try {
        const response = await API.get("/cart");
        return response.data
    } catch (error) {
        throw error;
    }
}

export const addToCart = async (product)=>{
    try {
        const response = await API.post("/cart", product);
        return response.data
    } catch (error) {
        throw error;
    }
}


export const removeFromCart = async (product_id)=>{
    try {
        const response = await API.delete(`/cart/${product_id}`);
        return response.data
    } catch (error) {
        throw error;
    }
}


export const clearCart = async () =>{
    try {
        const response = await API.delete("/cart");
        return response.data;
    } catch (error) {
        throw error;
    }
}