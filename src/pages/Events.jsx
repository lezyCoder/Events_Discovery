
import { useDispatch, useSelector } from "react-redux"
import { fetchlistOfEvents } from "../Store/Events/EventSlice";
import { useEffect } from "react";
import Hero from "../Components/Hero";
import Event_card from "../Components/Event_card";

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
        <div className="max-7wl  mx-auto">
            <Hero name={"Events"} />
            <div className="categories  lg:border-b border-b-gray-300 w-full font-mono flex px-1 py-2 justify-between items-center ">
                <h1 className="hidden lg:block">Categories</h1>
                <div className="categories-links flex gap-4">
                    {
                        category.map((name) => {
                            return <p className="px-2 rounded-xl text-center border border-gray-500">{name}</p>
                        })
                    }
                </div>
            </div>

            <div className="events-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 w-full min-h-screen py-2">
                {/* Event card here  */}
                <Event_card />
            </div>


        </div>
    )
}

export default Events
