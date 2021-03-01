import React from 'react';
import './EditForm.css';

import ArrowLeft from '../../Icons/Arrows/ArrowLeft';
import Form from './Form/Form';

const EditForm = () => {
  const onSubmitHandler = (data) => {
    console.log(data);
  };

  const returnHandler = () => {
    console.log('going back');
  };

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
      <Form onSubmit={onSubmitHandler} />
    </>
  );
};

export default EditForm;
