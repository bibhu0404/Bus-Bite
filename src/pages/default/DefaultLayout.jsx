import React from 'react';
import Header from '../../components/default/Header'
import Footer from '../../components/default/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}