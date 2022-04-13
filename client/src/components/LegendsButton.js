import './LegendsButton.css'
import {Link} from "react-router-dom";


function LegendsButton(props) {
    return (
      <div className="LegendsButton">
        <div className="overlay"></div>
        <button className="btn btn-1">
          <span className="button-text">{props.title}</span>
        </button>
      </div>
    )
}

export default LegendsButton