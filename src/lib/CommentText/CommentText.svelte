<script lang="ts">
  import type { TypeComment } from "$types/comment";

  import { getContext } from "svelte";

  import CommentUsernameTag from "./CommentUsernameTag.svelte";

  export let text: string;
  export let replyingTo: string;
</script>

<main>
  {#if replyingTo}
    <CommentUsernameTag {replyingTo} />
  {/if}
  {text}
</main>
