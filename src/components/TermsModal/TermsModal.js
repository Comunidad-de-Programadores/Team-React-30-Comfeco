import React from 'react';
import useGet from '../../hooks/useGet';
import Modal from '../Modal/Modal';
import Loading from '../Loading/Loading';

const TermsModal = ({ isOpenModal, closeModal }) => {
  const [data, fetching] = useGet('terms-and-conditions');
  return (
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      {fetching && <Loading />}
      {data && data[0]?.description}
    </Modal>
  );
};

export default TermsModal;
