## Overview

This repository is frontend solution (Option 1) for Summer 2020 pre-assignment in Elisa Viihde. The solution is written in [Create-react-app](https://github.com/woltapp/summer2020)

## Structure of design

The webpage is divided into 3 mains compoments: Menubar, Channels page, Programs page <br />

[![elisa.jpg](https://i.postimg.cc/52mc7r1s/elisa.jpg)](https://postimg.cc/RWqbqXWt)(https://postimg.cc/RWqbqXWt)

Components:

- _Menubar_: Navigate to page: Channels or Programs
- _Channels_: Contain channels overview information. When clicking individual one, it will navigate to a single page which shows more information
- _Programs_: Contain list of programs. It also has sort bar to sort the order of programs depending on the factors: name, length

## Instruction

### `touch .env`

Create an env file and add 'REACT_APP_API=YOUR_API_ROUTE/rest/epg)'<br />

### `npm install`

Install the dependencies before starting the project<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

