const express = require ("express")
const routes = express.Router()


dados = [   {"id": 1,"descricao": "Camiseta","preco": 29.99,"cores": ["preto", "branco", "cinza"]},
            {"id": 2,"descricao": "Calça Jeans","preco": 79.99,"cores": ["azul claro", "azul escuro"]},
            {"id": 3,"descricao": "Tênis Esportivo","preco": 149.99,"cores": ["preto", "branco", "cinza", "azul"]},
            {"id": 4,"descricao": "Jaqueta de Couro","preco": 99.99,"cores": ["preto", "marrom"]}
        ]
   


routes.get("/",(req,res)=>{
    res.status(200).json(dados)
})
routes.get("/:id",(req,res)=>{
    res.status(200).json(dados[req.params.id])

routes.post("/",(req,res)=>{
    const novaPessoa = req.body
    novaPessoa.id = indice + 1
    dados.push(novaPessoa)
    res.status(200)
})

})
routes.delete("/:id",(req,res)=>{
    dados.splice(req.params.id-1,1)
    res.status(200).redirect("/")
})



module.exports = routes