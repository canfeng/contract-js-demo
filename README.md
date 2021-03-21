### 如何开始
1. 安装依赖
```shell script
npm install
```

2. 运行
```shell script
npm start
```
该命令会启动一个本地服务器，自动在浏览器打开http://localhost:8080

3. 连接MetaMask：点击'连接MetaMask'按钮与MetaMask建立连接

4. 调用合约方法
- 4.1 打开开发者模式（F12）
- 4.2 在Console中通过自定义全局变量`szg`进行操作。
- 4.3 示例：
```
await szg.erc721.totalSupply()
await szg.erc721.addToWhitelist('0xf82f96aed5f343545cacc393f33bfe8e006f6928')
```

### 目录结构
```
contract-js-demo
|---dist                            //输出目录
|---node_modules                    //下载的依赖
|---src                             //源码目录
    |---contract                    //智能合约相关
         |---ozerc721_abi.json      //OZERC721的ABI文件
         |---slt_abi.json           //SLT的ABI文件
    |---util                        //工具目录
         |---ethers-util.js
    |---erc721.js                   //OZERC721的wrapper
    |---index.js                    //总入口
    |---metamask.js                 //MetaMask交互相关
    |---slt.js                      //SLT的Wrapper
    |---template.html               //模板html
|---.babelrc                        
|---.gitignore
|---package.json                    //依赖管理配置文件
|---package-lock.json
|---README.md           
|---webpack.config.js               //webpack配置文件
```