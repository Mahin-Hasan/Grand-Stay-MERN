import { useParams } from 'react-router-dom';
import Container from '../../components/Shared/Container';
import { useEffect, useState } from 'react';
import Loader from '../../components/Shared/Loader';
import { Helmet } from 'react-helmet-async';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({}); //data will be object so 2nd bracket
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        //fetch('./rooms.json') // this fetching will give error bz it is stored locally
        fetch('/rooms.json') // removing the dot makes local data function
            // fetch('https://raw.githubusercontent.com/shakilahmedatik/stayVista-starter-template/main/client/public/rooms.json') //alternative method from github
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])// dependency id must be added bz it changes as per clicked category


    if (loading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div className=''>
                <div className='flex flex-col gap-6'>{/*Header*/}</div>
                <div className=''>{/*Room info*/}</div>
                {/* Calender */}
            </div>

        </Container>
    );
};

export default RoomDetails;