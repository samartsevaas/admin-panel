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
.pagination {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: $main-blue;
  &:active {
    background-color: $main-blue;
    color: $main-blue;
  }
  &-link {
    text-decoration: none;
    color: $main-white;
    @extend .horizon;
  }
}
</style>
