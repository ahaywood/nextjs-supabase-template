module.exports = {
  "stories": [
    // "../app/**/*.stories.@(js|jsx|ts|tsx|mdx)"
    // "../pages/**/*.stories.@(js|jsx|ts|tsx|mdx)"
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}