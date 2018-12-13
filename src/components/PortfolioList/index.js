import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from '../Portfolio';

import './styles.css';

const PortfolioList = ({ portfolios }) => (
  <main>
    {portfolios.map(portfolio => (
      <Portfolio key={portfolio.id} data={portfolio} />
    ))}
  </main>
);

PortfolioList.propTypes = {
  portfolios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      totalMoney: PropTypes.number,
      totalPercent: PropTypes.number,
      actives: PropTypes.array,
    }),
  ).isRequired,
};

export default PortfolioList;
