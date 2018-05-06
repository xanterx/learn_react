import React from 'react';

const userInput = (props) => {
  const style ={
    backgroundColor:'#eee',
    width: '40%',
    border: '1px solid #222',
    borderRadius: '8px',
    padding:'4px'
  };
  return(
    <div>
      <input style={style} type="text" onChange={props.changed} value={props.val}/>
    </div>
  );
}

export default userInput;