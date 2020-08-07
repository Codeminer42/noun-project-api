# Noun Project OAuth server

## Setup

You'll need NodeJS 10+ and yarn

```sh
yarn
cp .env.example .env
```

Fill `.env` with the data needed

## Running

Run the following command:

```sh
yarn start
```

## Usage

The server has a single endpoint, that receives a search term and the API key (comming from the client, only the secret is stored in the server) and returns the direct output from [`/icons/term` endpoint from Noun Project API](<http://api.thenounproject.com/documentation.html#get--icons-(string-term)>)

### `/icons/:term?key=YOUR_API_KEY_HERE`

Example:

Hitting `/icons/website?key=MY_KEY` will return the content of the search for the term `website` in Noun Project icons.
