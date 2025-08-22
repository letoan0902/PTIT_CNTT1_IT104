import React, { Component } from 'react'

interface User {
  studentName: string;
  email: string;
  password: string;
  address: string;
}

interface FormErrors {
  studentName?: string;
  email?: string;
  password?: string;
}

type RegistrationFormProps = Record<string, never>;

type RegistrationFormState = {
  studentName: string;
  email: string;
  password: string;
  address: string;
  errors: FormErrors;
}

export default class RegistrationForm extends Component<RegistrationFormProps, RegistrationFormState> {
  private studentNameInputRef: React.RefObject<HTMLInputElement | null>;

  constructor(props: RegistrationFormProps) {
    super(props);
    this.studentNameInputRef = React.createRef<HTMLInputElement>();
    
    this.state = {
      studentName: '',
      email: '',
      password: '',
      address: '',
      errors: {}
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: undefined
      }
    }));
  }

  isEmailDuplicate = (email: string): boolean => {
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return existingUsers.some((user: User) => user.email === email);
  }

  validateForm = (): boolean => {
    const { studentName, email, password } = this.state;
    const errors: FormErrors = {};

    if (!studentName.trim()) {
      errors.studentName = 'Tên sinh viên không được để trống';
    }

    if (!email.trim()) {
      errors.email = 'Email không được để trống';
    } else if (this.isEmailDuplicate(email)) {
      errors.email = 'Email không được phép trùng';
    }

    if (!password.trim()) {
      errors.password = 'Mật khẩu không được để trống';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (this.validateForm()) {
      const newUser: User = {
        studentName: this.state.studentName,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address
      };

      const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      this.setState({
        studentName: '',
        email: '',
        password: '',
        address: '',
        errors: {}
      });

      alert('Đăng ký tài khoản thành công');

      if (this.studentNameInputRef.current) {
        this.studentNameInputRef.current.focus();
      }
    }
  }

  render() {
    const { studentName, email, password, address, errors } = this.state;

    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Đăng ký tài khoản</h2>
        
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên sinh viên:</label>
            <input
              ref={this.studentNameInputRef}
              type="text"
              name="studentName"
              value={studentName}
              onChange={this.handleInputChange}
            />
            {errors.studentName && <span style={{ color: 'red' }}>{errors.studentName}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>

          <div>
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>

          <div>
            <label>Địa chỉ:</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.handleInputChange}
            />
          </div>

          <button type="submit">Đăng ký</button>
        </form>
      </div>
    )
  }
} 