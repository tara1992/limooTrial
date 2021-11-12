<template>
<section id="section-7">
  <section class="section-7-up">
    <button
    class="Lbtn3"
    @click="scrollTop"
    >
     بازگشت به بالا
   </button>
    <div class="flex-container-footer">
      <div class="flex-footer">
        <img src="@/assets/img/White-Logo.png" class="fooer-logo">
        <p class="discription">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </div>

      <div class="flex-footer">
        <h3 class="fs9 fw4">دسترسی سریع </h3>
        <ul>
          <li v-for="item in items" :key="item.menu">
            {{ item.menu }}
          </li>
      </ul>
      </div>

      <div class="flex-footer">
        <h3 class="fs9 fw4">تماس با ما</h3>
        <p class="responsive">
          <font-awesome-icon class="contact-icon" :icon="['fa', 'map-marker-alt']"/>تهران، پاسداران، خیابان نجفی، کوچه اقاقیا، پلاک 2 واحد 11
        </p>
        <p class="responsive">
          <font-awesome-icon class="contact-icon" :icon="['fa', 'phone-alt']"/>(+98)2222222222
        </p>
        <p class="responsive">
          <font-awesome-icon class="contact-icon" :icon="['fa', 'print']"/>(+98)2222222222
        </p>
        <p class="responsive">
          <font-awesome-icon class="contact-icon" :icon="['fa', 'envelope']"/>Info@peak-elevator.com
        </p>
        <p class="responsive">
          <font-awesome-icon class="sosial-icon " :icon="['fab', 'twitter']"/>
          <font-awesome-icon class="sosial-icon" :icon="['fab', 'linkedin']"/>
          <img class="sosial-icon-insta" src="@/assets/img/icons/insta-icon.png"/>
          <font-awesome-icon class="sosial-icon" :icon="['fab', 'facebook']"/>
        </p>
      </div>
   </div>
  </section>
  <section class="section-7-down">
    <p class="text-center fs8">تمامی حقوق این وب سایت متعلق به شرکت فلان می‌باشد.</p>
  </section>
</section>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      items: [
        { menu: 'منوی شماره 1' },
        { menu: 'منوی شماره 2' },
        { menu: 'منوی شماره 3' },
        { menu: 'منوی شماره 4' },
        { menu: 'منوی شماره 5' },
      ]
    }
  },
  methods: {
    scrollTop(){
      this.intervalId = setInterval(() => {
      if (window.pageYOffset === 0) {
        clearInterval(this.intervalId)
      }
      window.scroll(0, window.pageYOffset - 50)
      }, 20)
    }
  }
}
</script>
