import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { logout } from "../services/operations/authApi";

const ProfileDropdown = () => {
  const { user, loading } = useSelector((state) => state.profile);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
    setOpen(false);
  };

  return (
    <div className="mr-14 relative ">
      <div
        className="flex flex-row justify-center items-center gap-1"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src={user.image}
          alt={`image of${user.firstName}`}
          className="h-11 w-11 rounded-full object-cover  "
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>

      {open && (
        <div className="absolute flex flex-col top-[110%] right-[-10%] text-white font-semibold justify-center items-start  bg-blue rounded-lg p-3">
          <Link
            to={"/dashboard/my-profile"}
            className="flex flex-row gap-x-1 py-[10px] px-[12px] text-lg justify-center hover:text-neutral-700 items-center"
          >
            <VscDashboard className="text-lg" />
            Dashboard
          </Link>
          <div
            onClick={handleLogout}
            className="flex flex-row justify-center gap-x-1 py-[10px] px-[12px] text-lg items-center cursor-pointer hover:text-neutral-700"
          >
            <VscSignOut className="text-lg " />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;