# VALIDITYCONTROL
Projeto integrador/tcc

### 1. APRESENTAÇÃO
Este é um projeto de apoio didático composto por um conjunto de atividades práticas relacionadas a temas das disciplinas de engenharia de software, tais como: análise e programação orientada a objetos, padrões de projeto, modelagem visual com UML e algumas práticas ágeis (como refactoring e testes unitários);

A ideia é otimizar o tempo dos funcionários que são responsáveis por cada setor, irá ter o login senha. exemplo: um funcionário irá ter responsabilidade do setor para conferir o prazo de validade das bebidas e temperatura da geladeira no qual irá medir temperatura de manhã de tarde.

Teremos ter um pessoa responsável em cada setor com esse aplicativo, onde adicionaríamos líder que irá poder fazer todos os monitoramento e o controle de preço.

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

![Modelo Relacional](https://prnt.sc/11pysj1)

#### 2.2 - FUNCIONAL 
- [x] Cadastro de Funcionários (CRUD completo); 
- [ ] Inclusão de Produtos e Remoção de Produtos (IMC);
- [ ] Bloquear e desbloquear Funcionário; 
- [ ] Envio de notificação em caso do produto estiver próximo a validade; 
- [ ] Envio de notificação onde receberá o controle os pedidos do seasa; 
- [ ] Fazer a leitura do código de barras;
- [ ] Controle de saída de produtos preciso;
- [ ] Precificação automática dos produtos;
- [ ] Consultar ao estoque;
- [ ] Verificar a disponibilidade de um produto;

#### 2.3 - NÃO FUNCIONAL 
- [ ] Na inclusão de um novo produto será necessário informar obrigatoriamente a **nome, data de validade**.
- [ ] Antes de ser removido do sistema, um produto deve estar vendido. Um produto removido não pode mais ser reintegrado ao sistema.
- [ ] Informar detalhes do produto **fornecedor**.
- [ ] Sistema de cargo exemplo **gerente, funcionário**.
- [ ] Produtos adicionados podem ser editados apenas com a permissão do gerente.

#### 2.4 - TÉCNICA 

### 3. OUTRAS INFORMAÇÕES

#### 3.1 - Projeto de software 

#### 3.2 - Referências Úteis 
