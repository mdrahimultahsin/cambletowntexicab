
import Container from "../shared/Container";
import {Link} from "react-router";
import {FaBusinessTime, FaCar, FaPlane, FaShip} from "react-icons/fa";

const MidHeader = () => {
  return (
    <div className="py-2">
      <Container>
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <Link>
              <img className="w-40" src="/logo.png" alt="" />
            </Link>
          </div>
          {/* Center Icons */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              {/* Icon */}
              <div>
                <FaShip
                  size={45}
                  className="text-primary hover:text-secondary"
                />
              </div>
              {/* Text */}
              <div>
                <p className="font-bold text-sm">Cruise Ship Transfers</p>
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
          <div className="flex items-center">
            <button className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-primary transition cursor-pointer font-bold">
              Online Booking!
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MidHeader;
