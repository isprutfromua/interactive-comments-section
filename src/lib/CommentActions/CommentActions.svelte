<script lang="ts">
  import IconReply from "$icons/IconReply.svelte";
  import IconEdit from "$icons/IconEdit.svelte";
  import IconDelete from "$icons/IconDelete.svelte";
  import CommentAction from "./CommentAction.svelte";

  import { createEventDispatcher, getContext } from "svelte";
  import { currentUser } from "$stores/userStore";
  import type { TypeUser } from "$types/user";

  export let user: TypeUser;
  export let id: number;

  let dispatch = createEventDispatcher();
</script>

<div class="flex gap-x-4 items-center">
  {#if user.username === $currentUser.username}
    <CommentAction
      on:click={() => {
        dispatch("delete", id);
      }}
      class="text-softRed hover:text-paleRed">
      <IconDelete />

      <span class="font-medium leading-6">Delete</span>
    </CommentAction>

    <CommentAction
      class="text-moderateBlue hover:text-lightGrayishBlue"
      on:click={() => {
        dispatch("edit", id);
      }}>
      <IconEdit />

      <span class="font-medium leading-6">Edit</span>
    </CommentAction>
  {:else}
    <CommentAction
      class="text-moderateBlue hover:text-lightGrayishBlue"
      on:click={() => {
        dispatch("reply", id);
      }}>
      <IconReply />

      <span class="font-medium leading-6">Reply</span>
    </CommentAction>
  {/if}
</div>

<style windi:preflights:global windi:safelist:global>
</style>
