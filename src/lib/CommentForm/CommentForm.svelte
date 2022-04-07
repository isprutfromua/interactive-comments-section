<script lang="ts">
  import CommentInput from "./CommentInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import UserAvatar from "$lib/components/UserAvatar.svelte";
  import ComponentsWrapper from "$lib/components/ComponentsWrapper.svelte";

  import { currentUser } from "$stores/userStore";
  import { commentsStore } from "$stores/comments";

  import type { TypeComment } from "$types/comment";
  import { createEventDispatcher } from "svelte";

  let userInput = "";
  let dispatch = createEventDispatcher();
  export let comment: TypeComment;

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
      comment.replies = [...comment.replies, newComment];
    } else {
      $commentsStore = [...$commentsStore, newComment];
    }

    $commentsStore = [...$commentsStore];

    userInput = "";
    dispatch("comment-add");
  }
</script>

<ComponentsWrapper
  class="gap-y-2 gap-x-2 grid-cols-[max-content,1fr,max-content]">
  <div class="h-10 w-10 <lg:row-start-2">
    <UserAvatar user={$currentUser} />
  </div>
  <div class="<lg:col-span-full">
    <CommentInput bind:userInput />
  </div>
  <div class="<lg:col-start-3">
    <Button
      on:click={addReply}
      class="bg-moderateBlue hover:bg-lightGrayishBlue focus:bg-lightGrayishBlue ">
      send
    </Button>
  </div>
</ComponentsWrapper>
