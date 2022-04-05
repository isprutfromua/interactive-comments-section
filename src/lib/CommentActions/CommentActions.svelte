<script lang="ts">
  import IconReply from "$icons/IconReply.svelte";
  import IconEdit from "$icons/IconEdit.svelte";
  import IconDelete from "$icons/IconDelete.svelte";
  import CommentAction from "./CommentAction.svelte";

  import { getContext } from "svelte";
  import { currentUser } from "$stores/userStore";
  import { commentsStore } from "$stores/comments";

  import type { TypeComment } from "$types/comment";
  import type { TypeUser } from "$types/user";

  let comment: TypeComment = getContext("comment");
  let user: TypeUser = comment.user;
  console.log(comment);

  let removeComment = (): void => {
    $commentsStore = $commentsStore.filter(
      (storeComment: TypeComment) => storeComment.id !== comment.id
    );
  };
</script>

<div class="flex gap-x-4 items-center">
  {#if user.username === $currentUser.username}
    <CommentAction
      class="text-softRed hover:text-paleRed"
      on:click={removeComment}>
      <IconDelete />

      <span class="font-medium leading-6">Delete</span>
    </CommentAction>

    <CommentAction class="text-moderateBlue hover:text-lightGrayishBlue">
      <IconEdit />

      <span class="font-medium leading-6">Edit</span>
    </CommentAction>
  {:else}
    <CommentAction class="text-moderateBlue hover:text-lightGrayishBlue">
      <IconReply />

      <span class="font-medium leading-6">Reply</span>
    </CommentAction>
  {/if}
</div>

<style windi:preflights:global windi:safelist:global>
</style>
