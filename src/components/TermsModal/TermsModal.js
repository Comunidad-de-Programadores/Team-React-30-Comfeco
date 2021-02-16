import React from 'react'
import useGet from '../../hooks/useGet';
import TextModal from '../TextModal/TextModal';
import Loading  from '../Loading/Loading';

const TermsModal = ({isOpenModal,closeModal}) => {
    const [data, fetching] = useGet('terms-and-conditions');

    if (fetching) {
        return <Loading />
    }

    return (
      <TextModal isOpen={isOpenModal} closeModal={closeModal}>
        {data && data[0]?.description}
      </TextModal>
 )
}

export default TermsModal;
