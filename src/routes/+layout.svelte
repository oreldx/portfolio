<script>
    import '../app.css'

    import Hero from '$lib/components/Hero.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';

</script>

<main class="flex mx-auto flex-col lg:flex-row px-10 lg:max-w-screen-2xl lg:px-20 ">
    <div class="lg:sticky lg:top-0 flex-1 flex flex-col h-screen py-20">
        <Hero />    
        <Nav/>
        <Footer />
    </div>

    <div class="flex-1 flex items-center py-20">
        <slot />
    </div>
</main>
