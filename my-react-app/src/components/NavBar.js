import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <>
            <Link to={'/home'}>Trang chủ</Link> |
            <Link to={'/home/create'}>Them moi</Link>
            <hr/>
        </>
    )
}