import { useState } from 'react'
import  styles from './Navbar.module.css';
import ReactDOM from "react-dom/client";
import {Outlet } from "react-router-dom";

export default function Dashboard() {
return <>
    <br></br>
    <Outlet />
</>
}