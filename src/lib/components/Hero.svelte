<script>
    import { onMount } from "svelte";
    import { quartOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import { t } from "../i18n";

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
        <div class="flex flex-col gap-6">
            <h1 class="font-extrabold">
                {displayText}
            </h1>
            <div class="flex flex-col leading-tight">
                <h2>
                    {$t("hero.title")}
                </h2>
                <p class="text-sm">[{$t("hero.subtitle")}]</p>
            </div>
            <p class="hidden sm:inline italic">{$t("hero.quote")}</p>
        </div>
    </div>
{/if}
