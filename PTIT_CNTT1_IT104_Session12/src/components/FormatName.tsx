import React, { Component } from 'react'

export default class FormatName extends Component {
  render() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam"
    };
    const formatName = (user:{ firstName: string; lastName: string })=>{
        return user.firstName + " "+  user.lastName;
    }
    
    return (
      <div>Họ và tên: {formatName(user)}</div>
    )
  }
}
