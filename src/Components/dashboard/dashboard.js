import React from 'react'
import Navbar from '../NavBar/Navbar.js';
import FileUpload from '../FileUpload/fileupload.js';

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
        </React.Fragment>
    </div>
  )
}
