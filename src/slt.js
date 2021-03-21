import slt_abi from './contract/slt_abi.json';
import * as ethersUtil from "./util/ethers-util";

/**
 * 打印SLT信息
 * @returns {Promise<void>}
 */
export async function printSLTInfo() {
    let SLT = ethersUtil.contractInstanceByProvider('0xEa5ddf1cB1adF0a041E71Fe16Dc71A632D85e77d', slt_abi);
    console.log(await SLT.name());
    console.log(await SLT.symbol());
    console.log(await SLT.totalSupply());
}