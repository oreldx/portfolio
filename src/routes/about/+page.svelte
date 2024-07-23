<script>
    import { t } from "../../lib/i18n";
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
    {@html $t("about")}
</div>
