import Increase from './components/Increase';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import TaskContextProvider from './context/TaskContextProvider';

function App() {
    return (
        <>
            <Increase />
            <UserList />
            <LoginForm />
            <TaskContextProvider />
        </>
    );
}

export default App;