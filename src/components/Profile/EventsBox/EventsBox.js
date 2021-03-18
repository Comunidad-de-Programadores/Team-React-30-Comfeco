import './EventsBox.css';
import React from 'react';
import {useSelector} from '../../../context/selector';

export default function EventsBox() {
  const { goTo } = useSelector();
  return (
    <div id="Events-box">
      <div id="Events-title">
        <h5 id="">Eventos de tu interes</h5>
        <button type='button' id="Events-more" onClick={()=>goTo('events')}>
          Ver mas
        </button>
      </div>
    </div>
  );
}
