module.exports = {
  plugins: ['@snowpack/plugin-dotenv', '@snowpack/plugin-react-refresh'],
  devOptions: {
    port: 3000
  },
  exclude: ['**/node_modules/**/*', '**/server/**/*']
};
