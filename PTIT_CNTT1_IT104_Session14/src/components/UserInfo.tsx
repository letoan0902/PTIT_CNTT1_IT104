import { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    const person = {
        name: "Nguyễn Văn A",
        sex: "Nam",
        born: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    }

    return <>
      <h3>Thông tin cá nhân</h3>
      <ul>
        <li>Họ và tên: {person.name}</li>
        <li>Giới tính: {person.sex}</li>
        <li>Ngày Sinh: {person.born}</li>
        <li>Email: {person.email}</li>
        <li>Địa chỉ: {person.address}</li>
      </ul>
    </>
  }
}
