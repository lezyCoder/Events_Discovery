
import { useDispatch } from "react-redux"
import { fetchlistOfEvents } from "../Store/Events/EventSlice";
import { useEffect } from "react";

const Events = () => {

    const dispatch = useDispatch();

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
