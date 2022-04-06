<script>
import SubscribeForm from "../components/SubscribeForm.vue";
export default {
  components: {
    SubscribeForm,
  },
  data: () => {
    return {
      photos: [
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
        "https://loremflickr.com/320/240",
      ],
    };
  },
};
</script>

<template>
  <div>
    <h1>This is Photos page</h1>
    <div>
      <img
        v-for="(photo, photoIndex) in photos"
        :key="photo"
        :src="`${photo}?${photoIndex}`"
        alt=""
      />
    </div>
    <div>
      <SubscribeForm />
    </div>
  </div>
</template>