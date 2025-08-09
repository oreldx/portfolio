<script>
    import { onMount } from "svelte";
    import { quartIn, quartOut } from "svelte/easing";
    import { blur, fly } from "svelte/transition";
    import { t } from "../i18n";
    import Icon from "@iconify/svelte";

    const footerItems = [
        {
            key: "github",
            icon: "mdi:github",
            url: "https://github.com/oreldx",
        },
        {
            key: "mail",
            icon: "tabler:mail-filled",
            url: "mailto:aurelien.dureux+pf@proton.me",
        },
        {
            key: "linkedin",
            icon: "mdi:linkedin",
            url: "https://www.linkedin.com/in/dureuxaur%C3%A9lien/",
        },
        {
            key: "resume",
            icon: "ph:download-fill",
        },
    ];

    let mounted = $state(false);
    onMount(() => (mounted = true));

    let displayText = $state("");
    const targetText = "Aurélien Dureux";
    const intervalTime = 10000;

    const scramble = (text, duration = 1000) => {
        const asciiStart = 33;
        const asciiEnd = 126;
        const totalFrames = Math.floor(duration / 30);
        let output = Array.from(text).map(() => "");

        let frame = 0;
        return new Promise((resolve) => {
            const scrambleInterval = setInterval(() => {
                for (let i = 0; i < text.length; i++) {
                    if (frame / totalFrames > i / text.length) {
                        output[i] = text[i];
                    } else {
                        output[i] = String.fromCharCode(
                            Math.floor(Math.random() * (asciiEnd - asciiStart + 1)) + asciiStart,
                        );
                    }
                }
                displayText = output.join("");
                frame++;

                if (frame >= totalFrames) {
                    clearInterval(scrambleInterval);
                    displayText = text;
                    resolve();
                }
            }, 30);
        });
    };

    async function runScrambleLoop() {
        while (true) {
            await scramble(targetText);
            await new Promise((resolve) => setTimeout(resolve, intervalTime));
        }
    }

    onMount(() => {
        runScrambleLoop();
    });
</script>

{#if mounted}
    <div
        class="flex flex-col gap-6 w-full lg:w-fit"
        in:fly={{
            duration: 1000,
            y: -20,
            delay: 100,
            easing: quartOut,
        }}
    >
        <a href="/" aria-label="Home Link" class="flex flex-col gap-6">
            <h1>
                {displayText}
            </h1>
            <h2>{$t("hero.title")}</h2>
            <p class="italic">{$t("hero.quote")}</p>
        </a>
        <ul
            class="flex justify-evenly lg:justify-start items-center lg:gap-6"
            in:blur={{
                delay: 100,
                duration: 300,
                amount: 6,
                easing: quartIn,
            }}
        >
            {#each footerItems as item}
                <li class="text-primary/70 hover:text-primary transition-all">
                    <a
                        target="_blank"
                        href={item.url ? item.url : $t("footer." + item.key + ".url")}
                        aria-label={item.label}
                        class="flex items-center gap-3"
                    >
                        <Icon icon={item.icon} class="text-3xl" />
                        <p class="hidden sm:block">
                            {$t("footer." + item.key + ".text")}
                        </p>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
{/if}
