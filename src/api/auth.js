import axiosSecure from "."


//save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

    return data;
}

//Get token from server

export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email)
    console.log('Token received from server----->');
    return data
}

//Clear browser token
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')
    console.log('Token removed ----->');
    return data
}

//Get User Role
export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role
}