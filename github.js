class GitHub {
    constructor() {
        this.client_id = 'e63f4efda7f84b518db1';
        this.secret = '64f1af326c37a243b15b915a49f22bc61848214a';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}