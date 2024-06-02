import { GiNotebook } from 'react-icons/gi';
import MenuItem from '../Sidebar/MenuItem';
import HostRequestModal from '../../Modal/HostRequestModal';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import { GrUserAdmin } from 'react-icons/gr';

const GuestMenu = () => {
    const [role] = useRole()
    const { user } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const modalHandler = async () => {
        
        console.log('modal handler func working');
    }
    return (
        <>
            <MenuItem
                icon={GiNotebook}
                label='My Bookings'
                address='my-bookings'
            />

            {role === 'guest' && (
                <div
                    onClick={() => setIsOpen(true)}
                    className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
                >
                    <GrUserAdmin className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Become A Host</span>
                </div>
            )}

            <HostRequestModal
                closeModal={closeModal}
                isOpen={isOpen}
                modalHandler={modalHandler}
            />
        </>
    );
};

export default GuestMenu;