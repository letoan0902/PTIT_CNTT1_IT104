import axios from 'axios'

export default function Bai6() {
    const createStudent = async ()=>{
        const response = await axios.post('http://localhost:3002/students',
            {
                student_name: 'Nguyễn Văn B',
                email: 'nguyenb@gmail.com',
                address: '123 Nguyen Van Troi, Q9, TP.HCM',
                phone: '0932768902',
                status: false,
                create_at: '02/09/2025'
            }
        )
        if(response.status===201){
            console.log("Thêm sinh viên thành công");
            console.log("Sinh viên mới:",response.data);
        }
    }
  return (
    <div>
        <button onClick={createStudent}>Create Student</button>
    </div>
  )
}
