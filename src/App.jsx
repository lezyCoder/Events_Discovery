import { ref, set, getDatabase } from "firebase/database"
import { app } from "./Firebase/Config"


const db = getDatabase(app)

const App = () => {

  const putData = () => {
    set(ref(db, "users/vijay"), {
      id: 1,
      name: "Vijay",
      age: 26,
    })
  }

  return (
    <div>
      <button onClick={putData}>Put data </button>
    </div>
  )
}




export default App
