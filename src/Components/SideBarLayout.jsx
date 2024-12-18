import { Link, Outlet } from "react-router-dom";

const SideBarLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-400  h-screen flex flex-col justify-between p-4">
        {/* Logo and Navigation */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 mr-2"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="Logo"
            />
            <h1 className="text-lg font-bold">Sale & Rentals POS</h1>
          </div>
          <div className="flex flex-col items-start w-full px-4">
          <Link to="/" className="py-2 hover:text-blue-500">
              <p>Home</p>
            </Link>
            <Link to="/pos" className="py-2 hover:text-blue-500">
              <p>Pos</p>
            </Link>
            <Link to="/customer" className="py-2 hover:text-blue-500">
              <p>Customer</p>
            </Link>
            <Link to="/rentals" className="py-2 hover:text-blue-500">
              <p>Rentals</p>
            </Link>
            <Link to="/sale" className="py-2 hover:text-blue-500">
              <p>Sale</p>
            </Link>
            <Link to="/setting" className="py-2 hover:text-blue-500">
              <p>Setting</p>
            </Link>
          </div>
        </div>

        {/* Logout Button */}
        <div className="w-full px-4 py-4">
          <Link to="/login" className="py-2 hover:text-blue-500">
            <p>Logout</p>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBarLayout;