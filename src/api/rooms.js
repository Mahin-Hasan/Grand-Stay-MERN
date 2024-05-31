import axiosSecure from "."


//Fetch all rooms from Database
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data;
}
//fetch all rooms for host only
export const getHostRooms = async email => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data;
}
//Fetch single room data from DB
export const getRoom = async id => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data;
}
// save room data to database
export const addRoom = async roomData => {
    const { data } = await axiosSecure.post('/rooms', roomData)
    return data;
}