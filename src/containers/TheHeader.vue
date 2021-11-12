<template>
  <div class="header">
    <nav>
      <div class="flex-container">
        <div class="hamburger-icon">
          <font-awesome-icon
          :icon="['fa', 'bars']"
          style="font-size:30pt"
          @click="showSidebar"
          />
        </div>
        <div>
          <button class="Lbtn1"> CTA </button>
        </div>

        <div>
          <ul>
            <li><a class="scroll" href="#section-2">منو شماره‌1</a></li>
            <li><a class="scroll" href="#section-3">منو شماره‌2</a></li>
            <li><a class="scroll" href="#section-4">منو شماره‌3</a></li>
            <li><a class="scroll" href="#section-5">منو شماره‌4</a></li>
            <li><a class="scroll" href="#section-6">منو شماره‌5</a></li>
            <li><a class="scroll" href="#section-7">فوتر</a></li>
        </ul>
        </div>

<!-- Responsive Menu -->
        <div class="logo">
          <img src="@/assets/img/Black-Logo.png">
        </div>
      </div>
    </nav>
    <div id="responsive-navigation" class="dis-none">
        <div>
          <ul>
            <li><a class="scroll" href="#section-1">
              <div class="hamburger-icon">
                <font-awesome-icon
                :icon="['fa', 'window-close']"
                style="font-size:30pt;float:right;padding-right:30px;"
                @click="showSidebar"
                />
              </div>
            </a>
          </li>
          <li><a class="scroll" href="#section-1"><img src="@/assets/img/Black-Logo.png" ></a></li>
          <li><a class="scroll" href="#section-1">منو شماره‌1</a></li>
          <li><a class="scroll" href="#section-2">منو شماره‌2</a></li>
          <li><a class="scroll" href="#section-3">منو شماره‌3</a></li>
          <li><a class="scroll" href="#section-4">منو شماره‌4</a></li>
          <li><a class="scroll" href="#section-5">منو شماره‌5</a></li>
          <li><a class="scroll" href="#section-5">فوتر</a></li>
        </ul>
        </div>
    </div>
  </div>
</template>

 <script>
  export default {
  name: 'TheHeader',

  data() {
    return {

    }
  },
  methods: {
    showSidebar(){
      var sidebar = document.getElementById("responsive-navigation");
      sidebar.classList.toggle('dis-none');
    }
  },
};
</script>

<style scoped>

</style>
