<template>
  <section id="section-3">
    <div class="flex-container">
      <div class="middle-vector">
        <div class="middle-inside">
          <h3 class="fs10 text-center">
            منوی شماره 2
          </h3>
          <div class="middle-slider">
            <transition
            enter-active-class="animated bounceOut delay-1s"
            >
              <div class="middle-image-row">
                <div class="middle-right">
                  <img :src="middleImageR" class="middle-img">
                </div>
                <div class="middle-center">
                  <img :src="middleImageC" class="middle-img">
                </div>
                <div class="middle-left">
                  <img :src="middleImageL" class="middle-img">
                </div>
            </div>
          </transition>

          <div class="middle-slider-btn">
              <a class="right-btn">
                <font-awesome-icon
                :icon="['fa', 'caret-square-right']"
                @click="changeSlider('next')"
                />
              </a>
               <a class="middle-btn">
                 <font-awesome-icon
                 :icon="['fa', 'circle']"
                 @click="changeSlider(0)"
                 />
                 <font-awesome-icon
                 :icon="['fa', 'circle']"
                 @click="changeSlider(1)"
                 />
                 <font-awesome-icon
                 :icon="['fa', 'circle']"
                 @click="changeSlider(2)"
                 />
               </a>
               <a class="left-btn">
                 <font-awesome-icon
                 :icon="['fa', 'caret-square-left']"
                 @click="changeSlider('back')"
                 />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
const items = [
        require('@/assets/img/middle-1.png'),
        require('@/assets/img/middle-2.png'),
        require('@/assets/img/middle-3.png'),
      ];

export default {
  name: 'MiddelSlider',
  data(){
    return{
      topSlider: 1,


      middleImageR: items[0],
      middleImageC: items[1],
      middleImageL: items[2],
    }
  },
  methods:{
    changeSlider(data){
      if(data == 0){
        this.middleImageR = items[1];
        this.middleImageC = items[0];
        this.middleImageL = items[2];
      }
      else if(data == 1){
        this.middleImageR = items[2];
        this.middleImageC = items[1];
        this.middleImageL = items[0];
      }
      else if(data == 2){
        this.middleImageR = items[0];
        this.middleImageC = items[2];
        this.middleImageL = items[1];
      }
      else if(data == 'next'){
        var nhistory = this.middleImageC;
        this.middleImageC = this.middleImageL;
        this.middleImageL = this.middleImageR;
        this.middleImageR = nhistory;
      }
      else if(data == 'back'){
        var bhistory = this.middleImageC;
        this.middleImageC = this.middleImageR;
        this.middleImageR = this.middleImageL;
        this.middleImageL = bhistory;
      }

    }
  },
}
</script>

<style scoped>

</style>
