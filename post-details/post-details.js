let postContain = document.getElementsByClassName('post') [0];

let url = new URL(location.href);

let jsonPost = url.searchParams.get('data');
let post = JSON.parse(jsonPost);

function postDetailsFoo (post) {
    for (const postDet in post) {

            let divPostDetails = document.createElement('div');
            divPostDetails.innerText = `${postDet}: ${post[postDet]}`
            divPostDetails.classList.add('divPostDetails')
            postContain.appendChild(divPostDetails);
    }
}

postDetailsFoo(post);

let commentsContain = document.createElement('div');
commentsContain.classList.add('commentsContain');
document.body.appendChild(commentsContain);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)

    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {
            let commentDet = document.createElement('div');
            commentDet.innerText = `postId: ${comment.postId} - id: ${comment.id} - name: ${comment.name} - email: ${comment.email} - body: ${comment.body}`;
            commentDet.classList.add('commentDet')
            commentsContain.appendChild(commentDet);
        }
    })


