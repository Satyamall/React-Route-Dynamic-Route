
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const links=[
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/products",
        title: "All products",
    }
]

export default function Navbar(){
    return(
        <div className={style.nav}>
            {
                links.map((item)=>(
                    <Link to={item.to} key={item.to} className={style.link}>{item.title}</Link>
                ))
            }
        </div>
    )
}