import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      {/* -68px is height taken by footer used to remove scrollbar issue */}
      <div className='pt-24 min-h-[calc(100vh-68px)]'> 
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
