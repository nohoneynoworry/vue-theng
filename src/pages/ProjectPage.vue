<template>
    <p>HelloWorld {{ $route.params.name }}</p>
    <div>
        {{ project.name }}
    </div>
</template>
<script>
import axios from 'axios';
export default {
    async mounted() {
        // catch params
        try {
            const name = this.$route.params.name;
            const response = await axios.get('https://api.github.com/repos/KimangKhenng/' + name, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                }
            })
            this.project = response.data;
        } catch (error) {
            console.error('Error fetching project:', error);
            this.project = {};
        }

    },
    data() {
        return {
            project: {}
        }
    }
}
</script>