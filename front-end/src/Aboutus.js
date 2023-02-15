import { Link } from 'react-router-dom'
import photo from "./photo.jpg"

const Aboutus = props => {
    return (
      <>
        <img src={photo} alt="My Photo :D" height="400"/>
        <p>Hello! This is Jiahong Jiang, a junior student of CAS currently studying in Math&Econ.<br/>
        I'm interested in hiking, tennis, and league of legends. Feel free to reach out to me if you share 
        the same interested with me!<br/>
        
        </p>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default Aboutus