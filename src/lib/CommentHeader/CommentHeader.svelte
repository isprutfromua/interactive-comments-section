<script lang="ts">
  import CommentDate from "$lib/CommentHeader/CommentDate.svelte";
  import CommentUserName from "$lib/CommentHeader/CommentUserName.svelte";
  import CommentUserPhoto from "$lib/CommentHeader/CommentUserPhoto.svelte";
  import CommentUserLabel from "$lib/CommentHeader/CommentUserLabel.svelte";

  import { currentUser } from "$stores/userStore";

  import type { TypeUser } from "$types/user";
  import type { TypeComment } from "$types/comment";
  import type { Writable } from "svelte/store";

  export let comment: Writable<TypeComment>;
  let user: TypeUser = $comment.user;
</script>

<header class="flex gap-x-4 items-center">
  <CommentUserPhoto {user} />
  <p class="flex gap-x-2 items-center">
    <CommentUserName username={user.username} />

    {#if user.username === $currentUser.username}
      <CommentUserLabel />
    {/if}
  </p>
  <CommentDate createdAt={$comment.createdAt} />
</header>

<style>
</style>
