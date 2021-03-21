import ozerc721_abi from './contract/ozerc721_abi.json';
import * as ethersUtil from "./util/ethers-util";

const ethers = ethersUtil.ethers;

//token合约地址
export const tokenAddress = '0x53729e6868296c6584cF72C7f313ebf3e48b6B79';
//token实例化对象
export let tokenForRead = null;
export let tokenForWrite = null;

export async function tokenInstanceForRead() {
    if (!tokenForRead) {
        tokenForRead = ethersUtil.contractInstanceByProvider(tokenAddress, ozerc721_abi);
    }
}

export async function tokenInstanceForWrite() {
    if (!tokenForWrite) {
        tokenForWrite = ethersUtil.contractInstanceBySigner(tokenAddress, ozerc721_abi);
    }
}

//region 读方法
export async function name() {
    await tokenInstanceForRead();
    return tokenForRead.name();
}

export async function symbol() {
    await tokenInstanceForRead();
    return tokenForRead.symbol();
}

export async function owner() {
    await tokenInstanceForRead();
    return tokenForRead.owner();
}

export async function totalSupply() {
    await tokenInstanceForRead();
    let totalSupply = await tokenForRead.totalSupply();
    return ethers.BigNumber.from(totalSupply).toNumber();
}

export async function isOwner() {
    await tokenInstanceForRead();
    return tokenForRead.isOwner();
}

export async function balanceOf(address) {
    await tokenInstanceForRead();
    return tokenForRead.balanceOf(address);
}

export async function getApproved(tokenId) {
    await tokenInstanceForRead();
    return tokenForRead.getApproved(tokenId);
}

export async function isApprovedForAll(owner, operator) {
    await tokenInstanceForRead();
    return tokenForRead.isApprovedForAll(owner, operator);
}

export async function isWhitelisted(address) {
    await tokenInstanceForRead();
    return tokenForRead.isWhitelisted(address);
}

export async function ownerOf(tokenId) {
    await tokenInstanceForRead();
    return tokenForRead.ownerOf(tokenId);
}

export async function supportsInterface(interfaceId) {
    await tokenInstanceForRead();
    return tokenForRead.supportsInterface(interfaceId);
}

export async function tokenByIndex(index) {
    await tokenInstanceForRead();
    return tokenForRead.tokenByIndex(index);
}

export async function tokenCreator(tokenId) {
    await tokenInstanceForRead();
    return tokenForRead.tokenCreator(index);
}

export async function tokenOfOwnerByIndex(owner, index) {
    await tokenInstanceForRead();
    return tokenForRead.tokenOfOwnerByIndex(owner, index);
}

export async function tokenURI(tokenId) {
    await tokenInstanceForRead();
    return tokenForRead.tokenURI(tokenId);
}

//endregion

//region 写方法
export async function addToWhitelist(newAddress) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.addToWhitelist(newAddress);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function addNewToken() {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.addNewToken();
    console.log("transaction: " + JSON.stringify(tx));
}

export async function approve(to, tokenId) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.approve(to, tokenId);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function deleteToken(tokenId) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.deleteToken(tokenId);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function enableWhitelist(enabled) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.enableWhitelist(enabled);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function initWhitelist(addressArray) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.initWhitelist(addressArray);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function removeFromWhitelist(_removedAddress) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.removeFromWhitelist(_removedAddress);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function safeTransferFrom(from, to, tokenId) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.safeTransferFrom(from, to, tokenId);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function safeTransferFromWithData(from, to, tokenId, data) {
    await tokenInstanceForWrite();
    let dataBytes = ethersUtil.ethers.utils.toUtf8Bytes(data);
    let tx = await tokenForWrite.safeTransferFrom(from, to, tokenId, dataBytes);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function setApprovalForAll(operator, approved) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.setApprovalForAll(operator, approved);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function transferFrom(from, to, tokenId) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.transferFrom(from, to, tokenId);
    console.log("transaction: " + JSON.stringify(tx));
}

export async function transferOwnership(newOwner) {
    await tokenInstanceForWrite();
    let tx = await tokenForWrite.transferOwnership(newOwner);
    console.log("transaction: " + JSON.stringify(tx));
}

//endregion

//region 监听Event

async function listenEventForAddToWhitelist() {
    await tokenInstanceForRead();
    tokenForRead.on('AddToWhitelist', (_newAddress) => {
        console.log('监听到Event => AddToWhitelist: _newAddress=' + _newAddress);
    })
}

async function listenEventForRemoveFromWhitelist() {
    await tokenInstanceForRead();
    tokenForRead.on('RemoveFromWhitelist', (_removedAddress) => {
        console.log('监听到Event => RemoveFromWhitelist: _removedAddress=' + _removedAddress);
    })
}

async function listenEventForApproval() {
    await tokenInstanceForRead();
    tokenForRead.on('Approval', (owner, approved, tokenId) => {
        console.log(`监听到Event => Approval: owner=${owner}, approved=${approved}, tokenId=${tokenId}`);
    })
}

async function listenEventForApprovalForAll() {
    await tokenInstanceForRead();
    tokenForRead.on('ApprovalForAll', (owner, operator, approved) => {
        console.log(`监听到Event => ApprovalForAll: owner=${owner}, operator=${operator}, approved=${approved}`);
    })
}

async function listenEventForOwnershipTransferred() {
    await tokenInstanceForRead();
    tokenForRead.on('OwnershipTransferred', (previousOwner, newOwner) => {
        console.log(`监听到Event => OwnershipTransferred: previousOwner=${previousOwner}, newOwner=${newOwner}`);
    })
}

async function listenEventForTokenURIUpdated() {
    await tokenInstanceForRead();
    tokenForRead.on('TokenURIUpdated', (_tokenId, _uri) => {
        console.log(`监听到Event => TokenURIUpdated: _tokenId=${_tokenId}, _uri=${_uri}`);
    })
}

async function listenEventForTransfer() {
    await tokenInstanceForRead();
    tokenForRead.on('Transfer', (from, to, tokenId) => {
        console.log(`监听到Event => Transfer: from=${from}, to=${to}, tokenId=${tokenId}`);
    })
}

//endregion

//region 注册Event监听器
listenEventForAddToWhitelist();
listenEventForRemoveFromWhitelist();
listenEventForApproval();
listenEventForApprovalForAll();
listenEventForOwnershipTransferred();
listenEventForTokenURIUpdated();
listenEventForTransfer();
//endregion