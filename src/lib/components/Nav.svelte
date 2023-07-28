<script>
    import {page} from '$app/stores'

    const navOptions = [
        'about',
        'skills',
        'experience',
    ];

    let intSelected = -1;
    if ($page.route.id) {
        const currentPage = $page.route.id.split('/')[1];
        intSelected = navOptions.indexOf(currentPage)
    }

    const switchSection = (event) => {
        intSelected = parseInt(event.srcElement.id) 
    }

</script>

<nav>
    <ul class="flex flex-col gap-6 my-12">
        {#each navOptions as option, i}
            <li class="w-min">
                <a class={`${intSelected==i ? "active before:bg-white" : "before:bg-transparent"} flex items-center before:w-3 before:h-3 before:mr-5 before:rounded-3xl before:border-solid before:border-white before:border-2`} 
                   id={i.toString()} href={`/${option}`} on:click={switchSection}>{option.toUpperCase()}</a>
            </li>
        {/each}
    </ul>
</nav>