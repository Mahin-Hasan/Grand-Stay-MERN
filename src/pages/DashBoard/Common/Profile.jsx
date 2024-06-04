import useAuth from '../../../hooks/useAuth'
import useRole from '../../../hooks/useRole'
import { Helmet } from 'react-helmet-async'
import purpleBg from '../../../assets/images/purple.jpg'
import toast from 'react-hot-toast'
import { useState } from 'react'
import UpdateProfileModal from '../../../components/Modal/UpdateProfileModal'

const Profile = () => {
    const { user, resetPassword } = useAuth()
    const [role] = useRole()
    // console.log(user)


    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const modalHandler = async () => {
        setIsOpen(false)

        // try {
        //     const data = await becomeHost(user?.email)
        //     console.log(data)
        //     if (data.modifiedCount > 0) {
        //         toast.success('Success!, Please wait for admin confirmation.')
        //     } else {
        //         toast.success('Please!, Wait for admin approval👊')
        //     }
        // } catch (err) {
        //     console.log(err)
        // } finally {
        //     setIsOpen(false)
        // }
    }

    const handleUpdateProfile = () => {
        console.log('clicked');
    }

    const handleChangePassword = () => {
        console.log('user', user?.email)
        resetPassword(user?.email)
            .then(() => {
                toast('Please Check your email....!',
                    {
                        icon: '📩',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                )
            })
            .catch(err => {
                toast.error(err)
            })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src={purpleBg}
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-blue-500 rounded-full'>
                        {role && role.toUpperCase()}
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {user.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user.email}</span>
                            </p>

                            <div>
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className='bg-indigo-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-indigo-800 block mb-1'>
                                    Update Profile
                                </button>
                                <button
                                    onClick={handleChangePassword}
                                    className='bg-indigo-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-indigo-800'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateProfileModal
                closeModal={closeModal}
                isOpen={isOpen}
                modalHandler={modalHandler}
            />
        </div>
    )
}

export default Profile