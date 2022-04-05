<script lang="ts">
  import type { TypeUser } from "$types/user";
  export let user: TypeUser;
</script>

<picture>
  <source srcset={user.image.webp} type="image/webp" />
  <img
    src={user.image.png}
    alt={user.username}
    class="rounded-full h-full object-cover w-full" />
</picture>
