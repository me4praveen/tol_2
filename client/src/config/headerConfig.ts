import React from "react";
import { ReactComponent as Logo } from "../assets/images/temple-of-learning-logo.svg";

const Home = React.lazy(() => import("../pages/home/Home"));
const AboutUs = React.lazy(() => import("../pages/AboutUs/AboutUs"));
const Account = React.lazy(() => import("../pages/account/Account"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const Events = React.lazy(() => import("../pages/events/Events"));


export enum Roles {
    ADMIN='admin',
    SUPER_ADMIN='super',
    STUDENT = 'student',
    STAFF = 'staff',
    VIEWER = 'viewer'
}

export interface INavItemConfig {
    title: string;
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element> ;
    roles?: Roles[];
    navlink?: Boolean;
    redirect?: Boolean;
    exact?: Boolean;
}


const HEADERS_CONFIG = {
    title: "Temple Of Learning",
    brandNavLink: "/",
    brandLogo: Logo,
    navItems: [
        {
            title: "Home",
            path: "/",
            redirectPath: "/home",
            exact: true,
            component: Home
        },
        {
            title: "Home",
            path: "/home",
            component: Home,
            navlink: true
        },
        {
            title: "About Us",
            path: "/about",
            component: AboutUs,
            navlink: true
        },
        {
            title: "Account",
            path: "/account",
            component: Account,
            roles: [Roles.ADMIN, Roles.SUPER_ADMIN],
            navlink: true
        },
        {
            title: "Events",
            path: "/event",
            component: Events,
            roles: [Roles.ADMIN, Roles.SUPER_ADMIN],
            navlink: true
        },
        {
            title: "Login",
            path: "/login",
            component: Login,
        },
        {
            title: "Register",
            path: "/register",
            component: Register,
        }
    ]
}



export default HEADERS_CONFIG;