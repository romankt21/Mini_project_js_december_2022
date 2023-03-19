let userDetails = document.getElementsByClassName('userDetails')[0];

let url = new URL(location.href);
let jsonUser = url.searchParams.get('data');
let user = JSON.parse(jsonUser);


function userDetailsFoo (user) {
 for (const userDet in user) {
  if (typeof user[userDet] !== 'object') {
   let divUserDetails = document.createElement('div');
   divUserDetails.innerText = `${userDet}: ${user[userDet]}`
   divUserDetails.classList.add('divUserDetails')
   userDetails.appendChild(divUserDetails);

  } else if (typeof user[userDet] === 'object') {
   let p = document.createElement('div')
   userDetails.appendChild(p);
   p.innerText = '----------'

   let divUserDetailsOb = document.createElement('div');
   divUserDetailsOb.innerText = `${userDet}: `
   userDetails.appendChild(divUserDetailsOb);

   userDetailsFoo(user[userDet]);
  }

 }
}

userDetailsFoo(user)

let buttonPosts = document.createElement('button');
buttonPosts.innerText = 'posts';
buttonPosts.classList.add('buttonPosts');
userDetails.appendChild(buttonPosts);


let postContain = document.createElement('div')
postContain.classList.add('postContain');
document.body.appendChild(postContain);


buttonPosts.onclick = (e) => {
 e.preventDefault()

 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
     .then((response) => response.json())
     .then(posts => {
      for (let post of posts) {
       let postDiv = document.createElement('div');
       postDiv.classList.add('postDiv');
       postDiv.innerText = `${post.id} -- ${post.title}`
       postContain.appendChild(postDiv);

       let buttonPost = document.createElement('button');
       buttonPost.innerText = 'post-details';
       buttonPost.classList.add('buttonPost');
       postDiv.appendChild(buttonPost);

       buttonPost.onclick = function () {
        location.href = `../post-details/post-details.html?data=${JSON.stringify(post)}`;
       }

      }

     });


}






