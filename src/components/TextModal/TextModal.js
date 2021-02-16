import './textModal.css';

const TextModal = ({ isOpen, closeModal, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal} aria-hidden="true">
      <div className="modal-dialog" onClick={handleModalDialogClick} aria-hidden="true">
        {children}
        <button type="button" className="modal-dialog-btn button button-yellow" onClick={closeModal}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default TextModal;