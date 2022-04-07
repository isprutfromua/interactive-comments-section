<script lang="ts">
  // components
  import Modal from "$lib/components/Modal.svelte";
  import CommentForm from "$lib/CommentForm/CommentForm.svelte";
  import Comments from "$lib/Comments.svelte";
  // stores
  import { modalIsOpened } from "$stores/modal";
  import { commentsDeletePromise, commentsStore } from "$stores/comments";
  // logic
  let approveCommentDelete, cancelCommentDelete;

  // TODO: move to store
  const toggleModal = (): void => {
    $modalIsOpened = !$modalIsOpened;

    !$modalIsOpened
      ? document.documentElement.classList.add("overflow-hidden")
      : document.documentElement.classList.remove("overflow-hidden");
  };

  $: if ($modalIsOpened) {
    $commentsDeletePromise = new Promise<void>((resolve, reject) => {
      approveCommentDelete = resolve;
      cancelCommentDelete = reject;
    });
  }
</script>

<svelte:head>
  <title>Interactive comments section</title>
  <style>
    html {
      margin-left: calc(100vw - 100%);
    }
  </style>
</svelte:head>

<main class="container mx-auto text-grayishBlue text-base">
  {#if $commentsStore.length}
    <!-- content here -->
    <Comments />

    <footer class="mt-4 lg:mt-5">
      <CommentForm />
    </footer>
  {:else}
    <p class="text-heading text-darkBlue">Fetching comments</p>
  {/if}
</main>

{#if $modalIsOpened}
  <Modal
    on:approve={approveCommentDelete}
    on:cancel={cancelCommentDelete}
    on:click={toggleModal} />
{/if}

<style windi:preflights:global windi:safelist:global>
</style>
