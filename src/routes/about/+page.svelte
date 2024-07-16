<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";

</script>

<div 
    class="flex flex-col gap-6"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    <p>In 2016, during my middle school days, I embarked on a <span class="strong-text">journey of curiosity and discovery</span>, tinkering with DIY drones, 3D printers, Arduino, and Raspberry Pi. This adventurous beginning served as a gateway, immersing me deeply into the realms of programming and web development. As I transitioned from hardware to the digital realm, I cultivated an affinity for <span class="strong-text">both frontend and backend</span> development.</p>

    <p>Having recently <span class="strong-text">completed a Master of Science in Computer Science from UTT</span>, I bring with me not just academic credentials but substantial professional experience as well. My first foray into the professional tech world began with a six-month internship at <a class="text-white hover:text-secondary font-semibold" target="_blank" href="https://grytics.com">Grytics</a>, where I honed my programming skills. This was followed by a second internship at <a class="text-white hover:text-secondary font-semibold" target="_blank" href="https://careers.selectra.com/">Selectra</a>, working as a Fullstack Web Engineer. These experiences have equipped me with a solid foundation in both the theoretical and practical aspects of technology. It's now time for me to <span class="strong-text">seek the best opportunities to start my career</span> and make a significant impact in the tech industry.</p>
        
    <p>Despite my busy academic schedule, I make it a point to nurture <span class="strong-text">my love for side projects</span>. My ventures range from creating unique 3D printer projects along with FPV drones - a testament to my enduring fondness for the blend of creativity and technology.</p>

    <p>Away from the screens and circuits, I'm an active individual with a keen interest in calisthenics, climbing and hiking. The thrill of a new trail or the satisfaction of a well-executed workout <span class="strong-text">keeps me grounded and invigorated</span>. Simultaneously, I'm continually broadening my horizons by delving into the world of film culture and graphic design, a hobby that <span class="strong-text">adds a splash of artistic inspiration to my technically-oriented mindset</span>.</p>

    <p>When I reflect on my journey so far, I realize it's the perfect blend of code, creativity, and outdoor adventures that <span class="strong-text">keeps me excited about each day ahead</span>.</p>
</div>