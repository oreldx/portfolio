<script>
    import { afterUpdate, onMount } from 'svelte';
	import { Canvas } from 'svelte-canvas'
	import Sky from './Sky.svelte'
	import PolarLights from './PolarLights.svelte'

    var mounted = false
    var width = 0;
    var height = 0;
    const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const updateDimensions = () => {
        if (isMobile()) {
            width = window.outerWidth;
            height = window.outerHeight;
            
        } else {
            width = window.innerWidth;
            height = window.innerWidth;
        }    
    }
    
    onMount(() => {
        mounted = true;
        
        window.addEventListener('resize', () => {
            updateDimensions()
        });
        
    });

    $: if (mounted) updateDimensions();

</script>

<div class="fixed top-0 left-0" style="z-index: -1;">
    <Canvas {width} {height}>
        <!-- <Sky /> -->
         <PolarLights />
    </Canvas>
</div>
  