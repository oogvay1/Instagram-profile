const posts_name = document.getElementById('posts');
const followrs = document.getElementById('followers');
const following = document.getElementById('following');
const user_name = document.getElementById('name');
const nikname = document.getElementById('nikname');
const highlights = document.getElementById('highlights');
const addHighlight = document.createElement('div');
const postsContainer = document.getElementById('postsContainer');
const grid = document.getElementById('grid');
const icon_container = document.querySelectorAll('.icon-container');
addHighlight.classList = 'highlight-add-container'
addHighlight.innerHTML = `
        <div class="highlight-add-img-container">
            <i class="ri-add-large-line"></i>
        </div>
        <h2>New</h2>`