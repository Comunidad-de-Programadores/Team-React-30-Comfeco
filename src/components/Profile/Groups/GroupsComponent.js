/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './groupsComponent.css';
import Group from './Group/Group';
import GroupNavigation from './GroupNavigation/GroupNavigation';
import useGet from '../../../hooks/useGet';

const GroupsComponent = () => {
  const [data, fetching, error] = useGet('groups');
  
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

  if (fetching || error) return null;
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
