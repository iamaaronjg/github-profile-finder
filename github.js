class Github {
    constructor() {
        // Client ID
        this.client_id = '56cf7df350645b1da521';
        // Secret Oauth key from GitHub
        this.client_secret = '03eb1946f255412c3af591e808da0b08a790a116';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}