<template>
  <layout-content>
    <router-view></router-view>
    <upgrade-to-pro></upgrade-to-pro>
  </layout-content>
</template>

<script>
import LayoutContent from '@/layouts/Content.vue'
import UpgradeToPro from '../components/UpgradeToPro.vue'

export default {
  components: {
    LayoutContent,
    UpgradeToPro,
  },
  setup() {
   
  },
}
</script>
