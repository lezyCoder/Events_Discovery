import { useParams } from "react-router"
import { useSelector } from "react-redux"

const EventDetails = () => {
  const { id } = useParams()
  const events = useSelector(state => state.event.events)

  const event = events.find(event => id === event.id)
  if (!event) return null

  const title = event.name
  const imageSrc = event.images[1].url

  return (
    <>
      <div
        className="relative container grid grid-cols-3 min-h-screen gap-4"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#282829]/95 via-[#282829]/80 to-[#282829]/95"></div>

        {/* Content */}
        <div className="relative left p-2 rounded-lg flex items-center justify-center">
          <img
            src={imageSrc}
            alt="poster here"
            className="object-cover shadow-lg w-84 h-84 rounded-lg"
          />
        </div>

        <div className="relative col-span-2 right text-left flex flex-col justify-center  gap-10 text-3xl font-thin p-2 w-full">
          <p className="tracking-wider text-white">{title}</p>

          <button className="px-4 py-2 text-sm rounded bg-[#f08b2c] text-white font-thin w-40 hover:bg-[#df8633] transition duration-200 hover:scale-[0.99] cursor-pointer">
            Book Ticket
          </button>
        </div>
      </div>
      
      <div className="suggested">
        <h1>More Events 
        </h1>
      </div>
      
      </>
  )
}
export default EventDetails