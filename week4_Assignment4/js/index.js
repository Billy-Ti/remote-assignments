console.log('Assignment 4: HTML DOM and AJAX (Advanced Optional)');
// 獲取相關 DOM 及按鈕
const reposList = document.querySelector('#repos-list');
const loadMoreButton = document.querySelector('#load-more');

// 設定當前頁面狀態
let currentPage = 1;
function fetchGitHubRepos(page) {
    const perPage = 5;
    const url = `https://api.github.com/orgs/facebook/repos?per_page=${perPage}&page=${page}`;

    // 發送請求
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                // div 放區域 variable
                const repoInfo = document.createElement('div');
                repoInfo.innerHTML = `
                            <div class="div">   
                                <h3>${repo.name}</h3>
                                <p class="public">${repo.private ? 'Private' : 'Public'}</p>
                                <p>Description : ${repo.description || 'N/A'}</p>
                                <p>Topics : ${repo.topics.join(', ') || 'N/A'}</p>
                            </div>
                        `;
                reposList.appendChild(repoInfo);
            });
        })
        // 錯誤顯示
        .catch(error => {
            console.error('Error:', error);
        });
}
// 當點擊後，當前頁數遞增
function loadMore() {
    currentPage++;
    fetchGitHubRepos(currentPage);
}
loadMoreButton.addEventListener('click', loadMore);
// 第一頁把它先初始 init
fetchGitHubRepos(currentPage);