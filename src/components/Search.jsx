import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = ({ filterSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    filterSearch(event.target.value);
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" name="search" onChange={handleSearch} value={search} />
    </div>
  );
};

export default Search;
