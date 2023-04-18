// var contatos =[
//     { id: 1, nome: 'Adeliton', numero: 99999 },
//     { id: 2, nome: 'João', numero: 88888 },
//     { id: 3, nome: 'Maria', numero: 77777 },
// ]

const { contatos } = require("../models/")

class ContatosController{
    static async index (req, res){
        const list = await contatos.findAll()
      
        res.json(list)
    }

    static  async salvarNovo (req, res){
        const {nome, numero} = req.body
        const contato = await contatos.create({
            nome:nome,
            numero:numero
        })

        res.json(contato)
        
    }
    static async excluir (req, res){
        const {id} = req.params
        const contato = await contatos.findByPk(id)
        contato.destroy()
        /*await contatos.destroy({
            where: {
              id: id
            }
          });*/
        res.json(true)
       // res.redirect('/')
    }

    static async salvarEditar(req, res) {
        const { id } = req.params
        const { nome, numero } = req.body

        const contato = await contatos.findByPk(id)
        contato.update({
            nome:nome,
            numero:numero
        })

 
        res.json(contato)

        //res.redirect('/')
    }

}
module.exports = ContatosController