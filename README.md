# bitcoin service boilerplate

This project is an architecture starter to develop bitcoin services.  
It works with bitcoin-core and mongodb, in the example provided we are timestamping hexadecimal data in blockchain through bitcoin-rpc.  
The structure is based on coreycleary.me articles.  
![CoreyCleary.me](/docs/coreycleary.png)  

## Prerequisites
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  

Node.js
```
brew install node
node -v
```

MongoDB
```
brew install mongodb-community@4.2
brew services start mongodb-community
```

**You need bitcoin core**, follow bitcoin.org instructions.  
Edit the **bitcoin.conf** file :  
```
# Linux : ~/.bitcoin/bitcoin.conf

# Options only for testnet
[test]

# Accept command line and JSON-RPC commands.
server=1
rpcport=18332
rpcbind=$BitcoinNodeIp
rpcallowip=$YourOwnIp
rpcuser=$BitcoinUser
rpcpassword=$BitcoinPassword
```

## Installing

Clone this repo, then, install the node modules using **npm**
```
npm install
```

Rename **.env.example** file to **.env** and put the bitcoin & mongodb informations.  
```
PORT=1984

DB=mongodb://127.0.0.1:27017/example

BTC_USER=rpcuser
BTC_PASS=rpcpassword
BTC_HOST=127.0.0.1
BTC_PORT=18332
```
Then, run app with **nodemon**
```
npm start
```

## How to test

/docs contains the postman file for testing and documentation.  

Try the route **/blockchainit** -> it will send an hexadecimal data to the app.
```
{
	"hexData":"766920766572692076656e6976657273756d2076697675732076696369" //vi veri veniversum vivus vici
}
```
Response should be like this :  
```
{
    "_id": "5ded0b2478596d0e7e5b839b",
    "Created_date": "2019-12-08T14:39:32.352Z",
    "txid": "2e1fa5f26c9c47a17912d0b86c935d822969f2cc8c2c13e526429c916192989a",
    "data": "766920766572692076656e6976657273756d2076697675732076696369",
    "__v": 0
}
```
The document is created in MongoDB with the hexadecimal data, the timestamp and the txid of the bitcoin transaction.  
Use https://blockstream.info/testnet/ (or any blockchain explorer) to find the transaction with txid.  
When you click to see the details you should find something like this :  
![CoreyCleary.me](/docs/op_return.png)

## Built With

* [bitcoin-core](https://bitcoin.org/) - Bitcoin is an innovative payment network and a new kind of money.
* [mongodb](https://www.mongodb.com/) - MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
* [postman](https://www.getpostman.com/) - The Collaboration Platform for API Development.
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and Node.js
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
* [mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
* [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js.
* [rotating-file-stream](https://www.npmjs.com/package/rotating-file-stream) - Creates a stream.Writable to a file which is rotated. Rotation behaviour can be deeply customized; optionally, classical UNIX logrotate behaviour can be used.
* [file-system](https://www.npmjs.com/package/file-system) - This module make file operation apis simple, you don't need to care the dir exits and the api is same as node's filesystem. This is no exists time cost for this plugin.


## Author

 * **ethicnology**
