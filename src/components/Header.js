import React from 'react'
// import IronhackLogo from "../../public/images/ironhack-logo.svg"
import "./Header.css"

export default function Header() {
    return (
        <div className="header-div">
            <img src="/images/ironhack-logo.svg" alt="ironhack logo"></img>
            <img src="/images/menu-top.svg" alt="menu icon"></img>
            <img src="/images/react-logo.svg" alt="react logo"></img>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button type="button">Awesome!</button>
        </div>
    )
}
