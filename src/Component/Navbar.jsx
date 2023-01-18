import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate=useNavigate();
    const handleClick = () => {
        props.setCate("men's clothing");
        navigate("/category");
      }
    const handleClicks = () => {
        props.setCate("jewelery");
        navigate("/category");
      }
    const handleClickss = () => {
        props.setCate("electronics");
        navigate("/category");
      }
    const handleClicksss = () => {
        props.setCate("women's clothing");
        navigate("/category");
      }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* button */}
                                    <li><button onClick={handleClick} class="dropdown-item">men's clothing</button></li>
                                    <hr />
                                    <li><button onClick={handleClicks} class="dropdown-item">jewellery</button></li>
                                    <hr />
                                    <li><button onClick={handleClickss} class="dropdown-item">electronics</button></li>
                                    <hr />
                                    <li><button onClick={handleClicksss}class="dropdown-item">women's clothing</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
