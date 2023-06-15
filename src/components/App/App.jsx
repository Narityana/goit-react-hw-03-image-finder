import React from 'react';
// import ImageGallery from "components/ImageGallery";
import Loader from 'components/Loader';
import Button from 'components/Button';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Loader />
      <Button />
    </div>
  );
};
