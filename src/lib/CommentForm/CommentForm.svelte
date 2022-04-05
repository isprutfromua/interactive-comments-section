<script>
  import CommentInput from "./CommentInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import UserAvatar from "$lib/components/UserAvatar.svelte";
  import ComponentsWrapper from "$lib/components/ComponentsWrapper.svelte";

  import { currentUser } from "../../stores/userStore";
</script>

<ComponentsWrapper
  class="gap-y-2 gap-x-2 grid-cols-[max-content,1fr,max-content]">
  <div class="h-10 w-10 <lg:row-start-2">
    <UserAvatar user={$currentUser} />
  </div>
  <div class="<lg:col-span-full">
    <CommentInput />
  </div>
  <div class="<lg:col-start-3">
    <Button
      class="bg-moderateBlue hover:bg-lightGrayishBlue focus:bg-lightGrayishBlue ">
      send
    </Button>
  </div>
</ComponentsWrapper>
