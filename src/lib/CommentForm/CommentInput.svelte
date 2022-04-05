<script>
  export let userInput;
</script>

<textarea
  class="border  border-lightGray rounded-main text-darkBlue w-full py-4 px-6 leading-6  resize-none focus:border-moderateBlue focus:outline-none"
  placeholder="Add a comment…"
  bind:value={userInput} />
