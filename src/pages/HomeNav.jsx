import {Navbar} from "../components";
import { Outlet } from "react-router-dom";
import {ScrollToTop} from '../components'
const HomeNav = () => {
    return <>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
    </>
};
export default HomeNav;
