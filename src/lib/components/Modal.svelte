<script lang="ts">
  import Button from "$lib/components/Button.svelte";
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
        class="bg-grayishBlue hover:bg-lightGrayishBlue focus:bg-lightGrayishBlue"
        >No, cancel</Button>
      <Button class="bg-softRed hover:bg-paleRed focus:bg-paleRed"
        >Yes, delete</Button>
    </div>
  </div>
</div>

<style windi:preflights:global windi:safelist:global>
</style>
