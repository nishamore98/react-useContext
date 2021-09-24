import React, { useContext } from 'react';
import { Data } from './ComA';
function ComD() {
  const Mydata = useContext(Data);
  return (
    <>
      <div className="component-container">
        <h1>Component D</h1>
        <p>Consuming value from Component A</p>
        <h1>{Mydata}</h1>
      </div>
    </>
  );
}
export default ComD;
