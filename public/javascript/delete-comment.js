const deleteBtn = document.querySelector('.delete-comment-btn');
const comment = document.querySelector('.comment');

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = document.getElementById('comment-id').textContent;
    const response = await fetch(`http://localhost:3001/api/comments/${id}`, {
      method: 'DELETE'
    });
 
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
console.log(deleteBtn.closest("div").value);
  

}

deleteBtn.addEventListener('click', deleteFormHandler);
