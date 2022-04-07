<script lang="ts">
  // icons
  import IconMinus from "$icons/IconMinus.svelte";
  import IconPlus from "$icons/IconPlus.svelte";
  // components
  import CounterButton from "./CounterButton.svelte";
  // svelte
  import { createEventDispatcher } from "svelte";
  // props
  export let score = 0;

  // logic
  let decreaseButton, increaseButton;
  const dispatch = createEventDispatcher();

  let changeScore = (type: "increase" | "decrease") => {
    increaseButton.disabled = !increaseButton.disabled;
    decreaseButton.disabled = !increaseButton.disabled;

    dispatch(type);
  };
</script>

<div
  class="bg-veryLightGray rounded-counter flex h-10 w-25 gap-x-4 items-center justify-center lg:flex-col lg:h-25 lg:py-4 lg:w-10 lg:gap-y-3.5">
  <CounterButton
    bind:button={increaseButton}
    on:click={() => changeScore("increase")}>
    <span class="sr-only"> Upwote comment </span>
    <IconPlus />
  </CounterButton>

  <span class="font-medium text-moderateBlue select-none">{score}</span>

  <CounterButton
    bind:button={decreaseButton}
    on:click={() => changeScore("decrease")}>
    <span class="sr-only"> Decrease comment </span>
    <IconMinus />
  </CounterButton>
</div>

<style windi:preflights:global windi:safelist:global>
</style>
