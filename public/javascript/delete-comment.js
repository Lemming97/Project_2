// const postID = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

const deleteBtns = document.querySelectorAll('.delete-comment-btn');

const comment = document.querySelector('.comment');

deleteBtns.forEach(deleteBtn => {


  const commentID = deleteBtn.getAttribute('data-id');

  deleteBtn.addEventListener('click', async (event) => {
    event.preventDefault();


    console.log(commentID)
    const response = await fetch(`/api/comments/${commentID}`, {
      method: 'DELETE'
    });

    if (response.ok) {

      document.location.reload();
    } else {
      alert(response.statusText);
    }

  });
});