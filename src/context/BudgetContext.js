import React, { createContext, useState } from 'react';

// Créer le contexte
export const BudgetContext = createContext();

// Fournisseur du contexte
export const BudgetProvider = ({ children }) => {
  const [budgetData, setBudgetData] = useState({
    balance: 0,
    categories: [],
  });

  const updateBudget = (newData) => {
    setBudgetData(newData);
  };

  return (
    <BudgetContext.Provider value={{ budgetData, updateBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};
