import { Navigate } from "react-router-dom";
import { useState } from "react";
const About = () => {

    const [user, setUser] = useState('mario')
    if (!user) {
        return <Navigate to="/" replace={true}/>
    }
    return ( 
        <div className="about">
            <h2>Welcome About</h2>
            <p>Lorem ipsum dolor sit amet consecterur adipisicing elit. reum dolor assumenda,</p>
        <button onClick={()=> setUser(null)}>Logout</button>
        </div>
     );
}
 
export default About;

// this page simulate an authentication feature 