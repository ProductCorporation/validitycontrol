const modalWrapper = document.querySelector('.modal-wrapper');
// modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');

// modal edit
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.querySelector('.edit-modal .form');

const btnAdd = document.querySelector('.btn-add');

const tableProdutos = document.querySelector('.table-produtos');

let id;

// Criar elemento e renderizar
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().nomeProduto}</td>
      <td>${doc.data().categoriaProduto}</td>
      <td>${doc.data().quantProduto}</td>
      <td>${doc.data().dataProduto}</td>
      <td>
        <button class="btn btn-edit">Editar</button>
        <button class="btn btn-delete">Deletar</button>
      </td>
    </tr>
  `;
  tableProdutos.insertAdjacentHTML('beforeend', tr);

  // Click para editar produto
  const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
  btnEdit.addEventListener('click', () => {
    editModal.classList.add('modal-show');

    id = doc.id;
    editModalForm.nomeProduto.value = doc.data().nomeProduto;
    editModalForm.categoriaProduto.value = doc.data().categoriaProduto;
    editModalForm.quantProduto.value = doc.data().quantProduto;
    editModalForm.dataProduto.value = doc.data().dataProduto;

  });

  // Click para deletar produto
  const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
  btnDelete.addEventListener('click', () => {
    db.collection('produtos').doc(`${doc.id}`).delete().then(() => {
      console.log('Produto deletado com sucesso !');
    }).catch(err => {
      console.log('Erro ao remover o produto', err);
    });
  });

}

// Click para adicionar produto
btnAdd.addEventListener('click', () => {
  addModal.classList.add('modal-show');

  addModalForm.nomeProduto.value = '';
  addModalForm.categoriaProduto.value = '';
  addModalForm.quantProduto.value = '';
  addModalForm.dataProduto.value = '';
});

// O usuário clica em qualquer parte fora do modal
window.addEventListener('click', e => {
  if(e.target === addModal) {
    addModal.classList.remove('modal-show');
  }
  if(e.target === editModal) {
    editModal.classList.remove('modal-show');
  }
});



// Listas em tempo real
db.collection('produtos').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableProdutos.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableProdutos.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})

// Enviar no modal
addModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('produtos').add({
    nomeProduto: addModalForm.nomeProduto.value,
    categoriaProduto: addModalForm.categoriaProduto.value,
    quantProduto: addModalForm.quantProduto.value,
    dataProduto: addModalForm.dataProduto.value,
  });
  modalWrapper.classList.remove('modal-show');
});

// Enviar no modal de edição
editModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('produtos').doc(id).update({
    nomeProduto: editModalForm.nomeProduto.value,
    categoriaProduto: editModalForm.categoriaProduto.value,
    quantProduto: editModalForm.quantProduto.value,
    dataProduto: editModalForm.dataProduto.value,
  });
  editModal.classList.remove('modal-show');
  
});
