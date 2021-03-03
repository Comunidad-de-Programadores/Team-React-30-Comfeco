import React from 'react'

import './profile.css'
import {SubMenu} from '../../components/SubMenu/SubMenu'
import SelectorProvider from '../../context/selector'
import ViewSelector from '../../components/ViewSelector/ViewSelector'
import ViewItem from '../../components/ViewSelector/ViewItem/ViewItem'
import ProfileStart from '../../components/Profile/sections/ProfileStart/ProfileStart'
import EditProfile from '../../components/Profile/sections/EditProfile/EditProfile'
import Groups from '../../components/Profile/sections/Groups/Groups'
import Events from '../../components/Profile/sections/Events/Events'
import Medals from '../../components/Profile/sections/Medals/Medals'

export default function Profile() {
    return (
      <SelectorProvider>
        <SubMenu />
        <ViewSelector initialView="profile-start">
          <ViewItem name="profile-start" component={ProfileStart} />
          <ViewItem name="edit-profile" component={EditProfile} />
          <ViewItem name="groups" component={Groups} />
          <ViewItem name="events" component={Events} />
          <ViewItem name="medals" component={Medals} />
        </ViewSelector>
      </SelectorProvider>
    )
}
