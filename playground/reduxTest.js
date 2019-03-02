const { connect } = require('redux');

console.clear();

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
};

const createClaim = (name, amountToCollect) => {
  return {
    type: 'CREAT_CLAIM',
    payload: {
      name,
      amountToCollect
    }
  };
};

// Reducers
const claimsHistory = (oldListOffClaims = [], action) => {
  if (action.type === 'CREAT_CLAIM') {
    return [...oldListOffClaims, action.payload];
  }
  return oldListOffClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountToCollect;
  }
  if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  }
  if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};
