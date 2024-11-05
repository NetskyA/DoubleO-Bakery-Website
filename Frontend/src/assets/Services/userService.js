import client from './api';

export const loginAdmin = async (username, password) => {
    try {
        const response = await client.post("/login/user/nsateam/admin", {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
};
