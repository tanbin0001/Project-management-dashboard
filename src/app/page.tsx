
"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { User, getUsers } from './utils/api-requests';

const HomePage =({ users }: { users: User[] }) => {

 
 
  return (
    <div>
      <h1>welcome to hpme</h1>
  
    </div>
  );
};

export default HomePage;