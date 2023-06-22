import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { userAuth } from "../context/AuthContext";
function Navbar() {
  const { user, logOut, userData } = userAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      Navigate = navigate("/logIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute'">
        <div className="flex items-center justify-items-start md:text-xl md:gap-10 ">
          <Link to="/movies" className="w-32">
            <img src={logo} alt="" />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/movies"
                className="text-gray-400  hover:text-gray-300 transition-colors duration-300"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/tv-shows"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                TV Shows
              </Link>
            </li>
            <li>
              <Link
                to="/mylist"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                My List
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white"> Hello {userData?.fullName}</div>
        <div>
    
        {user ? (
          
  <div>
    <Link
      to="/account"
      className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
    >
      <button className="bg-transparent text-white md:text-lg py-2 px-4 rounded">
        Account
      </button>
    </Link>

    <button
      onClick={handleLogout}
      className="text-sm py-1 px-2 bg-red-600 text-white md:text-lg md:py-2 md:px-4 rounded"
    >
      LogOut
    </button>
  </div>
) : (
  <div>
    <Link
      to="/signup"
      className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
    >
      <button className="bg-transparent text-white text-lg py-2 px-4 rounded">
        SignUp
      </button>
    </Link>
    <Link
      to="/login"
      className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
    >
      <button className="bg-red-600 text-white text-lg py-2 px-4 rounded">
      LogIn
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;








