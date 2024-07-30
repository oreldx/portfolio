<script>
    import { Layer } from "svelte-canvas";

    const setup = ({ context, width, height }) => {};

    const render = ({ context, width, height }) => {
        const gradient = context.createLinearGradient(width, 0, 0, height);
        gradient.addColorStop(0, "#0C1438");
        gradient.addColorStop(0.5, "#031A4E");
        gradient.addColorStop(1, "#1A6F77");
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
    };
</script>

<Layer {setup} {render} />
