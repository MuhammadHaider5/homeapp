import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons"; // Import the React icon
import "bootstrap/dist/css/bootstrap.css";
import './NavBar.css';
const Navbar = () => {
  const [edit,setEdit] = useState(false)
    const updateUser =() =>{
        alert("Clicked me")
        setEdit(false)
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navBar">
        <div className="container-fluid mx-3 ">
          <a className="navbar-brand mx-3" href="/" style={{ color: "#F9F6EE"  }}>
            <FontAwesomeIcon icon={faReact} size = '2x' />
          </a>
          <div
            className="collapse navbar-collapse"
            style={{ marginLeft: "350px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link mx-4"
                  activeClassName="active" // default is active
                  exact
                  href="/"
                  style={{ color: "#F9F6EE", }}
                >
                  Overview
                </a>
              </li>
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle mx-4"
                      activeClassName="active"
                      style={{ color: "#F9F6EE" }}
                      href="/features"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <a
                  className="nav-link mx-4"
                  activeClassName="active"
                  href="/pricing"
                  style={{ color: "#F9F6EE" }}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-4"
                  activeClassName="active"
                  href="/contact"
                  style={{ color: "#F9F6EE" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__right mx-3">
          {(<button className='gradientButton btn-grad' onClick={()=>updateUser()}>Upgrade</button>) }
            </div>
                <img src="https://s3-alpha-sig.figma.com/img/412b/c03e/aa3bb28a231c35c7def16ca5631e3af9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSLRF9KQTrmGyou9ezkIkDULetarGCT7T92Zh4AuBSQbanGQ1FlqsHdyK8VJuKZLc~HD19q75CB9SESqAQ~nnRw4KgMIqgA1WaUcYW~EG2upMLo5QCR1Ea3x6jAI4iABhRryU~tWlelXGdXGI2VH5W9XlxnhLoFAi8z5EcQkD2BSdobZ59pEKbHLPvUHK73EaY3m22jMgwTlFFrzU9aBBcHrq9cN8NEErs4GgN6HyANiR7xG~xlGT6arJb3~beGtpVromadUIRqNI9dQfHm3Xxe6Iazw0ZuLSVjoWu-w-gtvvFAc1834hI4VdnUX7QdF5aw03VzNmbDQ~-SstskRHA__" alt="ckissi" class="w-8 rounded-full"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
