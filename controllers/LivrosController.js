const { Livro } = require('../models')

const LivrosController = {
    mostrarTodosOsLivros: async (req, res) => {
        try {
            const livros = await Livro.findAll();
            return res.status(200).json(livros);
        } catch(error){
            console.log(error);
            return res.status(500).json({error});
        }
    },

    mostrarLivro: async (req, res) => {
        try {
            const { id } = req.params;
            const livros = await Livro.findByPk(id);

            if(!livros){
                throw new Error;
            }

            return res.status(200).json(livros)
        } catch(error){
            console.log(error);
            const message = "Não encontrei"
            if(error){
                console.log(message);
            }
            return res.status(404).json({error, message});
        }
    },

    criar: async (req, res) => {
        try {
            const { titulo, total_paginas, autor, ano_lancamento, estoque } = req.body;

            const novoLivro = await Livro.create({
                titulo,
                total_paginas,
                autor,
                ano_lancamento,
                estoque
            });

            return res.status(201).json(novoLivro);
        } catch(error){
            console.log(error);
            return res.status(500).json(error);
        }
    }


};

module.exports = LivrosController;