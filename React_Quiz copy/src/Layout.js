import { useState } from 'react'
import  styles from './Navbar.module.css';
import ReactDOM from "react-dom/client";
import {Outlet } from "react-router-dom";

export default function Dashboard() {
return <>
    <p>WRAPPING INTORNO AL RESTO DELLA PAGINA, ESCLUSA LA NAVBAR</p>
    <br></br>
    <Outlet />
</>
}