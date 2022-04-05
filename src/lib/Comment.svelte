<script>
  import CommentActions from "$lib/CommentActions/CommentActions.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import CommentText from "$lib/CommentText/CommentText.svelte";
  import CommentHeader from "$lib/CommentHeader/CommentHeader.svelte";
  import ComponentsWrapper from "$lib/components/ComponentsWrapper.svelte";
</script>

<ComponentsWrapper
  class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
  <!-- header wrapper -->
  <div class="lg:col-start-2">
    <CommentHeader />
  </div>
  <!-- text wrapper -->
  <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
    <CommentText />
  </div>
  <!-- actions wrapper -->
  <footer class="flex justify-between items-center lg:contents">
    <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
      <Counter />
    </div>
    <div class="lg:col-start-3 lg:row-start-1">
      <CommentActions />
    </div>
  </footer>
</ComponentsWrapper>

<!-- replies -->

<ul
  class="border-lightGray flex flex-col border-l-2 pl-4 gap-y-4 lg:ml-11 lg:pl-11 lg:gap-y-6">
  <li>
    <ComponentsWrapper
      class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
      <!-- header wrapper -->
      <div class="lg:col-start-2">
        <CommentHeader />
      </div>
      <!-- text wrapper -->
      <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
        <CommentText />
      </div>
      <!-- actions wrapper -->
      <footer class="flex justify-between items-center lg:contents">
        <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <Counter />
        </div>
        <div class="lg:col-start-3 lg:row-start-1">
          <CommentActions />
        </div>
      </footer>
    </ComponentsWrapper>
  </li>
  <li>
    <ComponentsWrapper
      class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
      <!-- header wrapper -->
      <div class="lg:col-start-2">
        <CommentHeader />
      </div>
      <!-- text wrapper -->
      <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
        <CommentText />
      </div>
      <!-- actions wrapper -->
      <footer class="flex justify-between items-center lg:contents">
        <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <Counter />
        </div>
        <div class="lg:col-start-3 lg:row-start-1">
          <CommentActions />
        </div>
      </footer>
    </ComponentsWrapper>
  </li>
  <li>
    <ComponentsWrapper
      class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
      <!-- header wrapper -->
      <div class="lg:col-start-2">
        <CommentHeader />
      </div>
      <!-- text wrapper -->
      <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
        <CommentText />
      </div>
      <!-- actions wrapper -->
      <footer class="flex justify-between items-center lg:contents">
        <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <Counter />
        </div>
        <div class="lg:col-start-3 lg:row-start-1">
          <CommentActions />
        </div>
      </footer>
    </ComponentsWrapper>
  </li>
  <li>
    <ComponentsWrapper
      class="lg:gap-x-6 lg:gap-y-4 lg:grid-cols-[max-content,1fr,max-content]">
      <!-- header wrapper -->
      <div class="lg:col-start-2">
        <CommentHeader />
      </div>
      <!-- text wrapper -->
      <div class="mt-4 mb-10 lg:mt-0 lg:mb-0 lg:col-start-2 lg:col-span-2">
        <CommentText />
      </div>
      <!-- actions wrapper -->
      <footer class="flex justify-between items-center lg:contents">
        <div class="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <Counter />
        </div>
        <div class="lg:col-start-3 lg:row-start-1">
          <CommentActions />
        </div>
      </footer>
    </ComponentsWrapper>
  </li>
</ul>
