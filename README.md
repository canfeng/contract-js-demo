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

3. 连接MetaMask
连接页面的'连接MetaMask'按钮与MetaMask建立连接

4. 调用合约方法
4.1 打开开发者模式（F12）
4.2 在Console中通过自定义全局变量`szg`进行操作。

示例：
```
await szg.erc721.totalSupply()
await szg.erc721.addToWhitelist('0xf82f96aed5f343545cacc393f33bfe8e006f6928')
```