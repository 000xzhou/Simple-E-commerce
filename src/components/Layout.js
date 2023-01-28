import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ cartItems }) => {
    return (
        <>
            <NavBar cartItems={cartItems} />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout