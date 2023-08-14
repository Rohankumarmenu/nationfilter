import * as React from 'react';
import DropdownMenu from './DropdownMenu.js'
import List from './List.js';
const App = () => {

  return (

    <div>

      <label>

        What do we eat?

        <select>

          <option value="fruit">Fruit</option>

          <option value="vegetable">Vegetable</option>

          <option value="meat">Meat</option>

        </select>

      </label>

      <DropdownMenu></DropdownMenu>
      <List></List>
    </div>

  );

};

export default App;