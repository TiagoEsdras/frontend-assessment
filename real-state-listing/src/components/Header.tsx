import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 bg-dark-blue px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-off-white font-bold">
          Real State
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to=''
            className="py-3 px-4 text-off-white rounded-lg"
          >
            Login
          </Link>
          <Link
            to=''
            className="py-3 px-4 rounded-lg bg-gold text-dark-blue"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;