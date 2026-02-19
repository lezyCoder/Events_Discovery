import { useLocation } from "react-router"



const BookingPage = () => {

    const location = useLocation()
    const { state } = location;
    console.log("data :", state)
    const {data} = state;
    return (
        <div className="booking-container flex items-center justify-center">
            
            <h1>Booking Details </h1>

            <div className="booking-details">
                <img src={`${data.img}` }alt="data.title" />
                <p>{data.title}</p>
            </div>
        </div>
    )
}

export default BookingPage
