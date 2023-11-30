# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Crypto-APp search Engine 
##overview 
#I create a Modern crypto app serach engine, users can directly search any crypto currency in search bar and than filter the cryptoCurrency by price, when user search any crypto coin and than coinCard are render on the screen, in each coinCard have some basic information of coins like - price, logo,name and one button for moreDetails about each crypto Currency when user click on moreDetails than user navigate to another page which includes more details about each coins like , logo, currentprice, marketCap and description..

#Table of contents
-[Getting Statrted](#Getting Started)
-[prerequisites]#(prerequisites)
-[Intallation](#installation)
-[Runnig The projects](#runnig the projects)
-[Project Structure](#Project struction)
-[Redux State MAnagement](#Redux-state-management)
-[Responsive Design](#Responsive-Design)

## Getting Started 
## prerequisites 
#intall vite for create a app.
#need to install some dependencies - react-router-dom , react-icons,chatr.js , Axios , Redux-toolkit etc. 
## Installation
#first Create app by using vite - npm create vite@latest
#Project-Name,
#Provide folderName - cd-foldername,
#bash - npm run dev

##Running the project - 
#npm run dev

##Project-Structure
/src

/components 
-NavBar.jsx
-Card-Container.jsx
-Coin-Card.jsx

/page
/CoinDetails.jsx
/PageNotFound.jsx

/Redux 
/Features
/Store.js
/CoinSlice.js
    -initialState 
    -extraReducer
    -AsyncThunk
/CoinService.js
    /Axios.get

/style
 -material-ui
 -Bootstrap

 /App.js
 /main.js

 ##Redux state Management 
 Using Redux for managing status, i use assyncThunk for getting response in every step when api call ,
 asyncthunk provide effiency to manage state from pending,succes or fullfiled state,

 I use axios for get Data from api and use in AssyncThunk and assinf action.payload to initailstate name is CoinData for rendering all coins on our webpage,

I use Another api forgetting coinnDetails by using id and provide data to CoinInfo state when api call success,

than i handle this response in each coponents using useslector , useEffect and usparams.

##Responsive Design
I use AMterial Ui and bootstrap for making ui and it is also responsive..




