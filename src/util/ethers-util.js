//初始化jsonRpcProvider
import * as ethers from "ethers";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

/**
 * 实例化合约-用于和只读方法交互
 * @param contractAddress
 * @returns {Contract}
 */
export function contractInstanceByProvider(contractAddress, abi) {
    return new ethers.Contract(contractAddress, abi, provider);
}

/**
 * 实例化合约-用于和写方法交互
 * @param contractAddress
 * @returns {Contract}
 */
export function contractInstanceBySigner(contractAddress, abi) {
    return new ethers.Contract(contractAddress, abi, signer);
}

export {
    ethers
}