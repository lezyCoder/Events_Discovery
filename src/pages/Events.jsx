
import { useDispatch, useSelector } from "react-redux"
import { fetchlistOfEvents } from "../Store/Events/EventSlice";
import { useEffect } from "react";
import Hero from "../Components/Hero";

const Events = () => {

    const dispatch = useDispatch();
    // ============= Retrieving the events from the store  ==============
    const events = useSelector(state => state.event.events);

    console.log("events", events[0])
    useEffect(() => {
        dispatch(fetchlistOfEvents())
    }, [dispatch])

    const category = ["Sports", "Music", "Tech", "Art", "Cultural"]

    return (
        <div className="max-7wl  ">
            <Hero name={"Events"} />
            <div className="categories  border-b border-b-gray-300 w-full font-mono flex p-1 justify-between items-center ">
                <h1>Categories</h1>
                <div className="categories-links flex gap-4">
                    {
                        category.map((name) => {
                            return <p className="px-2 rounded-xl text-center border border-gray-500">{name}</p>
                        })
                    }
                </div>
            </div>

            <div className="events-container grid lg:grid-cols-4 grid-cols-3 w-full min-h-screen border-gray-700 py-2 gap-6">
                <div className="events-card grid grid-rows-3 border w-72 h-84 overflow-hidden">

                    {/* Row 1 */}
                    <div className="flex border-b border-gray-300 text-sm font-medium">

                        <p className="px-2">Date</p>
                        <p className="flex-1 border-r border-gray-300 px-2">
                            Name of the event
                        </p>
                    </div>

                    {/* Row 2 */}
                    <div className="flex images items-center gap-2 border-b lg:grid grid-cols-3 border-gray-300 px-2  ">
                        <button
                            type="button"
                            className="ml-auto bg-orange-400 text-white px-3 py-1 rounded hover:bg-orange-500 "
                        >
                            Book
                        </button>
                        <div className="images flex gap-8 ">
                            <img
                                src="data:image/webp;base64,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"
                                alt="event"
                                className="w-16 h-18 h-full object-contain border "
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="px-2 py-1 text-sm flex items-center ">
                        <p>Venue</p>
                        <p>Details</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Events
