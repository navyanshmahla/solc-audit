import React from 'react'
import FileUpload from '../FileUpload/fileupload.js';
import Navbar from '../NavBar/Navbar.js';
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';


export default function dashboard() {
    const styles = {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      };
  return (
    <div>
        <React.Fragment>
            <Navbar/>
            <br/>
      <div style={styles}>

        <FileUpload/>
      </div>
      <br/>
      <Footer/>
        </React.Fragment>
    </div>
  )
}
