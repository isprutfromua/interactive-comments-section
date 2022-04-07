<script lang="ts">
  import CommentActions from "$lib/CommentActions/CommentActions.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import CommentText from "$lib/CommentText/CommentText.svelte";
  import CommentHeader from "$lib/CommentHeader/CommentHeader.svelte";
  import ComponentsWrapper from "$lib/components/ComponentsWrapper.svelte";
  import CommentForm from "$lib/CommentForm/CommentForm.svelte";

  import type { TypeComment } from "$types/comment";
  import { writable, type Writable } from "svelte/store";
  import { commentsDeletePromise, commentsStore } from "$stores/comments";
  import { modalIsOpened } from "$stores/modal";

  export let comment: TypeComment;
  $: replies = comment.replies;

  let isFormVisible: boolean = false;

  const showEditForm = (): void => {
    comment.replies = [];
    isFormVisible = true;
  };

  let changeScore = () => {
    $dynamicComment.score = $dynamicComment.score + 1;
  };

  let deleteComment = (id: number) => {
    modalIsOpened.set(true);

    Promise.resolve().then(function () {
      $commentsDeletePromise
        .then(() => {
          let tempArr = $commentsStore.filter(function f(comment: TypeComment) {
            if (comment.replies) {
              comment.replies = comment.replies.filter(f);
            }

            if (comment.id !== id) return true;
          });

          $commentsStore = tempArr;
        })
        .finally(() => {
          modalIsOpened.set(false);
        });
    });
  };

  let dynamicComment: Writable<TypeComment> = writable(comment);
</script>

<ComponentsWrapper
  class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
  <!-- header wrapper -->
  <div class="lg:col-start-2">
    <CommentHeader comment={dynamicComment} />
  </div>
  <!-- text wrapper -->
  <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
    <CommentText
      replyingTo={$dynamicComment.replyingTo}
      text={$dynamicComment.content} />
  </div>
  <!-- actions wrapper -->
  <footer class="flex justify-between items-center lg:contents">
    <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
      <Counter on:click|once={changeScore} score={$dynamicComment.score} />
    </div>
    <div class="lg:col-start-3 lg:row-start-1">
      <CommentActions
        user={$dynamicComment.user}
        id={$dynamicComment.id}
        on:reply={showEditForm}
        on:delete={() => {
          deleteComment($dynamicComment.id);
        }} />
    </div>
  </footer>
</ComponentsWrapper>

<!-- replies -->
{#if replies}
  <div
    class="border-lightGray flex flex-col border-l-2 mt-2 pl-4 lg:ml-11 lg:pl-11 ">
    <ul class="flex flex-col gap-y-4 lg:gap-y-6">
      {#each replies as comment}
        <li>
          <svelte:self {comment} />
        </li>
      {/each}
    </ul>
    {#if isFormVisible}
      <CommentForm />
    {/if}
  </div>
{/if}

<style windi:preflights:global windi:safelist:global>
</style>
