// INIT GITHUB
const github = new Github;

// init ui class
const ui = new UI;

document.addEventListener('DOMContentLoaded', () => {
    // Make HTTP call
    github.getUserProfile()
        .then(data => {
            ui.displayProfile(data.profile);
            ui.displayRepos(data.repos);
        })
});