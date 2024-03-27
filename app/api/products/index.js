import axios from "../axios";

export async function getProducts (id) {
    return await axios.get(`/products/getByCategoryId?id=${id}`)
}

export async function getProductById (id) {
    return await axios.get(`/products/get?id=${id}`)
}
