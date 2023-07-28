<script>
    import Icon from '@iconify/svelte';

    export let icon;
    export let color;
    
</script>

<div class="w-24 h-24 rounded-xl bg-white bg-opacity-20 backdrop-blur-l flex justify-center items-center drop-shadow-md">
    <Icon icon={icon} color={color} class="w-3/5 h-3/5"/>
</div>