<template>
  <div class="home">
    <ul class="listing-list">
      <li v-for="listing in listings" :key="listing.id" class="listing">
        <div class="img">
          <img v-if="listing.image" :src="listing.image" alt="listing.title" />
        </div>
        <p>
          {{ listing.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['listings']),
  created() {
    this.$store.dispatch('fetchListings');
  },
};
</script>

<style lang="scss">
@import '../assets/variables.scss';

.listing-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.listing {
  padding: 1rem 0;
  display: flex;

  .img {
    width: 160px;
    height: 100px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-grey;

    img {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    &:empty:before {
      content: 'No image';
      font-style: italic;
      color: $color-darkgrey;
    }
  }

  p {
    padding: 0 0 0 20px;
  }
}
</style>
