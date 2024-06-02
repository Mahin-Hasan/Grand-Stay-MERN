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
    const { data } = await axiosSecure.post('/jwt', { email }) //need to be sent in a object structure in the backend because it cannot recieve in string format
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

// get all users
export const getAllUsers = async () => {
    const { data } = await axiosSecure(`/users`)
    return data
}

// update user role
export const updateRole = async ({ email, role }) => {
    const currentUser = {
        email,
        role,
        status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);

    return data;
}

// request for Host
export const becomeHost = async email => {
    const currentUser = {
        email,
        status: 'Requested'
    }
    const { data } = await axiosSecure.put(`/users/${email}`, currentUser)
    return data
}

