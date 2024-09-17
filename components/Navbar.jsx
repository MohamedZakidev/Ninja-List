import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image priority={true} width={128} height={77} src={logo} alt="ninja logo" />
            </div>
            <ul>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/ninjas"}>Ninja listing</Link>
            </ul>
        </nav>
    )
}

export default Navbar
