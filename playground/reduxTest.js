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

const createClaim (name, amountToCollect) => {
return {
    type: 'CREAT_CLAIM',
    payload: {
        name,
        amountToCollect
    }
}
}

// Reducers
const claimsHistory = (oldListOffClaims, action) => {
if(action.type === 'CREAT_CLAIM'){
return [...oldListOffClaims, action.payload]
}
return oldListOffClaims;
}