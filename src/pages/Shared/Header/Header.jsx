import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <h1 className="text-lg font-poppins text-[#706F6F]">
        Journalism Without Fear or Favour
      </h1>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
