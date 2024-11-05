// src/Services/productService.js
import client from './api';

export const addProduct = async (formData) => {
    try {
        const response = await client.post("/api/data/produk", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};

export const getProductById = async (id_product) => {
    try {
        const response = await client.get(`/api/data/produk/${id_product}`);
        console.log("Response data from API:", response.data); // Tambahkan log ini untuk cek
        return response.data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw error;
    }
};

export const updateProduct = async (id_product, formData) => {
    try {
        const response = await client.put(`/api/data/produk/${id_product}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await client.get("/api/data/all/produk", {
            headers: {
                'Cache-Control': 'no-cache' // Mencegah penggunaan cache
            }
        });
        console.log('API Response in getAllProducts:', response.data); // Log untuk melihat response data
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};


export const getDonutProducts = async () => {
    try {
        const response = await client.get("/api/data/donat", {
            headers: {
                'Cache-Control': 'no-cache' // Mencegah penggunaan cache
            }
        });
        console.log('API Response:', response.data); // Log untuk melihat response data
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getDonutPopularProducts = async () => {
    try {
        const response = await client.get("/api/data/donat/populer", {
            headers: {
                'Cache-Control': 'no-cache' // Mencegah penggunaan cache
            }
        });
        console.log('API Response (Popular Donuts):', response.data); // Log untuk melihat response data
        return response.data;
    } catch (error) {
        console.error("Error fetching popular products:", error);
        throw error;
    }
};

// ROTI
export const getRotiProducts = async () => {
    try {
        const response = await client.get("/api/data/roti", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Roti):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching roti products:", error);
        throw error;
    }
};

export const getRotiPopularProducts = async () => {
    try {
        const response = await client.get("/api/data/roti/populer", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Popular Roti):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching popular roti products:", error);
        throw error;
    }
};

// PASTRY
export const getPastryProducts = async () => {
    try {
        const response = await client.get("/api/data/pastry", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Pastry):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching pastry products:", error);
        throw error;
    }
};

export const getPastryPopularProducts = async () => {
    try {
        const response = await client.get("/api/data/pastry/populer", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Popular Pastry):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching popular pastry products:", error);
        throw error;
    }
};

// COOKIES
export const getCookiesProducts = async () => {
    try {
        const response = await client.get("/api/data/cookies", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Cookies):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching cookies products:", error);
        throw error;
    }
};

export const getCookiesPopularProducts = async () => {
    try {
        const response = await client.get("/api/data/cookies/populer", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Popular Cookies):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching popular cookies products:", error);
        throw error;
    }
};

// CAKE
export const getCakeProducts = async () => {
    try {
        const response = await client.get("/api/data/cake", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Cake):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching cake products:", error);
        throw error;
    }
};

export const getCakePopularProducts = async () => {
    try {
        const response = await client.get("/api/data/cake/populer", {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log('API Response (Popular Cake):', response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching popular cake products:", error);
        throw error;
    }
};
