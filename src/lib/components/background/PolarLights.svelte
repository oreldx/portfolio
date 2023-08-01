<script>
    import { Layer } from "svelte-canvas";

    const GAP = 0;
    const bimWidth = 5;
    var binHeight = 500;
    
    const startInterval = 0;
    const endInterval = Math.PI*2;

    var currentWidth = 0;
    var currentHeight = 0;
    var bims = []

    const createBims = (width, height) => {
        
        var n = Math.round((width + GAP) / (bimWidth + GAP)) + 1;
        const amplitude = width*10/320;

        const yBims = [];

        for (var i = 0; i < n; i++) {

            var xPosition = i*(bimWidth+GAP);

            var x = (xPosition*endInterval/width) + startInterval;
            var y = Math.sin(x) * amplitude + (height-binHeight)/2;

            yBims.push(y);
            
        }

        return yBims;
        
    }

    const drawBims = (yBims, context) => {

        for (let i = 0; i < yBims.length; i++) {

            var x = i*(bimWidth+GAP);
            const y = yBims[i];

            var gradient = context.createLinearGradient(x, y+binHeight, x, y );
            gradient.addColorStop(0,  'rgba(7, 169, 91, .0)');
            gradient.addColorStop(0.1,  'rgba(7, 169, 91, .05)');
            gradient.addColorStop(0.3,  'rgba(7, 169, 91, .5)');
            gradient.addColorStop(0.5,  'rgba(7, 169, 91, .5)');
            gradient.addColorStop(0.8,  'rgba(253, 77, 155, .5)');
            gradient.addColorStop(1,  'rgba(195, 54, 169, .0)');
            context.fillStyle = gradient;
    
            context.fillRect(x, y, bimWidth, binHeight);

        }


        const removeBim = yBims.shift();
        yBims.push(removeBim);

        return yBims;

    }
    
	$: render = ({ context, width, height }) => {
        binHeight = Math.round(height*0.4);

        if (width != currentWidth || height != currentHeight) {
            currentWidth = width;
            currentHeight = height;

            bims = createBims(currentWidth, currentHeight);
        } 
    
        bims = drawBims(bims, context);


	}

</script>

<Layer {render} />
