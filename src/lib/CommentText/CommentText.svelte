<script lang="ts">
  import type { TypeComment } from "$types/comment";

  import CommentUsernameTag from "./CommentUsernameTag.svelte";

  export let text: string;
  export let replyingTo: string;

  export let editMode: boolean = undefined;
  export let comment: TypeComment = undefined;
</script>

<main>
  {#if replyingTo}
    <CommentUsernameTag {replyingTo} />
  {/if}
  {text}
</main>
