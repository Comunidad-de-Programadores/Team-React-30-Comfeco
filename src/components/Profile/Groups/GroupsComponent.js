/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './groupsComponent.css';
import Group from './Group/Group';
import GroupNavigation from './GroupNavigation/GroupNavigation';

const GroupsComponent = () => {
  const [data] = useState([
    {
      id: 1,
      img: '',
      name: 'Grupo 1',
      language: 'TypeScript',
    },
    {
      id: 2,
      img: '',
      name: 'Grupo 2',
      language: 'JavaScript',
    },
    {
      id: 3,
      img: '',
      name: 'Grupo 3',
      language: 'TypeScript',
    },
    {
      id: 4,
      img: '',
      name: 'Grupo 4',
      language: 'JavaScript',
    },
    {
      id: 5,
      img: '',
      name: 'Grupo 5',
      language: 'TypeScript',
    },
  ]);

  const [dataCopy, setDataCopy] = useState(data);

  const onSearchChange = (search) => {
    const newData = data.filter((group) => group.name.includes(search));
    setDataCopy(newData);
  };

  const onSelectedLanguageChange = (selectedLanguage) => {
    const newData = data.filter((group) => group.language === selectedLanguage);
    setDataCopy(newData);
  };

  const onDeleteFilters = () => {
    setDataCopy(data);
  };

  return (
    <div className="groups">
      <GroupNavigation
        onSearchChange={onSearchChange}
        onSelectedLanguageChange={onSelectedLanguageChange}
        onDeleteFilters={onDeleteFilters}
      />
      <div className="items">
        {dataCopy.map((group) => (
          <Group key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
}

export default GroupsComponent
