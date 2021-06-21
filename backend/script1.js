class Produto {


    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {

            if (this.editId == null) {
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto);
                //alert('Produto atualizado')
            }

        }

        this.listaTabela();
        this.cancelar();
        //console.log(produto);

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_quant = tr.insertCell();
            let td_date = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_quant.innerText = this.arrayProdutos[i].quantidade;
            td_date.innerText = this.arrayProdutos[i].date;

            td_id.classList.add('center');
            //ações de editar e excluir
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.svg';
            imgEdit.setAttribute("onclick", "produto.preparaEdicao(" + JSON.stringify(this.arrayProdutos[i]) + ")");


            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit); // <td><img></td>
            td_acoes.appendChild(imgDelete); // <td><img></td>

        }
    }

    adicionar(produto) {
        produto.quantidade = parseFloat(produto.quantidade);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].quantidade = produto.quantidade;
                this.arrayProdutos[i].date = produto.date;
            }
        }
    }

    preparaEdicao(dados) {
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('quantidade').value = dados.quantidade;
        document.getElementById('date').value = dados.date;

        document.getElementById('btn1').innerText = 'Atualizar'
    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value;
        produto.quantidade = document.getElementById('quantidade').value;
        produto.date = document.getElementById('date').value;


        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += '- informe o nome do produto \n';
        }

        if (produto.quantidade == '') {
            msg += '- informe a quantidade de produtos \n';
        }

        if (produto.date == '') {
            msg += '- informe a data de validade \n'
        }

        const now = new Date(); // Data de hoje
        const past = new Date(produto.date); // Outra data no passado
        const diff = Math.abs(past.getTime() - now.getTime()); // Subtrai uma data pela outra
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

        if (days <= 7) {
            console.log('Produto proximo do vencimento');

        }

        if (msg != '') {
            alert(msg);
            return false
        }

        //tratamento de data

        return true;
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('date').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;

        //console.log(this.arrayProdutos);
    }

    deletar(id) {
        if (confirm('Deseja mesmo deletar o produto do ID ' + id +"?")) {

            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
            //console.log(this.arrayProdutos);
        }
    }
}

var produto = new Produto();

