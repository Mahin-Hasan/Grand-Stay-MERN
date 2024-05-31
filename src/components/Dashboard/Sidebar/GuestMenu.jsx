import { GiNotebook } from 'react-icons/gi';
import MenuItem from './MenuItem';

const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={GiNotebook }
                label='My Bookings'
                address='my-bookings'
            />
        </>
    );
};

export default GuestMenu;