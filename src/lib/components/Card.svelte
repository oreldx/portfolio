<script>
    import { getIcon } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import { t } from "../i18n";

    export let data;
    export let type;
</script>

{#if data}
    <div
        class="card flex flex-col gap-2 bg-gradient-to-tr from-zinc-950 to-zinc-900 rounded-xl p-5 shadow-md border border-zinc-700 hover:border-green-500 hover:shadow-[0px_0px_10px_5px_rgba(0,_255,_83,_0.1)] transition-colors duration-300"
    >
        <h2 class="text-white font-semibold">{$t(`${type}.${data.key}.title`)}</h2>

        <div class="flex justify-between">
            <p class="font-semibold">
                {$t(type + ".type" + "." + data.type)}
            </p>
            <p class="date whitespace-nowrap">
                {$t(`${type}.${data.key}.date`)}
            </p>
        </div>
        <p class="text-zinc-200 text-sm mb-4">{$t(`${type}.${data.key}.desc`)}</p>

        <div class="flex justify-end gap-2">
            {#if data.externalLink}
                <a
                    class="bg-zinc-800 text-green-400 border border-green-600 px-4 py-2 text-sm rounded hover:bg-green-600 hover:text-white transition-colors"
                    href={data.externalLink}
                    target="_blank"
                >
                    <Icon icon={getIcon(data.externalLink)} class="text-lg" />
                </a>
            {/if}
            <a
                href={`${type}/${data.key}`}
                class="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-500 transition-colors"
            >
                {$t("button.seeMore")}
            </a>
        </div>

        <!-- TODO: maybe tags -->
    </div>
{/if}
