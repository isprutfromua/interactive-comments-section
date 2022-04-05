<script lang="ts">
  import IconReply from "$lib/icons/IconReply.svelte";
  import IconEdit from "$lib/icons/IconEdit.svelte";
  import IconDelete from "$lib/icons/IconDelete.svelte";
  import CommentAction from "./CommentAction.svelte";

  import { getContext } from "svelte";
  import { currentUser } from "../../stores/userStore";
  import type { User } from "src/stores/userStore";

  let user: User = getContext("user");
</script>

<div class="flex gap-x-4 items-center">
  {#if user.username === $currentUser.username}
    <CommentAction class="text-softRed hover:text-paleRed">
      <IconDelete />

      <span class="font-medium leading-6">Delete</span>
    </CommentAction>

    <CommentAction class="text-moderateBlue hover:text-lightGrayishBlue">
      <IconEdit />

      <span class="font-medium leading-6">Edit</span>
    </CommentAction>
  {:else}
    <CommentAction class="text-moderateBlue hover:text-lightGrayishBlue">
      <IconReply />

      <span class="font-medium leading-6">Reply</span>
    </CommentAction>
  {/if}
</div>

<style windi:preflights:global windi:safelist:global>
</style>
