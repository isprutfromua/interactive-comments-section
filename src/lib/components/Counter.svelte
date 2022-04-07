<script>
  import CounterButton from "./CounterButton.svelte";
  import IconMinus from "$icons/IconMinus.svelte";
  import IconPlus from "$icons/IconPlus.svelte";

  export let score = 0;
</script>

<div
  class="bg-veryLightGray rounded-counter flex h-10 w-25 gap-x-4 items-center justify-center lg:flex-col lg:h-25 lg:py-4 lg:w-10 lg:gap-y-3.5">
  <CounterButton on:click>
    <span class="sr-only"> Upwote comment </span>
    <IconPlus />
  </CounterButton>

  <span class="font-medium text-moderateBlue select-none">{score}</span>

  <CounterButton>
    <span class="sr-only"> Decrease comment </span>
    <IconMinus />
  </CounterButton>
</div>
