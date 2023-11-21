# Notes To Self
## If Deleting Everything To Start From Scratch
- Delete all files in `main` branch, preferably using the GitHub website.
- Save/Copy/Remove all local files and directories pertaining to this repository.
- Clone repo to local machine.
- `cd` into the cloned repo directory on local machine.
- Run `npx create-react-app .` to create react app in current directory.
    - Reference used: https://stackoverflow.com/a/69233517/17047816
    ```sh
    ~/GitHub > git clone https://github.com/AlTimofeyev/portfolio.git portfolio
    ~/GitHub > cd portfolio
    ~/GitHub/portfolio > npx create-react-app .
    ~/GitHub/portfolio > code .
    ```
- Install gh-pages and all necessary packages.
- Add `homepage` name, `predeploy` script and `deploy` script to `package.json` file.
    ```json
    {
        "homepage": "https://AlTimofeyev.github.io/portfolio",
        "name":     "portfolio",
        "version":  "0.1.0",
        [... all other json data ...]
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        [... all other json data ...]
    }
    ```
- Continue working on react app locally and `git push` updates to `main` branch when finished.
- Use the command `npm run deploy` in local portfolio directory (`main` branch) to publish updates to GitHub Pages.
    ```sh
    ~/GitHub/portfolio > npm run deploy
    ```

## If Updating Without Starting From Scratch
- Continue working on react app locally and `git push` updates to `main` branch when finished.
- Use the command `npm run deploy` in local portfolio directory (`main` branch) to publish updates to GitHub Pages.

## GitHub Pages `gh-pages` Repository
- [react-gh-pages](https://github.com/gitname/react-gh-pages)

<br/>
<br/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
