<script>
    import { getSkillColor } from "$lib/utils";
    import Icon from "@iconify/svelte";

    const { icon, type, name, align = "center", size = "sm" } = $props();
</script>

<span
    class={`flex items-center justify-center gap-2 px-2 py-0.5 rounded-full border ${getSkillColor(type)} text-${size}`}
>
    <Icon icon={icon ?? "pepicons-pop:circle"} />
    {name}
</span>
