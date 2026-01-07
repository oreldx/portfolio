<script>
    import AboutCard from "$lib/components/AboutCard.svelte";
    import AppPage from "$lib/components/AppPage.svelte";
</script>

<AppPage key="about">
    <AboutCard type="personal_info" />
    <AboutCard type="skills" />
    <AboutCard type="hobbies" />
</AppPage>
