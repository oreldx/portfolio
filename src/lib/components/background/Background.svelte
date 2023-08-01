<script>
    import { afterUpdate, onMount } from 'svelte';
	import { Canvas } from 'svelte-canvas'
	import Sky from './Sky.svelte'
	import PolarLights from './PolarLights.svelte'

    let mounted = false
    let width = 0;
    let height = 0;

    onMount(() => {
        mounted = true;

        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
        });
    });

    $: if (mounted) {
        width = window.innerWidth;
        height = window.innerHeight;
    }

</script>

<div class="fixed top-0 left-0" style="z-index: -1;">
    <Canvas {width} {height}>
        <Sky />
         <PolarLights />
    </Canvas>
</div>
  