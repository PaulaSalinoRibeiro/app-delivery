const getImage = async (req, res) => {
  console.log(req.params.imagename);
  res.status(200).end();
};

module.exports = {
  getImage,
};