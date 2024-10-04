import Register from "./pages/register"
import Login from "./pages/login"
import Header from "./components/global/Header"
import "./styles/global.css"
const App = () =>{
    return(<div id = "divContainter">
        <Header />
        <Register />
        <hr />
        <Login />
    </div>)
}
export default App