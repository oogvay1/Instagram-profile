export default function useApplyData(user, high) {
    posts_name.textContent = user.posts.postsNum;
    followrs.textContent = user.subscriptions.subscribers;
    following.textContent = user.subscriptions.subscribes;
    user_name.textContent = user.names.name;
    nikname.textContent = user.names.nikname;

    for (const value of high) {

        const highlight_container = document.createElement('div');

        highlights.appendChild(highlight_container);
        highlight_container.classList = 'highlight-container'

        highlight_container.innerHTML = `
        <div class="highlight-container">
            <div class="highlight-img-container">
                <img class="highlight-img" src=${value.src}>
            </div>
            <h2>${value.name}</h2>
        </div>`
    }
    highlights.appendChild(addHighlight);
}