module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Livro",
        {
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
              titulo: {
                type: DataTypes.STRING(200),
                allowNull: false
              },
              total_paginas: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              autor: {
                type: DataTypes.STRING,
                allowNull: false
              },
              ano_lancamento: {
                type: DataTypes.STRING(50),
                allowNull: false
              },
              estoque: {
                type: DataTypes.INTEGER,
                allowNull: false,
              }

        },
        {
            tablename: "livros"
        }
    )

}