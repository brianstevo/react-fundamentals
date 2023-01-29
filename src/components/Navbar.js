import React, { useState } from "react"
import { pageLinks, socialLinks } from "../data"
const Navbar = () => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle" onClick={handleToggle}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={isActive ? "nav-links hide-links" : "nav-links "} id="nav-links">
            {pageLinks.map((element) => {
              return (
                <li key={element.id}>
                  <a href={element.href} className="nav-link" rel="noopener" onClick={handleToggle}>
                    {element.text}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="nav-icon">
                    <i className={link.icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
