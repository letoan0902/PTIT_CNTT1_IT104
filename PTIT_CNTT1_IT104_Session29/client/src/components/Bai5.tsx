import axios from 'axios'

export default function Bai5() {
    const getStudentById = async () =>{
        const responseID1 = await axios.get('http://localhost:3002/students/1')
        console.log(responseID1.data)
    }
  return (
    <div>
        <button onClick={getStudentById}>Get ID 1</button>
    </div>
  )
}
