import Today from "../pages/Today";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Forecast from "../pages/Forecast";
import Overview from "./Overview";

const Main = () => {
    return ( 
        <main className="lg:w-[75%] h-[550px] lg:h-full flex flex-col gap-5 text-primary-content">
            <Router>
                <div className="h-1/2 flex flex-col">
                    <div className="text-gray-400 flex gap-x-5 ml-1">
                        <NavLink to='/' className="hover:text-primary-content transition duration-200" id="weather">Today</NavLink>
                        <NavLink to='/forecast' className="hover:text-primary-content transition duration-200" id="weather">Forecast</NavLink>
                    </div>

                    <div className="mt-4 flex-1 w-full bg-secondary rounded-3xl border border-accent border-opacity-10">
                        <Routes>
                            <Route path="/" Component={Today} />
                            <Route path="/forecast" Component={Forecast} />
                        </Routes>
                    </div>
                </div>
            </Router>
            
            <div className="h-1/2 w-full bg-secondary rounded-3xl py-3 px-5 flex flex-col border border-accent border-opacity-10">
                <Overview />
            </div>
        </main>
    );
}
 
export default Main;