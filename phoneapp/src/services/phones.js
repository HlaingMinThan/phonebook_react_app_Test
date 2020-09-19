import axios from 'axios';
const baseUrl="/api/persons";

const getAll=()=>{
    return  axios.get(baseUrl)
}
const create=(dataObj)=>{
    return axios.post(baseUrl,dataObj);
}
const update=(dataobj,id)=>{
    return axios.put(`${baseUrl}/${id}`,dataobj);
}
const remove=(id)=>{
    return axios.delete(`${baseUrl}/${id}`);
}
export default {getAll,create,update,remove};