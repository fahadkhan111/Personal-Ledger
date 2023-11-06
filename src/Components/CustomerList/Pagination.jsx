import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const MyPagination = () => {
  return (
    <div style={{ 
        display: 'block', 
    }}>
        <Pagination>
            <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled>
                <PaginationLink>.........</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">50</PaginationLink>
            </PaginationItem>
        </Pagination>
    </div>
  );
}

export default MyPagination;
