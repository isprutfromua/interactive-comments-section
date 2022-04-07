<script lang="ts">
  // components
  import Button from "$lib/components/Button.svelte";
  // svelte
  import { createEventDispatcher } from "svelte";
  //logic
  let dispatch = createEventDispatcher();
</script>

<div on:click class="bg-black bg-overlay grid inset-0 fixed place-items-center">
  <div
    on:click|stopPropagation
    class="bg-white rounded-main flex-col flex max-w-100 p-6 gap-y-4">
    <h2 class="font-medium text-heading ">Delete comment</h2>
    <p class="text-grayishBlue">
      Are you sure you want to delete this comment? This will remove the comment
      and can't be undone.
    </p>
    <div class="flex gap-x-2 items-center">
      <Button
        on:click={() => {
          dispatch("cancel");
        }}
        class="bg-grayishBlue hover:bg-lightGrayishBlue focus:bg-lightGrayishBlue"
        >No, cancel</Button>
      <Button
        class="bg-softRed hover:bg-paleRed focus:bg-paleRed"
        on:click={() => {
          dispatch("approve");
        }}>Yes, delete</Button>
    </div>
  </div>
</div>

<style windi:preflights:global windi:safelist:global>
</style>
