import './ErrorModal.css';

function ErrorModal(props) {
    const clickHandler = ()=>{
        props.onCancel();
    }
return(
    <div className="backdrop"  >
    <div className='modal'>
        <header className='header'>
            {props.title}
        </header>
        <div className='content'>
            <p>{props.message}</p>
        </div>
    <footer className='actions'>
        <button onClick={clickHandler}>Okay</button>
    </footer>
    </div>
    </div>
);

}

export default ErrorModal;