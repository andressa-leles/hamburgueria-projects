# hamburgueria-projects

# <h1>CodeClub- First project Node</h1>

🚀 Sobre o desafio:


Criar uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar Node e Express.

Rotas
POST /order: A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".

GET /order: Rota que lista todos os pedidos já feitos.

PUT /order/:id: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do pedido deve ser enviado nos parâmetros da rota.

DELETE /order/:id: Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.

GET /order/:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.

PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/97634107/161124227-ceea8fb4-5519-40e9-8089-54ed69c8b392.gif)

Neste projeto foram utilizadas as seguintes ferramentas:

- [Nodejs](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction/)  
- [Insomnia](https://insomnia.rest/)  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
## 🤝 Collaborators

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/97634107?s=400&u=3e62533020dcbde3eb6a5b33b909670337e2b2d3&v=4" width="140px;" alt="Foto do Andressa Leles no GitHub"/><br>
        <sub>
          <b>Andressa Leles</b>
        </sub>
      </a>
    </td>
    
  </tr>
</table>

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Back to top</a>
