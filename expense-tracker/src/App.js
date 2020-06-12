import React from 'react';
import Head from './components/Head';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import ExpandPanel from './components/ExpandPanel';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

import './App.css';

const theme = {
  spacing: 4,
}

function App() {
  return (
      <GlobalProvider>
        <div className="Container">
          <Head title='Expense Tracker'/>
            <Balance />
            <IncomeExp />
            <ExpandPanel />
            <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;
