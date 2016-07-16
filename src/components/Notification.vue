<script>
    export default {
        template: `
            <div class="Notification">
                <h1>{{ message }}</h1>
            </div>
        `,

        data() {
            return { message: 'My Notification' };
        }
    }
</script>

<style>
    .Notification { background: green; }
</style>
