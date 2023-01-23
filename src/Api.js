import axios from  'axios';
const baseUrl='https://fakestoreapi.com';
export const getData=async (url)=>{
    const {data}=await axios.get('${baseUrl}${url}')
    return data;
}