import React from 'react'
import useGet from '../../../hooks/useGet';
import TextModal from '../Base/TextModal/TextModal';
import Loading from '../../Loading/Loading';
import './eventModal.css'

const EventModal = ({ isOpenModal, closeModal ,eventId}) => {
    const [data, fetching] = useGet(`events/${eventId}`);

    if (fetching) {
        return <Loading />
    }

    
    return (
      <TextModal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="event-modal">
          <h4>Nombre de evento: {data && data.name}</h4> 
          <h4>Fecha: {data && data.date}</h4>
          <h4>Descripción: {data && data.description}</h4>
        </div>
      </TextModal>
    )
}

export default EventModal
