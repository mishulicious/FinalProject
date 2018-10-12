import axios from "axios"

const url = "http://localhost:3000/"

export const loginServ = (user) =>{
    return axios.post(url + "login", user)
    .then(user => {return user})
        .catch(err => console.log(err))
}


export const signupServ = (user) =>{
    return axios.post(url + "signup", user)
    .then(user => {return user})
    .catch(err => console.log(err))
}