## 项目初始化
yarn create react-app onesecond --template typescript

## craco
安装
yarn add @craco/craco

配置
在根目录下新增 craco.config.ts文件

修改脚本

```ts
module.exports = {
  webpack: {},
  devServer: {},
}
```

yarn add cross-env

package.json