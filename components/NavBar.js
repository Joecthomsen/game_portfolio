import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <h1>The Game Page</h1>
            
            <Link href={"/"}><a>Home</a></Link>
            <Link href={"/about"}><a>About</a></Link>
            <Link href={"/login"}><a>Login</a></Link>
            
            
            
            
        </nav>
    );
}
 
export default NavBar;