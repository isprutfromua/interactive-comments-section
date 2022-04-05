<script>
  import CommentDate from "$lib/CommentHeader/CommentDate.svelte";
  import CommentUserName from "$lib/CommentHeader/CommentUserName.svelte";
  import CommentUserPhoto from "$lib/CommentHeader/CommentUserPhoto.svelte";
  import CommentUserLabel from "$lib/CommentHeader/CommentUserLabel.svelte";
</script>

<header class="flex gap-x-4 items-center">
  <CommentUserPhoto />
  <p class="flex gap-x-2 items-center">
    <CommentUserName />
    <CommentUserLabel />
  </p>
  <CommentDate />
</header>
