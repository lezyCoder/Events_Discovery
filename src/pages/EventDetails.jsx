import { useParams } from "react-router"

const EventDetails = () => {

  const id = useParams()

  return (
    <div>
      <p>Events Details</p>
    </div>
  )
}

export default EventDetails