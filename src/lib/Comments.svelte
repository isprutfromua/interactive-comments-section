<script lang="ts">
  // stores
  import { commentsStore } from "$stores/comments";
  // components
  import Comment from "./Comment.svelte";
</script>

<div class="flex flex-col gap-y-4">
  {#each $commentsStore as comment (comment.id)}
    <Comment {comment} />
  {/each}
</div>

<style windi:preflights:global windi:safelist:global>
</style>
