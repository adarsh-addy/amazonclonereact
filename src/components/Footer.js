import React from 'react'
import '../style/footer.css'

function Footer(props){
   // console.log(props)
    return(
        <div className="footer">
            <p>@All Resource Reserved By {props.title}</p>
            

        </div>
    );
}

export default Footer;
