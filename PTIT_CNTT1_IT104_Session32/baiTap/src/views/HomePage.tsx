import { useSelector } from "react-redux";

type UserType = {
  email: string;
  password: string;
};

export default function HomePage() {
  const accountLogin: UserType = useSelector(
    (state) => state.account.currentUser
  );
  console.log("Account: ", accountLogin);

  return (
    <div>
      <h1>HomePage</h1>
      <h2>Account: </h2>
      <h3>Email: {accountLogin.email}</h3>
      <h3>Password: {accountLogin.password}</h3>
    </div>
  );
}
