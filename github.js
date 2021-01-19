class Github {
    constructor() {
        // Client ID
        this.client_id = '56cf7df350645b1da521';
        this.client_secret = '53fd2f2d599d2a173fbbe25c2d3da9071aaa2195'; // Personal Access Token
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // Fetch user profiles
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        // Fetch user repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}