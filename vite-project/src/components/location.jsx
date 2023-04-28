import { CiLocationOn } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";

function Location() {
    return (
        <div className="hidden lg:flex items-center h-10 border-b justify-around ">
            <CiLocationOn style={{marginRight: '6px'}} />
            <input type="text" className="outline-none" placeholder="Location" />
            <FaPencilAlt />
        </div>
    );
}

export default Location;