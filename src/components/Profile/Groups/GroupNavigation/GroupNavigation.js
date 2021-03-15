/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Close from '../../../Icons/Close';
import './groupNavigation.css';

const GroupNavigation = ({
  onSearchChange,
  onSelectedLanguageChange,
  onDeleteFilters,
}) => {
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('select-start');

  const onSearchChangeHandler = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    onSearchChange(newSearch);
  };

  const onSelectedLanguageChangeHandler = (event) => {
    const newSelectedLanguage = event.target.value;
    setSelectedLanguage(newSelectedLanguage);
    onSelectedLanguageChange(newSelectedLanguage);
  };

  const onDeleteFiltersHandler = () => {
    setSearch('');
    setSelectedLanguage('select-start');
    onDeleteFilters();
  };

  return (
    <div className="group-navigation">
      <div className="form-control">
        <label htmlFor="search">Nombre</label>
        <input
          type="text"
          placeholder="Buscar por nombre"
          id="search"
          value={search}
          onChange={onSearchChangeHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="filter">Lenguaje</label>
        <select
          id="filter"
          value={selectedLanguage}
          onChange={onSelectedLanguageChangeHandler}
        >
          <option disabled value="select-start">
            Select an option
          </option>
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
      <button type="button" onClick={onDeleteFiltersHandler} className="reset">
        <Close width={20} height={20} />
      </button>
      <button
        type="button"
        onClick={onDeleteFiltersHandler}
        className="reset-sm"
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GroupNavigation;
