import React from 'react';
import '../Styles/Home.css';

const Home = ({ totalEntries, totalOutflows, total }) => {
  return (
    <div className='home-container'>
      <h1 className='main-title'>Home</h1>
      <div className='content-infos'>
        <p className='info-item'><span>Total Entradas:</span> {totalEntries}</p>
        <p className='info-item'><span>Total Saídas:</span> {totalOutflows}</p>
        <p className='info-item'><span>Saldo Atual:</span> {total}</p>
      </div>
    </div>
  );
}

export default Home;
