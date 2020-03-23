<template>
  <div class="section--main">
    <div>
      <span>{{ title }}</span>
    </div>
    <ComponentExample />
  </div>
</template>

<script>
import ComponentExample from 'Components/ComponentExample'

export default {
  name: 'MainView',
  components: {
    ComponentExample,
  },
  data() {
    return {
      title: 'Main Title',
    }
  },
}
</script>
