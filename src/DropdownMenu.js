
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [nations, setNations] = useState([
    { name: 'India', value: 'IN' },
    { name: 'Pak', value: 'PK' },
    { name: 'Bangladesh', value: 'BG' },
  ]);

  const [newName, setNewName] = useState('');
  const [newCode, setNewCode] = useState('');

  function handleNameChange(event) {
    setNewName(event.target.value);
  };

  const handleCodeChange = (event) => {
    setNewCode(event.target.value);
  };

  const handleAddNation = () => {
    if (newName && newCode) {
      setNations([...nations, { name: newName, value: newCode }]);
      setNewName(' '); //With the help of passing the empty value it will empty the input box
      setNewCode(' ');
    }
  };

  const handleDropdownChange = (event) => {

    // console.log(event)
    console.log('Selected Value:', event.target.value);
  };

  return (
    <div>
      <label>
        Select a nation:
        <select onChange={handleDropdownChange}>
          {nations.map((nation, index) => (
            <option key={index} value={nation.value}>
              {nation.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <div>
        <input type="text" placeholder="Country Name" value={newName} onChange={handleNameChange} />
        <input type="text" placeholder="Country Code" value={newCode} onChange={handleCodeChange} />
        <button onClick={handleAddNation}>Add Nation</button>
      </div>
    </div>
  );
};

export default DropdownMenu;
