import React from 'react';
import './profileStart.css';
import Activity from '../../Activity/Activity';
import ProfileBox from '../../ProfileBox/ProfileBox';
import Medal from '../../insignias/Medals';
import EventsBox from '../../EventsBox/EventsBox';

const ProfileStart = () => (
  <>
    <div id="principal">
      <div id="profile-column">
        <ProfileBox />
      </div>

      <div id="insignias-column">
        <Medal />
        <Activity />
      </div>

      <div id="events-column">
        <EventsBox />
      </div>
    </div>
  </>
);

export default ProfileStart;
