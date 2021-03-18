import React from 'react';
import GroupsComponent from '../../Groups/GroupsComponent';
import MyGroup from '../../Groups/MyGroup/MyGroup';
import './groups.css';

const Groups = () => (
  <div className="groups-section">
    <div>
      <MyGroup />
    </div>
    <div>
      <GroupsComponent />
    </div>
  </div>
);

export default Groups;
