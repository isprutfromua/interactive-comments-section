<script lang="ts">
  import type { TypeComment } from "src/types/comment";
  import { comments } from "../data";
  import Comment from "./Comment.svelte";

  let data: TypeComment[];
  data = comments;
</script>

<div class="flex flex-col gap-y-4">
  {#each data as comment (comment.id)}
    <Comment {comment} />
  {/each}
</div>

<style windi:preflights:global windi:safelist:global>
</style>
