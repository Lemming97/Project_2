const deleteBtn = document.querySelector('.delete-comment-btn');
const comment = document.querySelector('#comment');

async function deleteFormHandler(event) {
  console.log("testing delete button");
  event.preventDefault();
console.log(Comment.user_id);
  const id = document.getElementById('comment-id').textContent;
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });
 
    if (response.ok) {
     deleteBtn.parentElement.remove();
      document.location.reload();
      // document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }

}

//deleteBtn.addEventListener('click', deleteFormHandler);
