import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
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
