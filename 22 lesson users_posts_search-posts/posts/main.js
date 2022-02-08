import { posts } from './posts.js';
const userId = location.search ? location.search.replace('?userID=', '') : null;
document.title = userId || 'All posts';

// function for All posts
if (!userId) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.top = "5px";
    document.body.appendChild(input);
    document.body.style.paddingTop = '20px';

    input.addEventListener('change', (elem) => {
        document.querySelector('#post-list').innerHTML = ''; //clear from All posts
        const _posts = posts.filter((post) => {
            return post.body.includes(elem.target.value)
        })
        showPosts(_posts)
    })
}

//function for one users`s  all posts
showPosts(posts)
function showPosts(posts) {
    if (userId) {
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            if (post.userId === +userId) {
                const postTitle = document.createElement('h3');
                postTitle.innerText = post.title;

                const postBody = document.createElement('p');
                postBody.innerText = post.body;

                const postContainer = document.createElement('div');
                postContainer.appendChild(postTitle)
                postContainer.appendChild(postBody)

                document.querySelector('#post-list').appendChild(postContainer)
            }
        }
    } else {
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            const postTitle = document.createElement('h3');
            postTitle.innerText = post.title;

            const postBody = document.createElement('p');
            postBody.innerText = post.body;

            const postContainer = document.createElement('div');
            postContainer.appendChild(postTitle)
            postContainer.appendChild(postBody)

            document.querySelector('#post-list').appendChild(postContainer)

        }
    }
}