<script>
    import { onMount } from "svelte";
    import { Canvas } from "svelte-canvas";
    import PolarLights from "./PolarLights.svelte";

    var mounted = $state(false);
    var width = $state(0);
    var height = $state(0);
    const isMobile = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const updateDimensions = () => {
        if (isMobile()) {
            width = window.outerWidth;
            height = window.outerHeight;
        } else {
            width = window.innerWidth;
            height = window.outerHeight;
        }
    };

    onMount(() => {
        mounted = true;

        window.addEventListener("resize", () => {
            updateDimensions();
        });
    });

    $effect(() => {
        if (mounted) updateDimensions();
    });
</script>

<div class="fixed top-0 left-0" style="z-index: -1;">
    <Canvas {width} {height}>
        <!-- <Sky /> -->
        <PolarLights />
    </Canvas>
</div>
