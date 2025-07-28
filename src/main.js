import './Style.css';
import useApplyData from './UserInfo';
import renderPosts from './Posts';

async function GetData() {
    try {
        const res = await fetch('/Users.json');
        const users = await res.json();
        const post_container = document.querySelectorAll('post-container');

        const user = users[0];
        let content = user.posts.content;
        const high = user.highlights;

        useApplyData(user, high);
        renderPosts(user, content);

        function setActive(el) {
            icon_container.forEach(btn => btn.classList.remove('active'));
            el.classList.add('active');
        }
        grid.classList.add('active');

        icon_container.forEach(el => {
            el.classList.remove('active');

            el.addEventListener('click', () => {
                const filter = el.dataset.content;
                setActive(el);
                localStorage.setItem('content', filter);

                if (filter === 'video') {
                    icon_container.forEach(button => {
                        button.style.background = 'transparent';
                    });

                    el.classList.add('active');

                    content = user.posts.content.filter(post => post.isVideo === true);
                    renderPosts(user, content);
                } else if (filter === 'all') {
                    icon_container.forEach(button => {
                        button.style.background = 'transparent';
                    });
                    el.classList.add('active');

                    content = user.posts.content;

                    renderPosts(user, content);
                } else if (filter === 'photos') {
                    icon_container.forEach(button => {
                        button.style.background = 'transparent';
                    });
                    el.classList.add('active');


                    postsContainer.innerHTML = `
                        <div class="tagged">
                            ${user.tagged.icon}
                            <h2>${user.tagged.title}</h2>
                            <p>${user.tagged.text}</p>
                        </div>`;
                    return;
                }

                renderPosts(user, content);
            });
        });

        const savedFilter = localStorage.getItem('content');
        if (savedFilter) {
            const matchingButton = Array.from(icon_container).find(btn => btn.dataset.content === savedFilter);
            if (matchingButton) matchingButton.click();
        }

    } catch (error) {
        console.error(error);
    }
}


GetData();