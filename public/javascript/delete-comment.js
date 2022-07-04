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
}

document.querySelector('.delete-comment-btn').addEventListener('click', deleteFormHandler);
