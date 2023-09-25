import Logo from "./Logo";
import Nav_Options from "./Nav_Options";

const Header = () => (
    <div className = "flex justify-between lg:bg-blue-100 sm:bg-yellow-100 items-center">
        <Logo/>
        <Nav_Options/>
    </div>
)

export default Header;