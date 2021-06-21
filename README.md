# VALIDITYCONTROL
Projeto integrador/tcc

### 1. APRESENTAÇÃO
Este é um projeto de apoio didático composto por um conjunto de atividades práticas relacionadas a temas das disciplinas de engenharia de software, tais como: análise e programação orientada a objetos, padrões de projeto, modelagem visual com UML e algumas práticas ágeis (como refactoring e testes unitários);

A ideia é otimizar o tempo dos funcionários que são responsáveis por cada setor. exemplo: um funcionário irá ter responsabilidade do setor para conferir o prazo de validade das bebidas e temperatura da geladeira no qual irá medir temperatura de manhã de tarde.

Teremos uma pessoa responsável em cada setor com esse aplicativo, onde adicionaríamos líder que irá poder fazer todos os monitoramento e o controle de preço.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/LOGO.png?raw=true" width="400">


### 2. EQUIPE
|Nome|Papel|Gituser|
|--|--|--|
|Matheus João|produto|/sirjaao|
|Ricardo Kunzendorff|dev|/Richardera|
|Roger Vieira|dev|/iReverenty|
|Wellington Damascena|produto|/WellingtonAbreu2020|

### 2. ESPECIFICAÇÃO 
#### 2.1 - ATORES 
- Gerente
- Funcionário


#### 2.2 - FUNCIONAL 
- [x] Inclusão de Produtos e Remoção de Produtos (IMC);
- [ ] Bloquear e desbloquear Funcionário; 
- [ ] Envio de notificação em caso do produto estiver próximo a validade; 
- [ ] Envio de notificação onde receberá o controle os pedidos do seasa; 
- [ ] Fazer a leitura do código de barras;
- [ ] Controle de saída de produtos preciso;
- [x] Consultar ao estoque;
- [ ] Verificar a disponibilidade de um produto;

<hr>

#### Caso de uso.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/Diagrama.png" width="650">

<hr>

#### 2.3 - NÃO FUNCIONAL 
- [x] Na inclusão de um novo produto será necessário informar obrigatoriamente a **nome, data de validade**.
- [ ] Antes de ser removido do sistema, um produto deve estar vendido. Um produto removido não pode mais ser reintegrado ao sistema.
- [ ] Informar detalhes do produto **fornecedor**.
- [ ] Sistema de cargo exemplo **gerente, funcionário**.
- [ ] Produtos adicionados podem ser editados apenas com a permissão do gerente.

<hr>

#### Abaixo o diagrama de classe de negocio.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/Diagrama%20classe%20de%20negocio.png" width="800">


<hr>


#### Abaixo o diagrama do banco de dados, apresentações no modelo concentual e lógico.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/Conceitual_1.png" width="1200">

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/L%C3%B3gico_1.png" width="1200">


<hr>


### RESULTADOS 

## Abaixo uma sequência de imagens que mostram o protótipo desenvolvido.

- Na primeira imagem é a tela inicial de "login" tem apenas um botão de entrar por enquanto.
- Na segunda imagem é exclusiva para os funcionários responsáveis, incluindo uma navbar em cima para poder sair, e dois botões, um para adicionar produto e outro para ver os arquivos.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/prints/tela%20entrar.jpg" width="400">  <img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/prints/tela%20inicial.jpg" width="400">

- Tela de adicionar produtos onde pode adicionar nome, quantidade, categoria e vencimento.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/prints/tela%20adicionar%20produtos.jpg" width="400">

- E por fim a tela de adicionar produto com a base de dados, com as informações armazenadas.

<img src="https://github.com/ProductCorporation/validitycontrol/blob/master/img/prints/tela%20produto%20adicionado.jpg" width="400">




### 3. OUTRAS INFORMAÇÕES

#### 3.1 - Referências 
https://www.figma.com/proto/YVTM6GmqxzjqQPl809qXnR/Validity-control?node-id=137%3A59&scaling=scale-down&page-id=0%3A1
