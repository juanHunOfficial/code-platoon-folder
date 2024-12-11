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

export const createTracker = async(formData) => {
    const { trackerName, userId } = formData
    let response = await api.post(
        'tracker/',
        {
            'tracker_name' : trackerName,
            'user_id' : userId
        }
    )
    if(response.status === 201){
        return {'trackerName': response.data.tracker_name, 'trackerId': response.data.id}
    }
    else{
        return null
    }
}

export const createWorkout = async(formData) => {
    const { typeOfWorkout, weeklyFrequency, workoutName, trackerId } = formData
    let response = await api.post(
        'workout/',
        {
            'type_of_workout': typeOfWorkout,
            'weekly_frequency': weeklyFrequency,
            'workout_name' : workoutName,
            'tracker_id' : trackerId
        }
    )
    if(response.status === 201){
        return {'workoutName': response.data.workout_name, 'workoutId': response.data.id}
    }
    else{
        return null
    }
}

export const createExercise = async(formData) => {
    const { exerciseName, iteration, type, actualNumOfReps, actualNumOfSets, goalNumOfReps, goalNumOfSets, weight, workoutId  } = formData
    let response = await api.post(
        'user_exercise/',
        {
            "exercise_name" : exerciseName,
            "iteration" : iteration,
            "type": type,
            "actual_num_of_reps": actualNumOfReps,
            "actual_num_of_sets": actualNumOfSets,
            "goal_num_of_reps": goalNumOfReps,
            "goal_num_of_sets": goalNumOfSets,
            "weight": weight,
            "workout_id": workoutId
        }
    )
    if(response.status === 201){
        return {
            'exerciseName' : response.data.exercise_name, 
            'iteration': response.data.iteration,
            'actualNumOfReps' : response.data.actual_num_of_reps,
            'actualNumOfSets' : response.data.actual_num_of_sets,
            'goalNumOfReps': response.data.goal_num_of_reps,
            'goalNumOfSets': response.data.goal_num_of_sets,
            'weight' : response.data.weight,
            'type' : response.data.type,
            'workoutId' : response.data.workout_id,

        }
    }
}

