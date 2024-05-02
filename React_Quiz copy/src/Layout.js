import {Outlet } from "react-router-dom";

export default function Layout() {
return <>
    <p>WRAPPING INTORNO AL RESTO DELLA PAGINA, ESCLUSA LA NAVBAR</p>
    <br></br>
    <Outlet />
</>
}