<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";
  import CommentForm from "$lib/CommentForm/CommentForm.svelte";
  import Comments from "$lib/Comments.svelte";

  let isModalVisible = false;
  const toggleModal = (): void => {
    isModalVisible = !isModalVisible;

    isModalVisible
      ? document.documentElement.classList.add("overflow-hidden")
      : document.documentElement.classList.remove("overflow-hidden");
  };
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
  <Comments />

  <footer class="mt-4 lg:mt-5">
    <CommentForm />
  </footer>
</main>

{#if isModalVisible}
  <Modal on:click={toggleModal} />
{/if}

<style windi:preflights:global windi:safelist:global>
</style>
