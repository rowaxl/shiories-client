const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const TSConfigPaths = require('tsconfig-paths-webpack-plugin')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withDotEnvConfig = nextRuntimeDotenv({
  path: '.env',
  public: [
    'API_BASE_URL'
  ]
})

module.exports = withDotEnvConfig(withPlugins([withCSS], {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })

    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TSConfigPaths())
    } else {
      config.resolve.plugins = [new TSConfigPaths()]
    }

    return config
  }
})
)
