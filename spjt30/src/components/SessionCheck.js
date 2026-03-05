import React, { useState, useEffect } from 'react';
import { checkSession } from '../services/api';
import Alert from './Alert';

const SessionCheck = () => {
  const [sessionStatus, setSessionStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchSessionStatus = async () => {
      try {
        const result = await checkSession();
        setSessionStatus(result);
        setIsLoggedIn(true);
      } catch (error) {
        setSessionStatus('No active session');
        setIsLoggedIn(false);
      }
    };

    fetchSessionStatus();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Alert message="You are logged in!" type="success" />
      ) : (
        <Alert message="Please log in to continue." type="error" />
      )}
    </div>
  );
};

export default SessionCheck;