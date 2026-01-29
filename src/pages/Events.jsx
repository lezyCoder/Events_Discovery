
import { useDispatch, useSelector } from "react-redux"
import { fetchlistOfEvents } from "../Store/Events/EventSlice";
import { useEffect } from "react";

const Events = () => {

    const dispatch = useDispatch();
    // ============= Retrieving the events from the store  ==============
    const events = useSelector(state => state.event.events);

    useEffect(() => {
        dispatch(fetchlistOfEvents())
    }, [dispatch])

    return (
        <div>
            Events
        </div>
    )
}

export default Events
