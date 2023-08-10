
const handleMiddleware = (store) => (next) => (action) => {
  

    if (action.type === "drives/updateDrive/fulfilled") {
        console.log('OK');
  }

  return next(action);
};

export default handleMiddleware;
