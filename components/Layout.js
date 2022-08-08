import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    console.log(children)
    return ( 
        <div>
            <NavBar />
                { children }
            <Footer />
        </div>
     );
}
 
export default Layout;