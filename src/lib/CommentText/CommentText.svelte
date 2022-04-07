<script lang="ts">
  //components
  import CommentUsernameTag from "./CommentUsernameTag.svelte";
  //types
  import type { TypeComment } from "$types/comment";
  //props
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
