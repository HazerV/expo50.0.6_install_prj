import React from "react";
import {config} from "../../config";
import {HomeContext} from "../../context/HomePageContext";
import axios from "../axios";

export async function getBanners() {
    return await axios.get(`/promo/slider`,)
        .catch(e => console.log(e))
}

export async function getMesh() {
    return await axios.get('/promo/mesh')
        .then((res) => {
            return (res.data.banners)
        })
        .catch(e => console.log(res.data.status))
}
