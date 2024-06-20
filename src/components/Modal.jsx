function Modal(props) {
  return (
    <div  className="modal">
      <div className="modal-header">
        <h3 className="modal-title bg-pink-400 border-4 border-pink-600 p-4 inline-block">{props.title}</h3>
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
        <p className="modal-message bg-teal-400 border-4 border-teal-600 p-4 inline-block">{props.message}</p>
      </div>
    </div>
  );
}

export default Modal;
