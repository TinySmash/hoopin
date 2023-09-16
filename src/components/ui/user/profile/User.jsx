import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";

function User() {
  const userLoginInfo = useSelector((state) => state.user.loginInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoginInfo.isConnected) {
      navigate("/user/signup");
    }
  }, [userLoginInfo]);

  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
}

export default User;
