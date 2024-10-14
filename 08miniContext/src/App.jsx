import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <h1>React w Chai</h1>
    <Login />
    <Profile />
    </ UserContextProvider>

  )
}

export default App
