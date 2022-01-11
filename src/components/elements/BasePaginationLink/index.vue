<template>
  <div class="pagination">
    <a :href="href" class="pagination-link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "PaginationLink",
  props: ["href"],
};
</script>

<style lang="scss">
//полная стилизация будет на жс
</style>
