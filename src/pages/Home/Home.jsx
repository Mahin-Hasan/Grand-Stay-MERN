// import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  // const [params, setParams] = useSearchParams();
  // const category = params.get('category');
  // console.log(category); //by this method we can get params from any component in the react application
  return (
    <div>
      < Helmet >
        <title>GrandStay | Vacation Homes & Condo Rentals</title>
      </Helmet >
      <h1>Welcome to Grand stayy</h1>
      {/* categories section */}
      <Categories />
      {/* room section */}
      <Rooms />
    </div>
  )
}

export default Home
