
const handleMiddleware = (store) => (next) => (action) => {
  

  if (action.type === "auth/userRegister/fulfilled") alert("Registration sucsessful, LOGIN please !!!");

  if (action.type === "drives/updateDrive/fulfilled") console.log('OK');

  return next(action);
};

export default handleMiddleware;
