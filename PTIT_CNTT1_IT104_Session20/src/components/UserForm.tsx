import React, { useReducer } from "react";
import "./UserForm.css";

type State = {
  name: string;
  email: string;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

const initialState: State = {
  name: "",
  email: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

const UserForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="form-container">
      <h2>User Information Form</h2>
      <div className="form-group">
        <label>Tên:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
        />
      </div>

      <div className="user-info">
        <h3>Thông tin người dùng:</h3>
        <p><strong>Tên:</strong> {state.name || "(Chưa nhập)"}</p>
        <p><strong>Email:</strong> {state.email || "(Chưa nhập)"}</p>
      </div>
    </div>
  );
};

export default UserForm;