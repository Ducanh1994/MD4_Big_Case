import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <hr/>
            <h3>Đây là Header</h3>
            <Link to={'home/list'}></Link> |
            <Link to={'home/create'}></Link>
        </>
    )
}