# CS361 Microservice Useage


1) Download package.json files and server.js files
node.js must be installed on your computer 
2) Cd into directory where files are downloaded 
3) run npm install and npm start 

TO GET DATA 
1) make a post request to http://localhost:3000
In the body of the request put the key as an int value,starting at 0,and going sequentially to n-1
where n is the total number of prices you are checking. This is used to identify what request you are making and can track the response data if you are checking more than one price at a time.
The value to the key will be an object with two keys. 
An "auctionHouseId" key where the value is the auction house id of where you want to check the price
and an "itemId" which is equal to the value of the item you want to check 

 

Type: JSON 
BODY of request:
{
"0": {"auctionHouseId": int,
"itemId":value},
"1": {"auctionHouseId": int,
"itemId":value}
...
"n-1":  {"auctionHouseId": int,
"itemId":value}
}

Sample Request Body
{
"0":{"auctionHouseId": 4,
"itemId":72092},
"1": {"auctionHouseId": 6,
"itemId":72093},
"2": {"auctionHouseId": 7,
"itemId":72093}
}

Response
The response will contain json data with a key value corresponding to the key that was sent in the original request and an int value equal to the minimum price found for the item searched in the specific auction house.
Type: JSON 
Sample Response 
{
  "0": 32000,
  "1": 16000,
  "2": 123456
}
