import panel from '@/components/panel/index.vue'

export default {
  title: 'Panel 面板',
  component: panel,
}

const template: any = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { panel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<panel v-bind="args">这里是内容</panel>',
})

export const normal = template.bind({})
normal.args = {}
