<script>
    import Icon from "@iconify/svelte";
    import { expoOut } from "svelte/easing";
    import { t } from "../../../lib/i18n.js";
    import { blur } from "svelte/transition";
</script>

<div
    class="flex flex-col gap-4"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    <a class="flex gap-2 items-center hover:text-white" href="/projects">
        <Icon icon="bxs:left-arrow" class=" text-l" />
        <p>Back</p>
    </a>
    <div class="flex flex-col gap-3">
        <h2 class="text-white">
            {$t("projects.sna.title")}
        </h2>
        <div class="flex flex-col gap-8">
            <section>
                <p class="text-justify">
                    {@html $t("projects.sna.details.intro")}
                </p>
            </section>
            <section>
                <p class="text-justify">
                    {@html $t("projects.sna.details.video")}
                </p>
                <div class="mt-4 flex flex-col items-center">
                    <video
                        class="px-8 lg:max-h-[50vh] md:max-h-[60vh]"
                        src="/sna/video.mp4"
                        muted
                        autoplay
                        loop
                        controls
                    />
                    <p class="text-center text-sm">{$t("projects.sna.details.media.video")}</p>
                </div>
            </section>
            <section>
                <p class="text-justify">
                    {@html $t("projects.sna.details.outro")}
                </p>
            </section>
        </div>
    </div>
</div>
