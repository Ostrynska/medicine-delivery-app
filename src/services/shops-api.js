import axios from "axios";

const instance = axios.create({
    baseURL: "https://medicine-delivery-app-backend-9d0u.onrender.com/api"
})

export const getAllShops = async()=> {
    const { data } = await instance.get("/shops");
    return data;
}

export const getShopById = async(id)=> {
    const {data} = await instance.get(`/shops/${id}`);
    return data;
}