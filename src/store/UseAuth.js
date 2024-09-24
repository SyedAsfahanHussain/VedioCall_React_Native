import {create} from 'zustand';
import React from 'react';

const UseAuth = create(set => {
  return {
    user: null,
    setUser: user => set({user}),
  };
});

export default UseAuth;
