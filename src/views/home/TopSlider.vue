<template>
  <section id="section-1">
    <div class="container">
    <div class="flex-container">
      <div class="flex-side" style="margin-right:149px;">
        <transition
        enter-active-class="animated fadeInRight delay-1s"
        mode="out-in"
        v-for="item in items" :key="item.id">
         <div v-if="topSlider === item.id ">
           <h3 class="fs10 fw4 text-right"> {{ item.title }} </h3>
           <h3 class="fs13 fw5 text-right m-1"> {{ item.title2 }} </h3>
            <p class="fs9">{{ item.desc }}</p>
         </div>
         </transition>
         <div class="slider-btn">
           <a class="slider-btn-icon" @click="changeSlider(1)">
             <font-awesome-icon :icon="['fa', 'circle']"/>
           </a>
           <a class="slider-btn-icon" @click="changeSlider(2)">
             <font-awesome-icon :icon="['fa', 'circle']"/>
           </a>
           <a class="slider-btn-icon" @click="changeSlider(3)">
             <font-awesome-icon :icon="['fa', 'circle']"/>
           </a>
           <a class="slider-btn-icon" @click="changeSlider(4)">
             <font-awesome-icon :icon="['fa', 'circle']"/>
           </a>
         </div>
       </div>
        <div class="flex-shap">
          <div class="diamond" style="margin-top:150px;"></div>
        </div>
     </div>
   </div>
  </section>
</template>


<script>

export default {
  name: 'TopSlider',
  data(){
    return{
      topSlider: 1,

      items: [
        {id: 1, title: 'سرویس اول', title2: 'تیتر 1', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'},

        {id: 2, title: 'سویس دوم', title2: 'تیتر 2', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'},

        {id: 3, title: 'سرویس سوم', title2: 'تیتر 3', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'},

        {id: 4, title: 'سرویس چهارم', title2: 'تیتر 4', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'},
      ]
    }
  },
  methods:{
    changeSlider(data){
      if(data > 4){
          this.topSlider = 1;
      }
      else{
        this.topSlider = data;
      }
    },

  },
    mounted() {
      window.setInterval(() => {
        this.changeSlider(this.topSlider + 1)
      }, 10000)
  }
}

</script>

<style scoped>

</style>
