<template>
  <section id="section-5">
    <div class="flex-container">
      <div class="flex-side-down">
        <h3 class="fs10 text-center color-light">
          <font-awesome-icon :icon="['fa', 'quote-right']" style="margin-left:40px;" />
          منوی شماره 4
          <font-awesome-icon :icon="['fa', 'quote-left']" style="margin-right:40px;" />
        </h3>

        <transition
        enter-active-class="animated fadeIn delay-1s"
        mode="in-out"
        v-for="item in items" :key="item.id"
        >
        <div v-if="topSlider === item.id ">
          <img :src="item.img" >
        </div>

      </transition>
      <div class="slider-btn color-light mb-4">
        <a class="slider-btn-icon" @click="changeSlider(topSlider - 1)">
          <font-awesome-icon :icon="['fa', 'caret-square-right']" style="font-size:25pt; margin-left:44px;" />
        </a>

        <a class="slider-btn-icon line-btn-slider-down"
        v-for="icon in icons"
        :key="icon"
        @click="changeSlider(icon)">
        <span
        class="icon-down-selected"
        v-if="topSlider == icon"
        >
        ...........
        </span>
        <font-awesome-icon
        :icon="['fa', 'circle']"
        v-else
        />
        </a>

    <a class="slider-btn-icon" @click="changeSlider(topSlider + 1)">
      <font-awesome-icon :icon="['fa', 'caret-square-left']" style="font-size:25pt; margin-right:44px;" />
    </a>
  </div>
</div>
<img src="@/assets/img/DownCover.jpg"  class="cover">
</div>
</section>
</template>


<script>

export default {
  name: 'DownSlider',
  data(){
    return{
      topSlider: 1,
      icons:[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ],

      items: [
        {id: 1, img: require('@/assets/img/pic-1.png') },
        {id: 2, img: require('@/assets/img/pic-2.png') },
        {id: 3, img: require('@/assets/img/pic-3.png') },
        {id: 4, img: require('@/assets/img/pic-4.png') },
        {id: 5, img: require('@/assets/img/pic-5.png') },
        {id: 6, img: require('@/assets/img/pic-6.png') },
        {id: 7, img: require('@/assets/img/pic-7.png') },
        {id: 8, img: require('@/assets/img/pic-8.png') },
        {id: 9, img: require('@/assets/img/pic-9.png') },
        {id: 10,img: require('@/assets/img/pic-10.png') },
      ]
    }
  },
  methods:{
    changeSlider(data){
      if(data > 0 && data < 11){
        this.topSlider = data;
      }
      else{
        this.topSlider = 1
      }
    }
  },
  mounted() {
    window.setInterval(() => {
      this.changeSlider(this.topSlider + 1)
    }, 5000)
  }
}
</script>

<style scoped>

</style>
