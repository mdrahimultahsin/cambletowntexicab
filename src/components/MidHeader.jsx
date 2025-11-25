import Container from "../shared/Container";
import {Link, useNavigate} from "react-router";
import {FaBusinessTime, FaCar, FaPlane,  FaUsers} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";
import {FaXmark} from "react-icons/fa6";
import ButtonSecondary from "../shared/ButtonSecondary";

const MidHeader = ({isMenuOpen, setIsMenuOpen}) => {
  const navigate = useNavigate()
  return (
    <div className="py-2 shadow-md bg-white">
      <Container>
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <Link>
              <img className="w-28 md:w-40" src="/campbelltowntaxicabs-logo.png" alt="" />
            </Link>
          </div>
          {/* Center Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-2 items-center">
              {/* Icon */}
              <div>
                <FaUsers
                  size={45}
                  className="text-primary hover:text-secondary"
                />
              </div>
              {/* Text */}
              <div>
                <p className="font-bold text-sm">Accessible Taxis</p>
                <p className="text-xs">Available on notice</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {/* Icon */}
              <div>
                <FaPlane
                  size={45}
                  className="text-primary hover:text-secondary"
                />
              </div>
              {/* Text */}
              <div>
                <p className="font-bold text-sm">Airport Transfers</p>
                <p className="text-xs">No hidden charge</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaCar
                  size={45}
                  className="text-primary hover:text-secondary"
                />
              </div>
              {/* Text */}
              <div>
                <p className="font-bold text-sm">Wedding Transfers</p>
                <p className="text-xs">No hidden charge</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaBusinessTime
                  size={45}
                  className="text-primary hover:text-secondary"
                />
              </div>
              {/* Text */}
              <div>
                <p className="font-bold text-sm">Corporate Transfers</p>
                <p className="text-xs">Available on short notice</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ButtonSecondary onClick={()=>navigate("/book-a-taxi")} className={"text-sm! md:text-base"}>Online Bookings!</ButtonSecondary>
            <button className="md:hidden border border-gray-500 bg-primary text-white px-2 py-1 rounded">
              {isMenuOpen ? (
                <FaXmark
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  size={30}
                  className="cursor-pointer"
                />
              ) : (
                <IoMenu
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  size={30}
                  className="cursor-pointer"
                />
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MidHeader;
