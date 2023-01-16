import axios from 'axios'

export const getAllUser =async()=>{
     return await axios.get(`http://localhost:8000/`)
}

export const loginUser =async(id)=>{
     id = id || '';
     return await axios.post(`http://localhost:8000/user/login/${id}`)
}

export const createUser =async(user)=> {
     return await axios.post("http://localhost:8000/user/sign",user)
}