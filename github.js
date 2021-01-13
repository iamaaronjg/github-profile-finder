class Github {
    constructor() {
        // Client ID
        this.client_id = '56cf7df350645b1da521';
        // Secret Oauth key from GitHub
        //this.client_secret = '5b161d86fb0d6f009c711521f813e9ad28ca27f1'; <-- this is the old Oauth token
        this.client_secret = '53fd2f2d599d2a173fbbe25c2d3da9071aaa2195'; // Personal Access Token
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}