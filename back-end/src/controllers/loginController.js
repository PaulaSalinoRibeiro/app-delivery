const login = async (req, res) => {
  const { email, password } = req.body;
  // return service
  res.status(200).json();
};

module.exports = {
  login,
};