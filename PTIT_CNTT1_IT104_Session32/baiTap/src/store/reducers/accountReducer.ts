type UserType = {
  email: string;
  password: string;
};

type AccountState = {
  users: UserType[];
  isLoggedIn: boolean;
  currentUser?: UserType;
};

const initialState: AccountState = {
  users: [],
  isLoggedIn: false,
  currentUser: undefined,
};

type ActionType = {
  type: string;
  payload: UserType;
};

export const accountReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "register":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
