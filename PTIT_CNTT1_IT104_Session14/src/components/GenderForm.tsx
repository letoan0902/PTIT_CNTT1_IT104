import React, { Component } from 'react'

type GenderFormProps = Record<string, never>;

type GenderFormState = {
  selectedGender: string;
  isSubmitted: boolean;
}

export default class GenderForm extends Component<GenderFormProps, GenderFormState> {
  constructor(props: GenderFormProps) {
    super(props);
    this.state = {
      selectedGender: '',
      isSubmitted: false
    }
  }

  handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedGender: event.target.value
    });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (this.state.selectedGender) {
      this.setState({
        isSubmitted: true
      });
    } else {
      alert('Vui lòng chọn giới tính!');
    }
  }

  handleReset = () => {
    this.setState({
      selectedGender: '',
      isSubmitted: false
    });
  }

  render() {
    const { selectedGender, isSubmitted } = this.state;

    return (
      <div>
        {!isSubmitted && (
          <div>
            <h3>Trước khi submit:</h3>
            
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Giới tính:</label>
                
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Nam"
                    checked={selectedGender === 'Nam'}
                    onChange={this.handleGenderChange}
                  />
                  <label htmlFor="male">Nam</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Nữ"
                    checked={selectedGender === 'Nữ'}
                    onChange={this.handleGenderChange}
                  />
                  <label htmlFor="female">Nữ</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Khác"
                    checked={selectedGender === 'Khác'}
                    onChange={this.handleGenderChange}
                  />
                  <label htmlFor="other">Khác</label>
                </div>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {isSubmitted && (
          <div>
            <h3>Sau khi submit:</h3>
            
            <div>
              <label>Giới tính: {selectedGender}</label>
              
              <div>
                <input
                  type="radio"
                  id="male-result"
                  name="gender-result"
                  value="Nam"
                  checked={selectedGender === 'Nam'}
                  disabled
                />
                <label htmlFor="male-result">Nam</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="female-result"
                  name="gender-result"
                  value="Nữ"
                  checked={selectedGender === 'Nữ'}
                  disabled
                />
                <label htmlFor="female-result">Nữ</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="other-result"
                  name="gender-result"
                  value="Khác"
                  checked={selectedGender === 'Khác'}
                  disabled
                />
                <label htmlFor="other-result">Khác</label>
              </div>

              <button>Submit</button>
            </div>

            <button onClick={this.handleReset}>Quay lại</button>
          </div>
        )}
      </div>
    )
  }
}
