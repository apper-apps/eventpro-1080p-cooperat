import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../App";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Header = ({ onMenuClick }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      await logout();
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden mr-2"
        >
          <ApperIcon name="Menu" className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-900">EventPro</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        {isAuthenticated && user && (
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600 hidden sm:block">
              Welcome, {user.firstName || user.name || 'User'}
            </span>
            <Button variant="ghost" size="sm">
              <ApperIcon name="Bell" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ApperIcon name="Settings" className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <ApperIcon name="LogOut" className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
</div>
    </header>
  );
};

export default Header;