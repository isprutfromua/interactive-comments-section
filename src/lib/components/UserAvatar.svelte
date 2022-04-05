<script lang="ts">
  import type { User } from "src/stores/userStore";
  export let user: User;
</script>

<picture>
  <source srcset={user.image.webp} type="image/webp" />
  <img
    src={user.image.png}
    alt={user.username}
    class="rounded-full h-full object-cover w-full" />
</picture>
