import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
