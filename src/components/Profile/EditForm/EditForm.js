import React from 'react';
import './EditForm.css';

import ArrowLeft from '../../Icons/Arrows/ArrowLeft';
import Form from './Form/Form';
import { useSelector } from '../../../context/selector';

const EditForm = () => {
  const { goTo } = useSelector();

  const returnHandler = () => goTo('profile-start');

  return (
    <>
      <span
        className="arrow-back"
        onClick={returnHandler}
        role="button"
        tabIndex={0}
        onKeyDown={returnHandler}
      >
        <ArrowLeft />
      </span>
      <Form />
    </>
  );
};

export default EditForm;
