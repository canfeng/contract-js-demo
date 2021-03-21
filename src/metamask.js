/**
 * 检测metamask插件
 */
if (typeof window.ethereum == 'undefined') {
    console.warn('MetaMask未安装!');
}

export let currentAccount;
function getCurrentAccount(){
    ethereum
        .request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch((err) => {
            console.error(err);
        });
}
getCurrentAccount();

/**
 * 监听账户变更
 */
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
    }
    console.log("当前账户地址=" + currentAccount);
}

/**
 * 建立连接，并获取账户地址
 * @returns {Promise<void>}
 */
export async function connect() {
    ethereum.request({method: 'eth_requestAccounts'})
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
}

export function component(name, func) {
    const element = document.createElement('button');
    // lodash，现在通过一个 script 引入
    element.innerText = name;
    element.addEventListener('click', func);
    return element;
}

document.body.appendChild(component('连接MetaMask', connect));
