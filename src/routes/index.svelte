<script>
  import CommentForm from "$lib/CommentForm/CommentForm.svelte";
  import Comments from "$lib/Comments.svelte";
</script>

<svelte:head>
  <title>Interactive comments section</title>
</svelte:head>

<main class="container mx-auto text-grayishBlue text-base">
  <Comments />

  <footer class="mt-4 lg:mt-5">
    <CommentForm />
  </footer>
</main>
