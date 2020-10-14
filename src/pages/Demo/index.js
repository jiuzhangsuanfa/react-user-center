import React from 'react';

function getDevConfig() {

  if (process.env.NODE_ENV === 'production') {

    return 'production';
  } else {
    return 'dev';
  }

}

/**
 * 这里是 App.js
 */
export default function Demo() {
  return (
    <div>
      {getDevConfig()}
    </div>
  );
}
