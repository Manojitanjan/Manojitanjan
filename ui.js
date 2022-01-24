class UI {
    constructor() {
        this.profile = document.getElementById('github-profile')
    }
    displayProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body shadow">
                <div class="row">
                    <div class="col-3">
                        <img class="img-fluid mb-1" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-outline-primary btn-block">Profile</a>
                    </div>
                    <div class="col-9">
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company:${user.company}</li>
                            <li class="list-group-item">Website:${user.blog}</li>
                            <li class="list-group-item">Member Since:${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-1">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    displayRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body shadow">
                <div class= "row">
                    <div class= "col-6">
                        <a href="${repo.html_url}" target= "_blank">${repo.name}</a>
                    </div>
                    <div class= "col-6">
                        <span class="badge bg-primary">Stars:${repo.stargazers_count}</span>
                        <span class="badge bg-secondary">Watchers:${repo.watchers_count}</span>
                        <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
            document.getElementById('github-repos').innerHTML = output;
        });
    }
}