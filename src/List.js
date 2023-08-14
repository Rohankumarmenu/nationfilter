// import React from "react";
// import { useState } from "react";
// function List() {
//     function handleNameChange(e) {
//         console.log(e.target.value);
//     }

//     const Players = [MSD, rahul, Rohit];
//     return (
//         <>
//             <input type="text" placeholder="Players" value={newName} onChange={handleNameChange} />

//         </>
//     );
// }
// export default List;

import React, { useState } from 'react';

const List = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const itemList = [
    "India", "China", "Japan", "Germany", "Italy", "Australia", "Brazil", "Canada", "France", "Spain"
  ];

  const handleSearchInputChange = (event) => {
    console.log(event)
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the items based on the search query
    const filtered = itemList.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
