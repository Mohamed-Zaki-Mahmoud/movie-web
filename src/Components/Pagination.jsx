import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationComponent;
