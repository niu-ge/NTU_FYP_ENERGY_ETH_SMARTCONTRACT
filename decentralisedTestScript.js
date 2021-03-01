var address ="0xE6064a31D464d3Ac000B9E43B8aF701175358d5A";
var abi = [
{
"inputs": [],
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"internalType": "address",
"name": "tokenOwner",
"type": "address"
},
{
"indexed": true,
"internalType": "address",
"name": "spender",
"type": "address"
},
{
"indexed": false,
"internalType": "uint256",
"name": "tokens",
"type": "uint256"
}
],
"name": "Approval",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"internalType": "address",
"name": "from",
"type": "address"
},
{
"indexed": true,
"internalType": "address",
"name": "to",
"type": "address"
},
{
"indexed": false,
"internalType": "uint256",
"name": "tokens",
"type": "uint256"
}
],
"name": "Transfer",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "string",
"name": "accessDeniedText",
"type": "string"
}
],
"name": "accessDeniedTextEvent",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "string",
"name": "exceedLoadText",
"type": "string"
}
],
"name": "exceedLoadTextEvent",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "string",
"name": "insufficientText",
"type": "string"
}
],
"name": "insufficientTextEvent",
"type": "event"
},
{
"inputs": [],
"name": "accessDeniedText",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
"internalType": "address",
"name": "owner",
"type": "address"
},
{
"internalType": "address",
"name": "delegate",
"type": "address"
}
],
"name": "allowance",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
"internalType": "address",
"name": "delegate",
"type": "address"
},
{
"internalType": "uint256",
"name": "numTokens",
"type": "uint256"
}
],
"name": "approve",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "availableLoadinKW",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
"internalType": "address",
"name": "tokenOwner",
"type": "address"
}
],
"name": "balanceOf",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
"internalType": "uint256",
"name": "noOfWatts",
"type": "uint256"
},
{
"internalType": "string",
"name": "dateTime",
"type": "string"
},
{
"internalType": "string",
"name": "wattString",
"type": "string"
},
{
"internalType": "string",
"name": "buyerAddress",
"type": "string"
}
],
"name": "buyKWH",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "customerDataString",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "decimals",
"outputs": [
{
"internalType": "uint8",
"name": "",
"type": "uint8"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "destroy",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
"internalType": "uint256",
"name": "currentRate",
"type": "uint256"
}
],
"name": "energyInit",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "energyOwner",
"outputs": [
{
"internalType": "address payable",
"name": "",
"type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "exceedLoadText",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getAvailableLoad",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getCurrentRate",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getCustomerDB",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getLogForDB",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getOwnerDB",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getPurchasedKW",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getPurchasedLog",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getTokenRate",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "insufficientText",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "invalidLog",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "logForDB",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "name",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "negaWattString",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "ownerDataString",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "pricePerKW",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "purchasedKW",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "purchasingLog",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "purchasingLogSubString",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "symbol",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "tempString",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "tokenPrice",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "totalSupply",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
"internalType": "address",
"name": "receiver",
"type": "address"
},
{
"internalType": "uint256",
"name": "numTokens",
"type": "uint256"
}
],
"name": "transfer",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
"internalType": "address",
"name": "owner",
"type": "address"
},
{
"internalType": "address",
"name": "buyer",
"type": "address"
},
{
"internalType": "uint256",
"name": "numTokens",
"type": "uint256"
}
],
"name": "transferFrom",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
"internalType": "string",
"name": "dataBlock",
"type": "string"
}
],
"name": "updateMonthlyConsumerDB",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
"internalType": "string",
"name": "dataBlock",
"type": "string"
}
],
"name": "updateMonthlyOwnerDB",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
}
];
var balance = 0;
function getBalance(){
var stringData = "";
var usagesValue= 0;
var stringArray = [];
var usagesArrayValue = 2;
var addressArrayValue = 1;
var totalMonthUsages=0;
var i;
var contract;
$(document).ready(function(){
web3 = new Web3(web3.currentProvider);
contract = new web3.eth.Contract(abi, address);
contract.methods.getCustomerDB().call().then(function(customerDataString){
stringData = customerDataString;
stringArray = stringData.replace(/\n/g, ",").split(",");
for(i=0;i<=stringArray.length-3;i = i+3){
var capAddress = stringArray[addressArrayValue+i];
var caplessAddress = capAddress.toLowerCase();
if(caplessAddress == account){
usageValue = parseInt(stringArray[usagesArrayValue+i]);
//console.log(usageValue);
//console.log(stringArray[usagesArrayValue+i]);
if(Number.isNaN(usageValue) == false){
balance += usageValue;
}
} 
}
$('#owing').html(balance);
return balance;
})
})
}
function getAccountInfo(x){
$('#accountAddr').html("WALLET ADDRESS: "+x);
}
function myPurchase(x,y,z){
var contract;
var noOfKWh = x;
var currentdate = new Date(); 
var dateTime =  ""+currentdate.getDate() + "/"
+ (currentdate.getMonth()+1)  + "/" 
+ currentdate.getFullYear() + " @ "  
+ currentdate.getHours() + ":"  
+ currentdate.getMinutes() + ":" 
+ currentdate.getSeconds()+"]";
var wattString = y;
var accountAddress = z;
//alert(document.getElementById("noOfKWh").value);
$(document).ready(function(){
web3 = new Web3(web3.currentProvider);
contract = new web3.eth.Contract(abi, address);
contract.methods.buyKWH(noOfKWh,dateTime,wattString, accountAddress).send({from:account}).then(function(){
getWallet(account);
getBalance();
})
// contract.methods.getPurchasedKW().call().then(function(purchasedKW){
//   $('#purchasedKWH').html("Current overall purchased load: "+purchasedKW+" KWh");
//})
})
billingLoad = 0;
}
function purchaseLog(){
var contract;
var purchaseLogHTMl;
$(document).ready(function(){
web3 = new Web3(web3.currentProvider);
contract = new web3.eth.Contract(abi, address);
contract.methods.getPurchasedLog().call().then(function(purchaseLog){
$('#pLog').html(purchaseLog);
})
})
}
function purchaseLogForDB(){
var contract;
var logForDB;
$(document).ready(function(){
web3 = new Web3(web3.currentProvider);
contract = new web3.eth.Contract(abi, address);
contract.methods.getPurchasedLog().call().then(function(purchaseLog){
$('#pLog').html(purchaseLog);
})
})
}
function getWallet(x){
var msgAdd = x;
var roundoff18 = 0;
var tokenInst = new web3.eth.Contract(abi,address);
tokenInst.methods.balanceOf(msgAdd).call().then(function (bal) {
roundoff18 = parseInt(bal)/1000000000000000000;
console.log(roundoff18);
$('#coinBalance').html(roundoff18+"eneC");
})
}