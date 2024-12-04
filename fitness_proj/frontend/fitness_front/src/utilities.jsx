import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
})

export const userSignup = async(formData) => {
    const {email, password, firstName, age, registration} = formData
    let response = await api.post(
        `users/${registration ? 'signup/' : 'login/'}`,
        {
            email : email,
            password : password,
            firstname : firstName,
            age : age
        }
    )
    
    if (response.status === 200 || response.status === 201){
        let {token, firstname} = response.data 
        localStorage.setItem('token', token)
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        return firstname
    }
    alert(response.data)
    return null
}

export const logOut = async() =>{
    let response = await api.post('users/logout/')
    if (response.status === 204){
        localStorage.removeItem('token')
        delete api.defaults.headers.common['Authorization']
        return null
    }
    alert("Failure to log out")
    return user
}

export const getInfo = async() => {
    let token = localStorage.getItem('token')
    if(token){
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        let response = await api.get('users/info/')
        if (response.status === 200){
            return response.data.firstname
        }
        else{
            return null
        }
    }
    else{
        return null
    }
}