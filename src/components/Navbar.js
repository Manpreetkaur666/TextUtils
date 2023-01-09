  import React from 'react'
  import PropTypes from 'prop-types'
  import '../Navbar.css';
import { Link } from 'react-router-dom';

  


  export default function Navbar(props) {

    // const[myStyle, setMyStyle] = useState({
    //   color:'black',
    //   backgroundColor:'white'
    // })

    // const toggleStyle = ()=> {
    //   if(myStyle.color === 'black'){
    //     setMyStyle({
    //       color:'white',
    //       backgroundColor:'black'
    //     })
    //   }else{
    //     setMyStyle({
    //       color:'black',
    //       backgroundColor:'white'
    //     })
    //   }
    // }

    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>
        {/* <div className='colorpallete-Container'>
        <button className='colorpallete color-1' onClick={props.handleColor("blue")}></button>
        <button className='colorpallete color-2' onClick={props.handleColor("pink")}></button>
        </div> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
    )
  }

  // Define Type of Props and if its "isRequired" it means we have to pass some value

  Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      aboutText: PropTypes.string.isRequired
  }
  // Default values of Proptypes
  Navbar.defaultProps = {
      title: "Manpreet",
      aboutText: "About"
  }
