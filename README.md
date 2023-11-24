Repositório de estudos em: DDD no Node.js e NestJS

## Introdução
## Sobre a api-rest

Desenvolvi uma API para controle de encomendas de uma transportadora fictícia, a FastFeet.

### Regras da aplicação

- [x] A aplicação deve ter dois tipos de usuário, entregador e/ou admin </br>
- [x] Deve ser possível realizar login com CPF e Senha </br>
- [x] Deve ser possível realizar o CRUD dos entregadores </br>
- [x] Deve ser possível realizar o CRUD das encomendas </br>
- [x] Deve ser possível realizar o CRUD dos destinatários </br>
- [x] Deve ser possível marcar uma encomenda como aguardando (Disponível para retirada) ---> ""Package"" </br>
- [x] Deve ser possível retirar uma encomenda </br>
- [x] Deve ser possível marcar uma encomenda como entregue </br>
- [x] Deve ser possível marcar uma encomenda como devolvida </br>
- [x] Deve ser possível listar as encomendas com endereços de entrega próximo ao local do entregador </br>
- [x] Deve ser possível alterar a senha de um usuário </br>
- [x] Deve ser possível listar as entregas de um usuário </br>
- [x] Deve ser possível notificar o destinatário a cada alteração no status da encomenda </br>

### Regras de negócio

- [x] Somente usuário do tipo admin pode realizar operações de CRUD nas encomendas </br>
- [x] Somente usuário do tipo admin pode realizar operações de CRUD dos entregadores </br>
- [x] Somente usuário do tipo admin pode realizar operações de CRUD dos destinatários </br>
- [x] Para marcar uma encomenda como entregue é obrigatório o envio de uma foto </br>
- [x] Somente o entregador que retirou a encomenda pode marcar ela como entregue </br>
- [x] Somente o admin pode alterar a senha de um usuário </br>
- [x] Não deve ser possível um entregador listar as encomendas de outro entregador </br>

### Conceitos postos em prática

- DDD, Domain Events, Clean Architecture </br>
- Autenticação e Autorização (RBAC) </br>
- Testes unitários e e2e </br>
- Integração com serviços externos </br>
