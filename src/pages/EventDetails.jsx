import { useSelector } from "react-redux"
import { useParams } from "react-router"

const EventDetails = () => {

  const { id } = useParams()

  const events = useSelector(state => state.event.events)

  const event = events.find((event) => id === event.id)
  console.log(event)
  const title = event.name
  const imageSrc = event.images[0].url

  return (
    <div>
      <div className="container grid grid-cols-2 gap-4  bg-[#e7ddbc]">
        <div className="left p-2 ">
          <img src={imageSrc} alt="poster here" className="object-cover" />
        </div>
        <div className="right text-left flex flex-col justify-between text-3xl font-thin  p-2 w-full">
          <p className="tracking-wider ">{title}</p>
          {/* <p className="infor">Information</p> */}
          <button className="px-4 py-2 text-sm rounded  bg-[#f08b2c] font-thin w-full hover:bg-[#df8633] hover:transition delay-100 duration-200 hover:scale-[0.99] cursor-pointer">Book Ticket</button>

        </div>
      </div>

    </div>
  )
}

export default EventDetails