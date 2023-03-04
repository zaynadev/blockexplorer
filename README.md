# Ethereum Block Explorer

## 1. Add your Alchemy and Etherscan API key as an environment variable for the project

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `YOUR_ALCHEMY_API_KEY` and `YOUR_ETHERSCAN_API_KEY` with your api key.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
REACT_APP_ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
```

Do not remove the `REACT_APP_` prefix. React uses that to import env variables.

## 2. Start the webserver

`npm start`

Running the command above will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The webpage will automatically reload when you make code changes.
