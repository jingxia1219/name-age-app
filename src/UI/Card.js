import './Card.css'

function Card(props) {
    return(
        <div className='card-div'>
            {props.children}
        </div>
    )
}

export default Card;