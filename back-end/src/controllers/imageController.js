const getImage = async (req, res) => {
  console.log(req.params.imagename);
  res.status(200).redirect('https://imgs.casasbahia.com.br/1516114321/1xg.jpg?imwidth=700');
};

module.exports = {
  getImage,
};