import React, { createContext } from 'react';
import ComB from './ComB';
const Data = createContext();
function ComA() {
  return (
    <Data.Provider value={'Nisha'}>
      <div className="component-container">
        <h1>Component A</h1>
        <p>Sending value from Component A</p>
        <ComB />
      </div>
    </Data.Provider>
  );
}
export default ComA;
export { Data };
