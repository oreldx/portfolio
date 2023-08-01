<script>
    import { Layer } from "svelte-canvas";

    const GAP = 0;
    const bimWidth = 5;
    var binHeight = 500;
    
    var startInterval = 0;
    const endInterval = Math.PI*2;

    
	$: render = ({ context, width, height }) => {

        binHeight = Math.round(height*0.4);

        const amplitude = width*10/320;
        const frequency = 0.01;

        var n = Math.round((width + GAP) / (bimWidth + GAP));

        startInterval += frequency;
        if (startInterval >= endInterval) {
            startInterval = 0;
        }

        for (var i = 0; i < n; i++) {
            
            var xPosition = i*(bimWidth+GAP);

            var x = (xPosition*endInterval/width) + startInterval

            var y = Math.sin(x) * amplitude + (height-binHeight)/2;

            const gradient = context.createLinearGradient(xPosition, y+binHeight, xPosition, y );
            gradient.addColorStop(0,  'rgba(7, 169, 91, 0.0)');
            gradient.addColorStop(0.1,  'rgba(7, 169, 91, 0.05)');
            gradient.addColorStop(0.3, "#07A95B");
            gradient.addColorStop(0.5, "#07A95B");
            gradient.addColorStop(0.8, "#FD4D9B");
            gradient.addColorStop(1,  'rgba(195, 54, 169, 0.0)');
            context.fillStyle = gradient;

		    context.fillRect(xPosition, y, bimWidth, binHeight);
        }

	}

</script>

<Layer {render} />
