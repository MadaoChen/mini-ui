const customViewports = {
  iPhone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'iPhone6'
  }
}