let url = new URL(location.href);
let jsonUser = url.searchParams.get('data');
let user = JSON.parse(jsonUser);
console.log(jsonUser);
console.log(user);

function userDetails (user) {
 for (const userDet in user) {
  if (typeof user[userDet] !== 'object') {
   let divUserDetails = document.createElement('div');
   divUserDetails.innerText = `${userDet}: ${user[userDet]}`
   divUserDetails.classList.add('divUserDetails')
   document.body.appendChild(divUserDetails);

  } else if (typeof user[userDet] === 'object') {


   userDetails(user[userDet]);
  }

 }
  }
 

userDetails(user)





let p = document.createElement('div')
document.body.appendChild(p);
p.innerText = '----------'

let div = document.createElement('div');
document.body.appendChild(div);
div.innerText =`${jsonUser}`
