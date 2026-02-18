import { useLocation } from "react-router"



const BookingPage = () => {

    const location = useLocation()
    const { state } = location;
    // console.log("data :", state)
    return (
        <div className="flex items-center justify-center">
            Booking details
        </div>
    )
}

export default BookingPage
