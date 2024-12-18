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
            return {'firstname': response.data.firstname, 'id': response.data.id, 'trackers': response.data.trackers}
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
    const { trackerName, userId, user } = formData
    let response = await api.post(
        'tracker/',
        {
            'tracker_name' : trackerName,
            'user_id' : userId,
            'user': user
        }
    )
    if(response.status === 201){
        return {
            'trackerName': response.data.tracker_name, 
            'trackerId': response.data.id
        }
    }
    else{
        return null
    }
}

export const createWorkout = async(formData) => {
    const { typeOfWorkout, 
            weeklyFrequency, 
            workoutName, 
            trackerId 
        } = formData
    try{
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
            return {
                'workoutName': response.data.workout_name, 
                'workoutId': response.data.id
            }
        }
    }catch (error){
        console.error("Error in createWorkout Utility method:", error.message)
    }
}

export const createExercise = async(formData) => {
    const { exerciseName, 
            workoutId  
        } = formData
    try{
        let response = await api.post(
            'user_exercise/',
            {
                "exercise_name" : exerciseName,
                "workout_id": workoutId
            }
        )
        if(response.status === 201){
            return {
                'exerciseName' : response.data.exercise_name, 
                'workoutId' : response.data.workout_id,
            }
        }
    }catch (error){
        console.error("Error in createExercise Utility method", error.message)
    }
}

export const createChartEntry = async(formData) =>{
    const { 
        iteration, 
        goalNumOfReps, 
        goalNumOfSets, 
        actualNumOfReps, 
        actualNumOfSets, 
        weight, 
        exerciseId
    } = formData
    console.log(formData)
    try{
        let response = await api.post(
            'chart_data/',
            {
                "iteration":iteration,
                "goal_num_of_reps": goalNumOfReps,
                "goal_num_of_sets": goalNumOfSets,
                "actual_num_of_reps": actualNumOfReps,
                "actual_num_of_sets": actualNumOfSets,
                "weight": weight,
                "exercise_id": exerciseId
            }
        )
        if (response.status === 201){
            return response.data
        }
    }catch (error){
        console.error("Error in the createChartEntry Utility method: ", error.message)
    }
}

export const getTrackers = async() => {
    let token = localStorage.getItem('token')
    if(token){
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        let response = await api.get('tracker/')
        if (response.status === 200){
            return response.data
        }
    }
    else{
        return null
    }
}

export const deleteTracker = async(trackerId) =>{
    try {
        let token = localStorage.getItem('token');
        if (token) {
          api.defaults.headers.common['Authorization'] = `Token ${token}`;
          const { data } = await api.delete(`tracker/${trackerId}/`);
          return data;
        }
      } catch (error) {
        console.error('Error deleting workout:', error.message);
      }
}

export const deleteWorkout = async(workoutId) =>{
    try {
        let token = localStorage.getItem('token');
        if (token) {
          api.defaults.headers.common['Authorization'] = `Token ${token}`;
          const { data } = await api.delete(`workout/${workoutId}/`);
          return data;
        }
      } catch (error) {
        console.error('Error deleting workout:', error.message);
      }
}

export const deleteExercise = async(exerciseId) =>{
    try {
        let token = localStorage.getItem('token');
        if (token) {
          api.defaults.headers.common['Authorization'] = `Token ${token}`;
          const { data } = await api.delete(`user_exercise/${exerciseId}/`);
          return data;
        }
      } catch (error) {
        console.error('Error deleting workout:', error.message);
      }
}

export const deleteDataPoint = async(dataPointId) =>{
    try {
            const { data } = await api.delete(`chart_data/${dataPointId}/`);
            return data;
    } catch (error) {
        console.error('Error deleting data point:', error.message);
    }
}

export const updateTracker = async(formData) =>{
    const { trackerId, trackerName } = formData
    try{
        const { data } = await api.put(
            `tracker/${trackerId}/`,
            {
                "tracker_name": trackerName
            }
        )
        return data
    }catch (error){
        console.error('Error updating tracker name: ', error.message)
    }
}

export const updateWorkout = async(formData) =>{
    const { workoutId, workoutName, typeOfWorkout, weeklyFrequency } = formData
    try{
        const { data } = await api.put(
            `workout/${workoutId}/`,
            {
                "type_of_workout": typeOfWorkout,
                "workout_name": workoutName,
                "weekly_frequency": weeklyFrequency,
            }
        )
        return data
    }catch (error){
        console.error('Error updating the workout: ', error.message)
    }
}

export const updateExercise = async(formData) =>{
    const { exerciseId, exerciseName } = formData
    try{
        const { data } = await api.put(
            `user_exercise/${exerciseId}/`,
            {
                "exercise_name": exerciseName   
            }
        )
        return data
    }catch (error){
        console.error('Error updating exercise name: ', error.message)
    }
}

export const updateChartData = async(formData) => {
    const { 
        chartId, 
        goalNumOfReps, 
        goalNumOfSets, 
        actualNumOfReps, 
        actualNumOfSets, 
        weight 
    } = formData

    try{
        const { data } = await api.put(
            `chart_data/${chartId}/`,
            {
                "goal_num_of_reps": goalNumOfReps,
                "goal_num_of_sets": goalNumOfSets,
                "actual_num_of_reps": actualNumOfReps,
                "actual_num_of_sets": actualNumOfSets,
                "weight": weight
            }
        )
        return data
    } catch (error){
        console.error('Error updating the chart data: ', error.message)
    }
}

export const getSingleExercise = async(exerciseId) => {
    try{
        const { data } = await api.get(`user_exercise/${exerciseId}/`)
        return data
    }catch (error) {
        console.error('Error fetching the chart data: ', error.message)
    }
}

export const getSingleTracker = async(trackerId) => {
    try{
        const { data } = await api.get(`tracker/${trackerId}/`)
        return data
    }catch (error) {
        console.error('Error fetching the single tracker: ', error.message)
    }
}

export const getSingleWorkout = async(workoutId) =>{
    try{
        const { data } = await api.get(`workout/${workoutId}/`)
        return data
    }catch (error){
        console.error('Error fetching the single workout: ', error.message)
    }
}
