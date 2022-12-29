import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@mantine/core';

export const Filter = ({ setFilterValue }) => {
  const [filter, setFilter] = useState('');

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
    setFilterValue(value);
  };

  return (
    <>
      <label htmlFor="">
        filter
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
};
