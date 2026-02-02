import { useNavigate } from "react-router-dom";

const Event_card = ({ event }) => {

    const { dates, _embedded, name, classifications } = event

    // console.table("details", id, dates, _embedded, name)
    // console.log("address", classifications[0].genre.name)

    const venue = _embedded.venues[0].address.line1 + " " + _embedded.venues[0].city.name + " " + _embedded.venues[0].country.name +
        " " + _embedded.venues[0].postalCode

    const imageUrl = _embedded.attractions[0].images[0].url

    const date = new Date(dates.start.localDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const genre = classifications[0].genre.name

    const eventType = classifications[0].segment.name


    const navigate = useNavigate();

    const handleForward = (id) => {
        // console.log("id", id);
        navigate(`/events/${id}`);
    };
    return (
        <div className="events-card grid grid-rows-4  border border-gray-700 rounded-lg max-w-72  w-full mx-auto h-84 overflow-hidden shadow-md
  hover:shadow-xl
  shadow-black/20
  transition-all
  duration-300" >

            {/* Row 1 */}
            <div className=" border-b border-gray-700 text-sm  grid grid-cols-3 items-center">

                <p className="px-2">{date}</p>
                <p className="h-full border-l border-gray-700  col-span-2 flex items-center font-thin tracking-wide ">
                    {name}
                </p>
            </div>


            {/* Row 2 */}
            <div className="grid grid-cols-4 row-span-2 border-b border-gray-700 h-full">

                {/* Book */}
                <div className="border-r border-gray-700  bg-[#f19946] font-light flex items-center justify-center  hover:scale-[0.999] hover:bg-[#f08b2c] transition-all ease-in-out hover:cursor-pointer"

                    onClick={() => handleForward(event.id)}
                >
                    Book ticket
                </div>




                {/* Image */}
                <div className="col-span-3  h-full  overflow-hidden ">
                    <img
                        src={imageUrl}
                        className="w-full h-full  object-cover block"
                    />
                </div>

            </div>


            {/* Row 3 */}
            <div className=" text-sm  grid  grid-cols-3  overflow-hidden ">
                <p className="border-r border-gray-700 col-span-2 p-1 flex items-center justify-center font-thin">
                    {venue}
                </p>
                <div className="flex items-center justify-center flex-col gap-2 ">
                    <p> {genre}</p>
                    <p>{eventType}</p>
                </div>
            </div>
        </div>
    )
}

export default Event_card



