# API - POST e DELETE :computer: :rocket: 

Essa API é para você que quer gerenciar seus contatinhos :wink:! Além do verbo GET, serão utilizados os verbos POST e DELETE  pra gente poder adicionar aquele contatinho ou excluir.Para visualizar as informações , cadastrar novos contatos e deletar  foram criados os endpoints de acordo com a demanda de negócio.  A construção dessa tarefa foi feita utilizando a Arquitetura MVC.

Mas afinal, o que faz essa Arquitetura MVC ? 

MVC é um padrão de arquitetura de software, separando sua aplicação em 3 camadas. A camada de interação do usuário (view), a camada de manipulação do dados (models), e a camada de controle (controllers). O Postman foi o responsável por simular a interação do usuário para cadastrar ou excluir dados. Em resumo, o MVC é uma maneira de organizar o código, deixar cada pasta com uma responsabilidade determinada.

![thinking](https://media1.tenor.com/images/f00815c2e7b2e39cdf28ac0b2e1d516b/tenor.gif?itemid=10617231)

Com as pastas e arquivos devidamente criados, foram instaladas as dependências para a nossa API funcionar direitinho :smile:.  As dependências foram : o nodemon , que irá monitorar todas as alterações realizadas no projeto e reiniciar o servidor automaticamente, e o express.

##### Demandas de negócio:

| Visualizar                              | Verbo  | Endpoint             |
| --------------------------------------- | ------ | -------------------- |
| Boas vindas                             | GET    | "/"                  |
| Todos os contatinhos :heart:            | GET    | "/contatos"          |
| Contatinhos por nome :heart_eyes:       | GET    | "contatos/nome"      |
| Contatinhos por ID :woman_technologist: | GET    | "contatos/:id"       |
| Inserir contatinho :heartbeat:          | POST   | "contatos/cadastrar" |
| Deletar contatinho :broken_heart:       | DELETE | "contatos/id:"       |

Agora que você já sabe como gerenciar a API de contatinhos, bora encher essa agenda! Eu já cadastrei todos os meus contatinhos (né The Weeknd, Jason Momoa, rs).

![wink](https://media1.tenor.com/images/efaf9eeb3f36fd20824f0403ab571942/tenor.gif?itemid=12715831)













