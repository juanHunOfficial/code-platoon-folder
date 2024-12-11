import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
})

export const userSignup = async(formData) => {
    const {email, password, firstName, age} = formData
    let response = await api.post(
        'users/signup/',
        {
            email : email,
            password : password,
            firstname : firstName,
            age : age
        }
    )
    
    if (response.status === 201){
        let {token, firstname} = response.data 
        localStorage.setItem('token', token)
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        return {'firstname' : firstname, 'id' : id}
    }
    alert(response.data)
    return null
}

export const userLogin = async(formData) => {
    const {email, password} = formData
    let response = await api.post(
        "users/login/",
        {
            email: email,
            password: password
        }
    )

    if (response.status === 200){
        let {token, firstname, id} = response.data
        localStorage.setItem('token', token)
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        return {'firstname' : firstname, 'id' : id}
    }
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
            return {'firstname': response.data.firstname, 'id': response.data.id}
        }
        else{
            return null
        }
    }
    else{
        return null
    }
}

export const getMuscle = async(fromData) => {
    const { muscle } = fromData    
    try{
        let response = await api.get(`exercises/${muscle}/`)
        if(response.status === 200){
            return response.data
        }
        else{
            return null
        }
    }catch(error){
        return null
    }
    
}

export const getFood = async(formData) => {
    const { food } = formData
    try {
        let response = await api.get(`nutrition/${food}/`)
        if(response.status === 200){
            return response.data
        }
        else{
            return null
        }
    }catch (error){
        return null
    }
}