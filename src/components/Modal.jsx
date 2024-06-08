function Modal(props) {
return (
    <div className="modal">
        <div className="modal-header">
            <h3 className="modal-title">{props.title}</h3>
            <button className="modal-close" onClick={props.onClose}>X</button>
        </div>
        <div className="modal-body">
<p className="modal-message">{props.message}</p>
        </div>
    </div>
);
}

export default Modal;