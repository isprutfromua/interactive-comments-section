<script lang="ts">
  import UserAvatar from "$lib/components/UserAvatar.svelte";
</script>

<div class="h-8 w-8">
  <UserAvatar user={$$props.user} />
</div>
