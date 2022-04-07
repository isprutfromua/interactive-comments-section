<script lang="ts">
  import CommentInput from "./CommentInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import UserAvatar from "$lib/components/UserAvatar.svelte";
  import ComponentsWrapper from "$lib/components/ComponentsWrapper.svelte";

  import { currentUser } from "$stores/userStore";
  import { commentsStore } from "$stores/comments";

  import type { TypeComment } from "$types/comment";
  import { createEventDispatcher } from "svelte";

  export let comment: TypeComment = undefined;
  export let editMode: boolean = false;

  let userInput = editMode ? comment.content : "";
  let dispatch = createEventDispatcher();

  function addReply() {
    let generatedId: number = Date.now();
    let currentTime: Date = new Date();
    let formattedTime: string = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

    let newComment: TypeComment = {
      id: generatedId,
      content: userInput,
      createdAt: formattedTime,
      score: 0,
      user: $currentUser,
    };

    if ($$props.comment) {
      comment.replies = [
        ...comment.replies,
        { ...newComment, replyingTo: comment.user.username },
      ];
    } else {
      $commentsStore = [...$commentsStore, newComment];
    }

    $commentsStore = [...$commentsStore];

    userInput = "";
    dispatch("comment-add");
  }

  function updateReply() {
    dispatch("comment-update", userInput);
  }
</script>

<ComponentsWrapper
  class="gap-y-2 gap-x-2 grid-cols-[max-content,1fr,max-content] {editMode
    ? '!p-0 grid-cols-1'
    : ''} ">
  {#if !editMode}
    <div class="h-10 w-10 <lg:row-start-2">
      <UserAvatar user={$currentUser} />
    </div>
  {/if}
  <div class="<lg:col-span-full">
    <CommentInput bind:userInput />
  </div>
  <div class="flex justify-end items-start <lg:col-start-3">
    {#if editMode}
      <Button
        on:click={updateReply}
        class="bg-moderateBlue hover:bg-lightGrayishBlue focus:bg-lightGrayishBlue">
        update
      </Button>
    {:else}
      <Button
        on:click={addReply}
        class="bg-moderateBlue hover:bg-lightGrayishBlue focus:bg-lightGrayishBlue ">
        send
      </Button>
    {/if}
  </div>
</ComponentsWrapper>

<style windi:preflights:global windi:safelist:global>
</style>
