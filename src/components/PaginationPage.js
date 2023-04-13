import React from 'react';
import { Pagination } from 'antd';

function PaginationPage({ page , totalPage , setPage}) {

const handlePageChange = (value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <div>
      <Pagination
        defaultPageSize={1}
        defaultCurrent={1}
        total={totalPage}
        showSizeChanger={false}
        onChange={handlePageChange} />
    </div>
  );
}

export default PaginationPage