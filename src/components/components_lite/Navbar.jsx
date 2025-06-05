import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios"; // Import axios
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };
  return (
  <div className="bg-[#0B1120] text-white shadow-md sticky top-0 z-50">
    <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-20">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-tight">
        <span className="text-cyan-400">Job</span>
        <span className="text-yellow-400">Khojo</span>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        <ul className="flex font-semibold items-center gap-6">
          {user && user.role === "Recruiter" ? (
            <>
              <li className="hover:text-cyan-400 transition-colors">
                <Link to="/admin/companies">Companies</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link to="/admin/jobs">Jobs</Link>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-cyan-400 transition-colors">
                <Link to="/Home">Home</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link to="/Browse">Browse</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link to="/Jobs">Jobs</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link to="/Creator">About</Link>
              </li>
            </>
          )}
        </ul>

        {/* Auth Buttons or Profile */}
        {!user ? (
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-cyan-400 text-black hover:bg-cyan-300">
                Register
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer ring-2 ring-cyan-400">
                <AvatarImage
                  src={user?.profile?.profilePhoto}
                  alt="user-avatar"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-[#1C2536] text-white border-none shadow-lg">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-600">
                <Avatar className="cursor-pointer ring-2 ring-cyan-400">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="user-avatar"
                  />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{user?.fullname}</h3>
                  <p className="text-sm text-gray-400">{user?.profile?.bio}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 text-white">
                {user.role === "Student" && (
                  <div className="flex items-center gap-2 cursor-pointer">
                    <User2 />
                    <Link to="/Profile">
                      <Button variant="link" className="text-cyan-400 p-0">
                        Profile
                      </Button>
                    </Link>
                  </div>
                )}
                <div className="flex items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button
                    onClick={logoutHandler}
                    variant="link"
                    className="text-red-400 hover:text-red-500 p-0"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  </div>
);

};

export default Navbar;
