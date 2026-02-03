import { useParams } from "react-router"

const EventDetails = () => {

  const id = useParams()
  return (
    <div>
      <div className="container grid grid-cols-2 gap-4 w-full bg-amber-100">
        <div className="left ">
          <img src="" alt="poster here" />
        </div>
        <div className="right border">
          <p>Title </p>
          <p className="infor">Information</p>
        </div>
      </div>
    </div>
  )
}

export default EventDetails