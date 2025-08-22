import React, { Component } from 'react'

interface User {
  studentName: string;
  email: string;
  password: string;
  address: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

type LoginFormProps = Record<string, never>;

type LoginFormState = {
  email: string;
  password: string;
  errors: FormErrors;
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
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

  validateForm = (): boolean => {
    const { email, password } = this.state;
    const errors: FormErrors = {};

    if (!email.trim()) {
      errors.email = 'Email không được để trống';
    }

    if (!password.trim()) {
      errors.password = 'Mật khẩu không được để trống';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  checkLoginCredentials = (email: string, password: string): boolean => {
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return existingUsers.some((user: User) => 
      user.email === email && user.password === password
    );
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (this.validateForm()) {
      const { email, password } = this.state;
      
      if (this.checkLoginCredentials(email, password)) {
        alert('Đăng nhập thành công');
        this.setState({
          email: '',
          password: '',
          errors: {}
        });
      } else {
        alert('Đăng nhập thất bại');
      }
    }
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Đăng nhập tài khoản</h2>
        
        <form onSubmit={this.handleSubmit}>
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

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    )
  }
} 