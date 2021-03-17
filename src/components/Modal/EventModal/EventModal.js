import React from 'react'
import useGet from '../../../hooks/useGet';
import TextModal from '../Base/TextModal/TextModal';
import Loading from '../../Loading/Loading';

const EventModal = ({ isOpenModal, closeModal ,eventId}) => {
    const [data, fetching] = useGet(`events/${eventId}`);

    if (fetching) {
        return <Loading />
    }

    
    return (
      <TextModal isOpen={isOpenModal} closeModal={closeModal}>
        {data && data.name}
        {data && data.date}
        {data && data.description}
      </TextModal>
    )
}

export default EventModal
