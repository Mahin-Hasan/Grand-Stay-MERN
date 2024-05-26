import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Shared/Container';
// import Loader from '../../components/Shared/Loader';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/RoomData/Header';
import RoomInfo from './RoomInfo';
import RoomReservation from './RoomReservation';

const RoomDetails = () => {
    // const { id } = useParams();
    //const [room, setRoom] = useState({}); //data will be object so 2nd bracket
    const room = useLoaderData()
    /*
    after using useLoader data previous error is fixed because the data was ready in the loader in routes.jsx
    */

    // const [loading, setLoading] = useState(false);






    // useEffect(() => {
    //     setLoading(true);
    //     //fetch('./rooms.json') // this fetching will give error bz it is stored locally
    //     fetch('/rooms.json') // removing the dot makes local data function
    //         // fetch('https://raw.githubusercontent.com/shakilahmedatik/stayVista-starter-template/main/client/public/rooms.json') //alternative method from github
    //         .then(res => res.json())
    //         .then(data => {
    //             const singleRoom = data.find(room => room._id === id)
    //             setRoom(singleRoom)
    //             setLoading(false)
    //         })
    // }, [id])// dependency id must be added bz it changes as per clicked category


    // if (loading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            {room && (
                <div className='max-w-screen-lg mx-auto'>
                    <div className='flex flex-col gap-6'>
                        <Header room={room} />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo room={room} />
                        <div className='md:col-span-3 order-first md:order-last mb-10'>
                            {/* Room Reservation */}
                            <RoomReservation room={room} />
                        </div>
                    </div>
                </div>
            )}


        </Container>
    );
};

export default RoomDetails;