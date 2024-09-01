# spa-nuxt v2

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Development

Default config not work in server **github pages**
We need to config in `nuxt.config.js` of `_nuxt` directory to `nuxt`

	build: {
		publicPath: '/nuxt/'
	},