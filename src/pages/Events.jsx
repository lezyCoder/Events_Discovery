
import { useDispatch, useSelector } from "react-redux"
import { fetchlistOfEvents } from "../Store/Events/EventSlice";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Event_card from "../components/Event_card";

const Events = () => {

    const [showMore, setShowMore] = useState(false);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            // user reached bottom (with small buffer)
            if (scrollTop + windowHeight >= fullHeight - 50) {
                setShowMore(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // ============= Retrieving the events from the store  ==============
    const events = useSelector(state => state.event.events);
    const { isloading } = useSelector(state => state.event)

    console.log(events[1])
    useEffect(() => {
        dispatch(fetchlistOfEvents(page))
    }, [dispatch])


    // ============ Fetching the events using show more button ============
    const handleShowMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        dispatch(fetchlistOfEvents(nextPage))
    }

    const category = ["Sports", "Music", "Tech", "Art", "Cultural"]

    return (
        <div className="max-7wl py-2  mx-auto">
            <Hero name={"Events"} />
            <div className="categories  border-b-gray-300 w-full font-mono flex px-1 py-2 justify-between items-center ">
                <h1 className="hidden lg:block">Categories</h1>
                <div className="categories-links flex gap-4">
                    {
                        category.map((name) => {
                            return <p className="px-2 rounded-xl text-center border border-gray-700 hover:bg-[#f08b2c] transition-all duration-200 ease-in cursor-pointer">{name}</p>
                        })
                    }
                </div>
            </div>

            <div className="events-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 w-full min-h-screen py-2">
                {/* Event card here  */}
                {/* <Event_card event={events[0]} /> */}
                {
                    events && events.map((event) => {

                        return <Event_card event={event} key={event.id} />
                    })
                }
            </div>

            {
                showMore && <div className="show_more  p-2">
                    <button disabled={isloading} className={`px-4 py-2  text-white rounded outline-none shadow hover:scale-[0.92] transition-all duration-100 ease-in-out cursor-pointer bg-[#f19946]  hover:hover:bg-[#f08b2c] font-thin  ${isloading ? "opacity-50 cursor-not-allowed" : ""
                        }`} onClick={handleShowMore}>
                        {isloading ? "Loading..." : "Show More"}
                    </button>
                </div>
            }
        </div>
    )
}

export default Events
