import { FaBook, FaHome, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendar, FaList, FaListCheck, FaMoneyBill, FaRegMessage } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { MdEmail, MdHome } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value form databaser
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard slider */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 ">

                    { 
                        isAdmin ? <>
                        <li ><NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home</NavLink></li>
                    <li ><NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>
                    Add Items</NavLink></li>

                
                    <li ><NavLink to="/dashboard/manageItems">
                    <FaListCheck></FaListCheck>
                    Manage Items</NavLink></li>
                    <li ><NavLink to="/dashboard/manageBookings">
                    <FaBook></FaBook>
                   Manage Bookings</NavLink></li>
                    <li ><NavLink to="/dashboard/allUsers">
                    <FaUsers></FaUsers>
                    All Users</NavLink></li>
                    
                        </> : <>
                        <li ><NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home</NavLink></li>
                    <li ><NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink></li>

                
                    <li ><NavLink to="/dashboard/payment">
                    <FaMoneyBill></FaMoneyBill>
                    Payment History</NavLink></li>
                    <li ><NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})</NavLink></li>
                    <li ><NavLink to="/dashboard/review">
                    <FaRegMessage></FaRegMessage>
                    add review</NavLink></li>
                    <li ><NavLink to="/dashboard/booking">
                    <FaList></FaList>
                    my booking</NavLink></li>
                        </>
                    }
                    {/* shared navlinks */}
                    <div className="divider"></div>
                    <li ><NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink></li>
                    <li ><NavLink to="/dasboard/menu">
                    <FaSearch></FaSearch>
                    Menu</NavLink></li>
                    <li ><NavLink to="/dasboard/contact">
                    <MdEmail></MdEmail>
                    Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;