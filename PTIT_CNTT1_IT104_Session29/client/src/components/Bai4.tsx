import axios from "axios"

export default function Bai4() {
const getAllStudents = async ()=>{
    const response = await axios.get('http://localhost:3002/students')
    console.log(response.data)
}
  return (
    <div>
        <button onClick={getAllStudents}>Test 4</button>
    </div>
  )
}
