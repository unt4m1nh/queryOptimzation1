import React, { useEffect, useState } from 'react';
import { TExecStats, TProducts } from '../../data/type';
import Content from './Content.tsx';
import SearchBox from './Searchbox.tsx';
import ExecStats from './ExecStats.tsx';
const HomePage = () => {
  const [products, setProducts] = useState<TProducts[] | null>(null);
  const [execStats, setExecStats] = useState<TExecStats | null>(null);

  const getProducts = async () => {
    const requestOptions = {
      method: 'GET',
    };
    
    await fetch('http://localhost:3001/getProducts', requestOptions)
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
      `http://localhost:3001/getProductsByName/:${name}`,
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
      `http://localhost:3001/getProductsByName/executionStats/:${name}`,
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
  }


  useEffect(() => {
    getProducts();
  }, []);



  return (
    <div style={{ padding: 128 }}>
      <SearchBox onSearchInputChange={queryProduct}/>
      <ExecStats execStats={execStats} />
      <h1>Products</h1>
      <Content products={products} />
    </div>
  );
};

export default HomePage;
