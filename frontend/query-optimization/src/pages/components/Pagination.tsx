import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface IPaginationProps {
  curPage: number;
  onClickPrev: () => void;
  onClickPage: (pageNum: number) => void;
  onClickNext: () => void;
}

const pagination = [1, 2, 3, 4];

const PaginationDiv = (props: IPaginationProps) => {
  console.log(props.curPage);
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev onClick={props.onClickPrev} />
      {pagination.map((item) => (
        <Pagination.Item
          key={item}
          active={props.curPage === item}
          onClick={() => props.onClickPage(item)}
        >
          {item}
        </Pagination.Item>
      ))}

      <Pagination.Ellipsis
        style={{ display: props.curPage < 5 ? 'none' : 'block' }}
      />
      <Pagination.Item
        style={{ display: props.curPage < 5 ? 'none' : 'block' }}
        active
        onClick={() => props.onClickPage(props.curPage)}
      >
        {props.curPage}
      </Pagination.Item>

      <Pagination.Next onClick={props.onClickNext} />
      <Pagination.Last />
    </Pagination>
  );
};

export default PaginationDiv;
