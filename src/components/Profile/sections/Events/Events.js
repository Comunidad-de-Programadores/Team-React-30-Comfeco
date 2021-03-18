import React ,{useState} from 'react';
import useModal from '../../../../hooks/useModal';
import EventModal from "../../../Modal/EventModal/EventModal";
import EventsComponent from "../../EventsBox/EventsComponent/EventsComponent";

const Events = () => {
    const [isOpenModal, openModal, closeModal] = useModal();
    const [eventId, setEventId] = useState(null);

    const openModalHandler = (id) => {
        setEventId(id);
        openModal();
    }
    if (isOpenModal) return <EventModal closeModal={closeModal} isOpenModal={isOpenModal} eventId={eventId} />
    return <EventsComponent openModalHandler={openModalHandler} />
     
};
export default Events;
