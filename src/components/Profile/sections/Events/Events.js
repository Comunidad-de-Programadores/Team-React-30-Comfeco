import React ,{useState} from 'react';
import useModal from '../../../../hooks/useModal';
import EventModal from "../../../Modal/EventModal/EventModal";

const Events = () => {
    const [isOpenModal, openModal, closeModal] = useModal();
    const [eventId, setEventId] = useState(null);

    const openModalHandle = (id) => {
        setEventId(id);
        openModal();
    }
    if (isOpenModal) return <EventModal closeModal={closeModal} isOpenModal={isOpenModal} eventId={eventId} />
     
};

export default Events;
