import axios from "../axios";

export async function getBrands () {
    return await axios.get(`/brands/all?limit=19`)
        .then(res => {
            return(res.data.brands)
        })
        .catch(e => console.log(e))
}
