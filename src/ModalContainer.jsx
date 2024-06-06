import { useState } from 'react';
import Modal from './Modal.jsx';

export default function ModalContainer() {
  const [showConfirn, setShowConfirn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleConfirm() {
    setShowConfirn(false);
    console.log('Підтвердити');
  }
  function handleError() {
    setShowError(false);
    console.log('Помилка');
  }
  function handleInfo() {
    setShowInfo(false);
    console.log('інформація така');
  }

  return (
    <div className="app">
      <button onClick={() => setShowConfirn(true)}>Підтвердіть свою дію</button>
      <button onClick={() => setShowError(true)}>У вас сталася помилка</button>
      <button onClick={() => setShowInfo(true)}>Оримайте інформацію</button>
      {showConfirn && (
        <Modal
          title="Підтвердіть дію"
          message="ви впевнені в цій дії?"
          onClose={handleConfirm}
        />
      )}
      {showError && (
        <Modal
          title="Помилка"
          message="щось пішло не так?"
          onClose={handleError}
        />
      )}
      {showInfo && (
        <Modal
          title="Інформація"
          message="отримайте інформацію"
          onClose={handleInfo}
        />
      )}
    </div>
  );
}
