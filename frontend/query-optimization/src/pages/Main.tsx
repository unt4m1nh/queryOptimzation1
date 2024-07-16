import React, { useEffect, useState } from 'react';
import { TExecStats, TProducts } from '../data/type.ts';
import Content from './components/Content.tsx';
import SearchBox from './components/Searchbox.tsx';
import ExecStats from './components/ExecStats.tsx';
import PaginationDiv from './components/Pagination.tsx';

const HomePage = () => {
  const [products, setProducts] = useState<TProducts[] | null>(null);
  const [execStats, setExecStats] = useState<TExecStats | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getProducts = async () => {
    const requestOptions = {
      method: 'GET',
    };

    await fetch(
      `http://localhost:3001/getProducts/page?page=${currentPage}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.error(error));
  };

  const getProductsByName = async (name: string) => {
    const requestOptions = {
      method: 'GET',
    };

    await fetch(
      `http://localhost:3001/getProductsByName/:${name}/page?page=${currentPage}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.error(error));
  };

  const getExecStats = async (name: string) => {
    const requestOptions = {
      method: 'GET',
    };

    await fetch(
      `http://localhost:3001/getProductsByName/executionStats/:${name}/page?page=${currentPage}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setExecStats(result.executionStats);
      })
      .catch((error) => console.error(error));
  };

  const queryProduct = (name: string) => {
    getProductsByName(name);
    getExecStats(name);
  };

  const handleClickPage = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <div style={{ padding: 128 }}>
      <SearchBox onSearchInputChange={queryProduct} />
      <ExecStats execStats={execStats} />
      <h1>Products</h1>
      <Content products={products} />
      <PaginationDiv
        onClickNext={() => setCurrentPage((prev) => prev + 1)}
        onClickPage={handleClickPage}
        onClickPrev={() => setCurrentPage((prev) => prev - 1)}
        curPage={currentPage}
      />
    </div>
  );
};

export default HomePage;
