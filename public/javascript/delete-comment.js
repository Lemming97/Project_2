const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
const deleteBtn = document.querySelector(`#deletecommentbtn${id}`);
const comment = document.querySelector('#comment');

async function deleteFormHandler(event) {
  event.preventDefault();
  
  
  
  
  console.log(id)
    const response = await fetch(`api/post/${id}`, {
      method: 'DELETE'
    });
 
    if (response.ok) {
 
      document.location.reload();
    } else {
      alert(response.statusText);
    }

}

deleteBtn.addEventListener('click', deleteFormHandler);
