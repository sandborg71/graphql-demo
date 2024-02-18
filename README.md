# graphql-demo

[![TypeScript version][ts-badge]][typescript-5-3]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]

👩🏻‍💻 Graphql demo

🏃🏽 Install and run like this

- Make sure to have node >= 20 installed
- Make sure you have yarn installed
- Make sure you have Mockoon installed
- Launch Mockoon and start the provided api file apidata/assignment-mock2.json

- To fetch the mockoon data to local database and then start the graphql server, run the following commands:

```
yarn install
yarn build
yarn fetchData
yarn server
```

Here are three example graphql queries you can run towards http://localhost:4000/graphql :

```
query {
	vehicleById(id: "2337d25f-8917-4e26-920f-ddbe9ba063d6") {
		id
		name
		msidn
		engineStatus
		fleet
		brand
		countryOfOperation
		chassisNumber
		cassisSeries
		communicationStatus
		services {
			serviceName
			status
			lastUpdate
			reason
		}
	}
}

query {
	vehicleByNamePart(namePart: "big") {
		id
		name
		msidn
		engineStatus
		fleet
		brand
		countryOfOperation
		chassisNumber
		cassisSeries
		communicationStatus
		services {
			serviceName
			status
			lastUpdate
			reason
		}
	}
}

query {
	vehicleByServiceStatus(serviceName: "GPS", serviceStatus: "ACTIVE") {
		id
		name
		msidn
		engineStatus
		fleet
		brand
		countryOfOperation
		chassisNumber
		cassisSeries
		communicationStatus
		services {
			serviceName
			status
			lastUpdate
			reason
		}
	}
}
```

[ts-badge]: https://img.shields.io/badge/TypeScript-5.3-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.9-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v20.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-3]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[editorconfig]: https://editorconfig.org
