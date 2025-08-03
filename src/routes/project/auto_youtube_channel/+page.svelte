<script>
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import { expoOut } from "svelte/easing";
    import { t } from "../../../lib/i18n.js";
    import { blur } from "svelte/transition";

    let description = $state("");
    onMount(async () => {
        const res = await fetch("/auto_youtube_channel/description.txt");
        description = await res.text();
    });
</script>

<div
    class="flex flex-col gap-4 w-full"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    <a
        class="flex gap-2 items-center text-primary/70 hover:text-primary"
        href="/project"
        aria-label="Back to Projects"
    >
        <Icon icon="bxs:left-arrow" class=" text-l" />
        <p>Back</p>
    </a>
    <div class="flex flex-col gap-3">
        <h2>
            {$t("project.auto_youtube_channel.title")}
        </h2>
        <div class="flex flex-col gap-8">
            <section>
                <p>
                    {@html $t("project.auto_youtube_channel.details.intro")}
                </p>
            </section>
            <section>
                <div>
                    <video class="px-8" src="/auto_youtube_channel/video.mp4" muted autoplay loop
                    ></video>
                    <p class="text-center text-sm">
                        {$t("project.auto_youtube_channel.details.media.video")}
                    </p>
                </div>
                <p>
                    {@html $t("project.auto_youtube_channel.details.video")}
                </p>

                <div class="mt-2">
                    <video
                        class="px-8"
                        src="/auto_youtube_channel/call_to_action.mp4"
                        muted
                        autoplay
                        loop
                    ></video>
                    <p class="text-center text-sm">
                        {$t("project.auto_youtube_channel.details.media.cta")}
                    </p>
                </div>
            </section>
            <section>
                <p>
                    {@html $t("project.auto_youtube_channel.details.thumbnail")}
                </p>
                <div class="mt-2">
                    <img
                        class="px-8"
                        src="/auto_youtube_channel/thumbnail.jpg"
                        alt="auto_youtube_channel_thumbnail"
                    />
                    <p class="text-center text-sm">
                        {$t("project.auto_youtube_channel.details.media.thumbnail")}
                    </p>
                </div>
            </section>
            <section>
                <p>
                    {@html $t("project.auto_youtube_channel.details.text")}
                </p>
                <p class="border p-2 mt-4 underline">
                    Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Compil' Twitch FR #1]
                </p>
                <pre
                    class="border p-2 mt-2 max-h-[250px] overflow-y-scroll whitespace-pre-line">{description}</pre>
            </section>
        </div>
    </div>
</div>
