<script lang="ts">
  import CommentDate from "$lib/CommentHeader/CommentDate.svelte";
  import CommentUserName from "$lib/CommentHeader/CommentUserName.svelte";
  import CommentUserPhoto from "$lib/CommentHeader/CommentUserPhoto.svelte";
  import CommentUserLabel from "$lib/CommentHeader/CommentUserLabel.svelte";

  import { currentUser, type User } from "../../stores/userStore";
  import { getContext } from "svelte";

  let user: User;
  user = getContext("user");

  export let createdAt: string;
</script>

<header class="flex gap-x-4 items-center">
  <CommentUserPhoto {user} />
  <p class="flex gap-x-2 items-center">
    <CommentUserName username={user.username} />

    {#if user.username === $currentUser.username}
      <CommentUserLabel />
    {/if}
  </p>
  <CommentDate {createdAt} />
</header>

<style>
</style>
