const contatosJson = require("../models/contatos.json")

const getAll = (request,response) => {
    response.status(200).send(contatosJson)
}

const getByName = (request,response) => {
    const requeredName = request.query.nome.toLowerCase()
    const filteredName = contatosJson.find(nomes => nomes.nome.toLowerCase().includes(requeredName))

    if(requeredName === "" || filteredName === undefined) {
        response.status(404).send(
            {
                "message": "O nome que você digitou não existe."
            }
        )
    }else{
        response.status(200).send(filteredName)
    }

    
}

const getById = (request,response) => {
    const requeredId = request.params.id
    const filteredContact = contatosJson.find(contato => contato.id == requeredId)

    response.status(200).send(filteredContact)
}

const createContact = (request,response) => {

    const nameContactRequered = request.body.nome
    const celContactRequered = request.body.celular
    const idRequered = request.body.id
    const socialMediaRequered = request.body.redesSociais 

    const newContact = {
        "id": idRequered,
        "nome": nameContactRequered,
        "celular": celContactRequered,
        "redesSociais": socialMediaRequered
    }
    contatosJson.push(newContact)
    response.status(200).send(newContact)
}

const deleteContact = (request,response) => {
    const idRequered = request.params.id
    const contactFiltered = contatosJson.find(contact => contact.id == idRequered)

    const indice = contatosJson.indexOf(contactFiltered)
    contatosJson.splice(indice,1)

    response.status(200).send(
       [
           {
               "message": "Contato deletado com sucesso =)"
           },
           contatosJson
       ]
         
    )

}




module.exports = {getAll, getById, getByName, createContact, deleteContact}