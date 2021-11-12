<template>
  <section id="section-6">
      <div class="container msg-container">
        <div class="flex-container">
          <div class="flex-message">
            <h3 class="fs10 fw5">منوی شماره 5</h3>
          </div>
        </div>

        <div class="flex-container">
          <div class="flex-message">
            <p>نام و نام خانوادگی</p>
            <input v-model="name" type="text" placeholder="نام و نام خانوادگی خود را وارد کنید">
          </div>
          <div class="flex-message">
            <p>شماره تماس</p>
            <input v-model="phone" type="number" placeholder="شماره تماس خود را وارد کنید">
          </div>
          <div class="flex-message">
            <p>ایمیل</p>
            <input v-model="Email" type="email" placeholder="آدرس ایمیل خود را وارد کنید">
         </div>
       </div>

       <div class="flex-container">
        <div class="flex-message" id="v-model-textarea">
          <p >پیام</p>
          <textarea type="text" v-model="message" placeholder="اینجا بنویسید..."></textarea>
        </div>
       </div>
            <button
            class="Lbtn1"
            style="margin-top:68px;"
            @click="send"
             >
             CTA
           </button>
      </div>
  </section>
</template>


<script>

export default {
  name: 'MessageSection',
  data(){
    return{
      form:{
        name: null,
        phone: null,
        email: null,
        message: null,
      }
    }
  },
  methods:{
    send(){
      this.$store.dispatch('sendMessage', this.form)
    }
  },
}
</script>

<style scoped>

</style>
