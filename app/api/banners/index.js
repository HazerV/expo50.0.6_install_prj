import axios from "../axios";
import {config} from "../../config";
import React from "react";
import {HomeContext} from "../../context/HomePageContext";

export async function getBanners() {
    return await axios.get(`/promo/slider`,)
}

export async function getMesh() {
    return await axios.get('/promo/mesh')
}
