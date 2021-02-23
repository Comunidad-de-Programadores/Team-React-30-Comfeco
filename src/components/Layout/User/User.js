import React from 'react';
import { useAuth } from '../../../context/auth';
import './user.css';

export default function User() {
  const { user } = useAuth();
  const { nick } = user || { nick: 'Usuario' };

  return <div className="user">{nick}</div>;
}
