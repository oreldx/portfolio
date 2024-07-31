<script>
    import Icon from "@iconify/svelte";
    import { t } from "../../../lib/i18n.js";
</script>

<div class="flex flex-col gap-4">
    <a class="flex gap-2 items-center hover:text-white" href="/projects">
        <Icon icon="bxs:left-arrow" class=" text-l" />
        <p>Back</p>
    </a>
    <div class="flex flex-col gap-3">
        <h2 class="text-white">
            {$t("projects.ayc.title")}
        </h2>
        <p>
            {$t("projects.ayc.desc")}
        </p>
        <p class="italic">Content in progress...</p>
    </div>
</div>
