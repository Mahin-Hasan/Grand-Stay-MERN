// import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // const category = params.get('category');
  // console.log(category); //by this method we can get params from any component in the react application
  return (
    <div>
      <h1>Welcome to Grand stay</h1>
      {/* categories section */}
      <Categories />
      {/* room section */}
      <Rooms />
    </div>
  )
}

export default Home
