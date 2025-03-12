let operationCount = 0;

const countOperations = (req, res, next) => {
  operationCount++;
  next();
};

const getOperationCount = (req, res) => {
  res.json({ OperacionesTotales: operationCount });
};

module.exports = { countOperations, getOperationCount };
