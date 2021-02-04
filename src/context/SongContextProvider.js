import React, { createContext, useState } from 'react';

export const SongContext = createContext();

const SongContextProvider = () => {
  const [songs, setSongs] = useState(initialState);

  return <div></div>;
};

export default SongContextProvider;
