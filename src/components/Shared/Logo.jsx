import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png'


const Logo = () => {
    return (
        <div>
            {/* Logo */}
            <Link to='/'>
              <img
                className='block'
                src={logoImg}
                alt='logo'
                width='150'
                height='120'
              />
            </Link>
        </div>
    );
};

export default Logo;