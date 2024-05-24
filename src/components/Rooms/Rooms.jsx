import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";


const Rooms = () => {
    const [rooms, setRooms] = useState([]); // emptry state set to array because the data is in array format. i.e it will give error rooms.mao in not a function 

    //geting catagory name to filter according to room
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');


    useEffect(() => {
        setLoading(true);
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                //filter functionality according to clicked category
                if (category) {
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                } else setRooms(data);
                setLoading(false);
            })
    }, [category]) // dependency must be included bz it changes inside useEffect or else it will give error

    //adding loader
    if (loading) return <Loader />

    return (
        <Container>
            {
                rooms && rooms.length > 0 ? (
                    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {
                            rooms.map(room => (
                                <Card key={room._id} room={room} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                        <Heading
                            title='No rooms available for this category!'
                            subtitle='Please select another category'
                            center={true}
                        />
                    </div>
                )
            }
        </Container>

    );
};

export default Rooms;