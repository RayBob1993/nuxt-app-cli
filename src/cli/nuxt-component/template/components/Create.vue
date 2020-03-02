<template>
  <div class="<%= name %>"/>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ToggleMixin } from '@/mixins/utils'

export default {
  name: '<%= upperCaseName %>',
  props: [],
  mixins: [
    ToggleMixin,
  ],
  data: () => ({}),
  computed: {
    ...mapState([]),
  },
  created () {},
  mounted () {},
  methods: {
    ...mapActions([]),
  },
}
</script>

<%_ if (scoped) { _%>
<style scoped lang="scss">
.<%= name %> {

}
</style>
<%_ } else { _%>
<style lang="scss">
.<%= name %> {

}
</style>
<%_ } _%>
