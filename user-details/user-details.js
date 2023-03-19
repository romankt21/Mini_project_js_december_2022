let userDetails = document.getElementsByClassName('userDetails')[0];

let url = new URL(location.href);
let jsonUser = url.searchParams.get('data');
let user = JSON.parse(jsonUser);
console.log(jsonUser);
console.log(user);

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
buttonPosts.innerText = 'post-details';
buttonPosts.classList.add('buttonPosts');
userDetails.appendChild(buttonPosts);

buttonPosts.onclick = (e) => {
 e.preventDefault()

}
 







let p = document.createElement('div')
document.body.appendChild(p);
p.innerText = '----------'

let div = document.createElement('div');
document.body.appendChild(div);
div.innerText =`${jsonUser}`
