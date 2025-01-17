This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing

This package uses a Bentley developed testing tool [Certa](https://www.npmjs.com/package/@bentley/certa). The three required scripts to run the tests are `test-build`, `webpackTests`, and finally `test-certa`. create-react-app does not contain the necessary framework for testing an iModel.js application which is the reason for the test specific build and webpack workflow. 

The recommended way of writing tests is to use watch scripts for the TypeScript transpiling and webpacking. In three separate terminals: 
- `test-build:watch` - Watches src for changes and retranspiles. 

- `webpackTests:watch` -  Watches lib for the result of the build and re-webpacks. 

- `test-certa` - Manually run tests after the previous two operations complete.

## Contributing

 Each sample provided in the frontend sample showcase should be able to run both at runtime and within the online code editor. In order to ensure both instances are possible, there are some considerations take note of. You can learn more on how to contribute to the showcase in the [Contributing Documentation](./Contributing.md).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
