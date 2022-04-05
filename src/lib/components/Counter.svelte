<script>
  import CounterButton from "./CounterButton.svelte";
  import IconMinus from "$lib/icons/IconMinus.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";
</script>

<div
  class="bg-veryLightGray rounded-counter flex h-10 w-25 gap-x-4 items-center justify-center lg:flex-col lg:h-25 lg:py-4 lg:w-10 lg:gap-y-3.5">
  <CounterButton>
    <span class="sr-only"> Upwote comment </span>
    <IconPlus />
  </CounterButton>

  <span class="font-medium text-moderateBlue select-none">12</span>

  <CounterButton>
    <span class="sr-only"> Decrease comment </span>
    <IconMinus />
  </CounterButton>
</div>
