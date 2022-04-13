import './ThinLegendsButton.css'
import {Link} from "react-router-dom";


function ThinLegendsButton(props) {
    return (
      <div className="ThinLegendsButton">
        <div className="thin-overlay"></div>
        <button className="thin-btn thin-btn-1">
          <span className="thin-button-text">{props.title}</span>
        </button>
      </div>
    )
}

export default ThinLegendsButton