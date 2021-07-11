const express = require("express")
const router = express.Router()

router.get("/", (request,response) => {
    response.status(200).send(
        {
            "titulo": "Contatos-API-REPROGRAMA",
            "version": "1.0.0",
            "mensagem": "Bem vinde a sua API de contatos!"
        }
    )
})

module.exports = router
