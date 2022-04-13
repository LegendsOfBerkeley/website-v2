import './LegendsButton.css'

function LegendsButton(props) {
    return (
      <div className="LegendsButton">
        <div>
          <div className="overlay"></div>
          <button className="btn btn-1">
            <span className="button-text">{props.title}</span>
          </button>
        </div>
      </div>
    )
}

export default LegendsButton