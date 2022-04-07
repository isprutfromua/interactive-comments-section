<script lang="ts">
  import { commentsStore } from "$stores/comments";
  import Comment from "./Comment.svelte";

  $: console.log($commentsStore);
</script>

<div class="flex flex-col gap-y-4">
  {#each $commentsStore as comment (comment.id)}
    <Comment {comment} />
  {:else}
    <p class="text-heading text-darkBlue">There is no comments</p>
  {/each}
</div>

<style windi:preflights:global windi:safelist:global>
</style>
