import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import Icon from "../images/PSbutton.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cart from "../images/cart.png"

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src={Icon} alt=""/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <div className="bar">
                    <ul className="nav nav-tabs bg-primary">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/")}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/shop")}
                                to="/shop"
                            >
                                Shop
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/cart")}
                                to="/cart"
                            >
                                Basket <img src={Cart} alt=""/>{" "}
                                <sup>
                                    <small className="cart-badge">{itemTotal()}</small>
                                </sup>
                            </Link>
                        </li>

                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/user/dashboard")}
                                    to="/user/dashboard"
                                >
                                    My Account
                                </Link>
                            </li>
                        )}

                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/admin/dashboard")}
                                    to="/admin/dashboard"
                                >
                                    My Account
                                </Link>
                            </li>
                        )}

                        {!isAuthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        style={isActive(history, "/signin")}
                                        to="/signin"
                                    >
                                        Log In
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        style={isActive(history, "/signup")}
                                        to="/signup"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </Fragment>
                        )}

                        {isAuthenticated() && (
                            <li className="nav-item">
                                <span
                                    className="nav-link"
                                    style={{ cursor: "pointer", color: "#ffffff" }}
                                    onClick={() =>
                                        signout(() => {
                                            history.push("/");
                                        })
                                    }
                                >
                                    Log out
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
);

export default withRouter(Menu);