function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-header">
        <h3 className="modal-title">{props.title}</h3>
        <button
          style={{
            backgroundColor: '#4CAF50' /* Green */,
            border: 'none',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
          className="modal-close"
          onClick={props.onClose}
        >
          ☠
        </button>
      </div>
      <div className="modal-body">
        <p className="modal-message">{props.message}</p>
      </div>
    </div>
  );
}

export default Modal;
