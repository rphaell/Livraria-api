const {Livro} = require("../models")

Livro.findAll().then(
    data => console.log(data)
)