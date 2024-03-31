import { Outlet } from "react-router-dom";
import NavBar from "./components/nav_bar";

const App = () => {
    return (
        <body id="body">
            <NavBar />
            <Outlet />
        </body>
    );
}

export default App;
