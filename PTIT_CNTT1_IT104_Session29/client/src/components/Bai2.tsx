import axios from 'axios'

export default function Bai2() {

    const getAllProducts = async () =>{
        const response = await axios.get('http://localhost:3000/products')
        console.log(response.data)
    }
  return (
    <div>
        <button onClick={getAllProducts}>Test 1</button>
    </div>
  )
}
