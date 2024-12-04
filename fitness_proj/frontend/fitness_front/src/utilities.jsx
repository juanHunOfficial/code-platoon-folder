import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
})

export const userSignup = async(formData) => {
    const {email, password, firstName, age, registration} = formData
    let { data } = await api.post(
        `users/${registration ? 'signup' : 'login'}/`,
        {
            email : email,
            password : password,
            firstname : firstName,
            age : age
        }
    )
    
    console.log(data)
}
