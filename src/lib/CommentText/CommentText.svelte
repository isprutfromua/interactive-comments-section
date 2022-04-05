<script lang="ts">
  import type { TypeComment } from "$types/comment";

  import { getContext } from "svelte";

  import CommentUsernameTag from "./CommentUsernameTag.svelte";

  export let text: string;

  let comment: TypeComment = getContext("comment");
</script>

<main>
  {#if comment.replyingTo}
    <CommentUsernameTag replyingTo={comment.replyingTo} />
  {/if}
  {text}
</main>
