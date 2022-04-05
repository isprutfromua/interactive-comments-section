<script lang="ts">
  import CommentActions from "$lib/CommentActions/CommentActions.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import CommentText from "$lib/CommentText/CommentText.svelte";
  import CommentHeader from "$lib/CommentHeader/CommentHeader.svelte";
  import ComponentsWrapper from "$lib/components/ComponentsWrapper.svelte";
  import CommentForm from "$lib/CommentForm/CommentForm.svelte";

  import { setContext } from "svelte";
  import type { TypeComment } from "$types/comment";
  export let comment: TypeComment;

  let isFormVisible: boolean = false;
  const showEditForm = (): void => {
    comment.replies = [];
    isFormVisible = true;
  };

  setContext("comment", comment);
</script>

<ComponentsWrapper
  class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
  <!-- header wrapper -->
  <div class="lg:col-start-2">
    <CommentHeader createdAt={comment.createdAt} />
  </div>
  <!-- text wrapper -->
  <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
    <CommentText text={comment.content} />
  </div>
  <!-- actions wrapper -->
  <footer class="flex justify-between items-center lg:contents">
    <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
      <Counter score={comment.score} />
    </div>
    <div class="lg:col-start-3 lg:row-start-1">
      <CommentActions on:reply={showEditForm} />
    </div>
  </footer>
</ComponentsWrapper>

<!-- replies -->
{#if comment.replies}
  <div
    class="border-lightGray flex flex-col border-l-2 mt-2 pl-4 lg:ml-11 lg:pl-11 ">
    <ul class="flex flex-col gap-y-4 lg:gap-y-6">
      {#each comment.replies as comment}
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
