<template>
  <div>
    <TopSlider />
    <CardSection />
    <MiddelSlider/>
    <Menu3Section />
    <DownSlider />
    <MessageSection />
  </div>
</template>


<script>
import TopSlider from './TopSlider';
import CardSection from './CardSection';
import MiddelSlider from './MiddelSlider';
import Menu3Section from './Menu3Section';
import DownSlider from './DownSlider';
import MessageSection from './MessageSection';


export default {
  name: 'Home',
  components: {
    TopSlider,
    CardSection,
    MiddelSlider,
    Menu3Section,
    DownSlider,
    MessageSection,
  },
}
</script>
