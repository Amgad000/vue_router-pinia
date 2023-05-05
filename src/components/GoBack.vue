<template>
  <div>
    <button class="go-back" @click="$router.back()">Go Back</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  cursor: pointer;
  padding: 5px 20px;
}
</style>
