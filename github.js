class Github {
    constructor() {
        this.client_id = '';
        this.client_secret = '';
        this.repos_count = 2;
        this.repos_sort = 'created: asc';
    }
    async getUserProfile() {
        const profileResponse = await fetch(`https://api.github.com/users/manojitanjan?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/manojitanjan/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);


        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        return {
            profile: profileData,
            repos: reposData
        }
    }
}