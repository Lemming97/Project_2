const deleteBtn = document.querySelector('.delete-comment-btn');
const comment = document.querySelector('#comment');

async function deleteFormHandler(event) {
  event.preventDefault();
  
  console.log("testing delete button");
  console.log(req.session.id);
  
  const id = document.getElementById('comment-id').textContent;
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });
 
    if (response.ok) {
     deleteBtn.parentElement.remove();
      //document.location.reload();
    } else {
      alert(response.statusText);
    }

}

deleteBtn.addEventListener('click', deleteFormHandler);
