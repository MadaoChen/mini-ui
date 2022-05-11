import MyHeader from './Header.vue'

export default {
  title: 'Example/Header',
  component: MyHeader,
  argTypes: {
    onLogin: { action: 'login' },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { args }
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :onLogin="args.onLogin" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: null,
}
