async function editFormHandler(event) {
  event.preventDefault();


  const text = document.querySelector('.comment-body').textContent.trim();
  const parent = document.querySelector('.comment-body');

console.log(text);
    const textInput = document.createElement("TEXTAREA");
    textInput.value = text;

   parent.appendChild(textInput);
 

    

console.log("button was clicked");



  // const title = document.querySelector('input[name="comment-body"]').value.trim();
  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  // const response = await fetch(`'http://localhost:3001/api/comments/${id}`, {
  //   method: 'PUT',
  //   body: JSON.stringify({
  //     title
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // if (response.ok) {
  //   document.location.replace('/posts/');
  // } else {
  //   alert(response.statusText);
  // }
}

document.querySelector('.edit-comment-btn').addEventListener('click', editFormHandler);
