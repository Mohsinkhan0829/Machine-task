import axios from "axios";


export const CoinDetailsData = async(id)=>{
    const res = await axios.get(`/api/v3/coins/${id}`);
    return res.data;
}

export const AllCoins = async()=>{
    const res = await axios.get(`/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    return res.data
}
