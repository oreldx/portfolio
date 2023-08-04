<script>
    import { Layer } from "svelte-canvas";

    const bimWidth = 5;
    const startInterval = 0;
    const endInterval = Math.PI*2;

    var currentWidth = 0;
    var currentHeight = 0;
    var bims = []

    const linearFunc = (x, a, b) => a*x+b; 
    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    class Bim {

        constructor(i, windowWidth, windowHeight) {
            this.i = i;

            this.scaleRatio = endInterval/windowWidth;
            this.updatePosition();
            
            this.createBim(windowWidth, windowHeight);
        }
        
        createBim(windowWidth, windowHeight) {
            this.height = Math.round(windowHeight*0.8);

            this.opacity = 0.5;
            this.amplitude =  windowWidth*10/320;

            this.y = Math.sin(this.xFunction) * this.amplitude + (windowHeight-this.height)/2;
        }

        drawBim(i, n, context) {
            this.i = i;
            this.updatePosition();

            
            if (this.i/n <= .3) {
                if (n<175) this.opacity = Math.min(this.i*n, .3)+.2;
                else this.opacity = Math.min(this.i/n, .3)+.2;    
            }
            else this.opacity = 0.5;

            var tempHeight=0;
            var tempHeight = this.height + (Math.cos(this.xFunction*0.6) *this.amplitude);
            tempHeight += (Math.cos(this.xFunction*1.2) *this.amplitude*2);
            tempHeight += (linearFunc(this.xFunction, -0.8, 2)) *this.amplitude;

            const tempY = this.y + (this.height - tempHeight)/2;

            var gradient = context.createLinearGradient(this.xWindow, tempY+tempHeight, this.xWindow, tempY );
            gradient.addColorStop(0,  'rgba(7, 169, 91, .0)');
            gradient.addColorStop(0.1,  'rgba(7, 169, 91, .05)');
            gradient.addColorStop(0.3,  `rgba(7, 169, 91, ${this.opacity})`);
            gradient.addColorStop(0.5,  `rgba(7, 169, 91, ${this.opacity})`);
            gradient.addColorStop(0.8,  `rgba(253, 77, 155, ${this.opacity})`);
            gradient.addColorStop(1,  'rgba(195, 54, 169, .0)');
            context.fillStyle = gradient;
    
            context.fillRect(this.xWindow, tempY, bimWidth, tempHeight);
        }

        updatePosition() {
            this.xWindow = this.i*bimWidth;
            this.xFunction = (this.xWindow*this.scaleRatio) + startInterval;
        }
    }

    const createBims = (width, height) => {
        
        var n = Math.round(width / bimWidth) + 1;

        const bims = [];
        for (var i = 0; i < n; i++) bims.push(new Bim(i, width, height));
        return bims;
        
    }

    const drawBims = (bims, context) => {

        for (var i = 0; i < bims.length; i++) bims[i].drawBim(i, bims.length, context);

        const removedBim = bims.shift();
        bims.push(removedBim);

        return bims;
    }
    
	$: render = ({ context, width, height }) => {

        if (width != currentWidth || height != currentHeight) {
            currentWidth = width;
            currentHeight = height;

            bims = createBims(currentWidth, currentHeight);
        } 
        bims = drawBims(bims, context);
	}

</script>

<Layer {render} />
