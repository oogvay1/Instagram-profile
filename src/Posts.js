export default function renderPosts(user, content) {
    postsContainer.innerHTML = '';
    for (const post of content) {
        const post_container = document.createElement('div');
        post_container.classList = 'post-container';

        let img = new Image();
        img.src = post.src;

        post_container.innerHTML = `
            <img class="post_img" src="https://placehold.co/800@3x.png">`

        const views = `
            <div class="post-views">
                <img class="post-views-img" src="../public/video.png">
            </div>`;

        img.onload = () => {
            if (content == user.posts.content) {
                post_container.innerHTML = `
                        <img class="post_img" src=${img.src}>
                        ${post.isVideo ? views : ''}
                        <div class="post-img-likes">
                            <p><i class="ri-heart-fill"></i> ${post.likes}</p>
                            <p><i class="ri-chat-3-fill"></i> ${post.comments}</p>
                        </div>`
            } else if (content === '') {
                
            } else {
                post_container.innerHTML = `
                <img class="post_img2" src=${img.src}>
                <div class="post_video_views"><i class="ri-eye-line"></i>${post.views}</div>
                <div class="post-img-likes">
                    <p><i class="ri-heart-fill"></i> ${post.likes}</p>
                    <p><i class="ri-chat-3-fill"></i> ${post.comments}</p>
                </div>`
            }
        };

        const post_img = document.querySelectorAll('.post_img');
        console.log(post_img);
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.appendChild(post_container);
    }
}