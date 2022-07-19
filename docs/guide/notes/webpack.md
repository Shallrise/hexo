---
title: Webpack打包时提示Invalid configuration object
date: 2022-7-19
---

### 问题描述：

在终端运行webpack打包ts时出现报错：

```web-idl
[webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
 - configuration has an unknown property 'pulgins'. These properties are valid:
   object { amd?, bail?, cache?, context?, dependencies?, devServer?, devtool?, entry?, experiments?, externals?, externalsPresets?, externalsType?, ignoreWarnings?, infrastructureLogging?, loader?, mode?, module?, name?, node?, optimization?, output?, parallelism?, performance?, plugins?, profile?, recordsInputPath?, recordsOutputPath?, recordsPath?, resolve?, resolveLoader?, snapshot?, stats?, target?, watch?, watchOptions? }
   -> Options object as provided by the user.
   For typos: please correct them.
   For loader options: webpack >= v2.0.0 no longer allows custom properties in configuration.
     Loaders should be updated to allow passing options via loader options in module.rules.
     Until loaders are updated one can use the LoaderOptionsPlugin to pass these options to the loader:
     plugins: [
       new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           pulgins: …
         }
       })
     ]
 - configuration.module has an unknown property 'roules'. These properties are valid:
   object { defaultRules?, exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, generator?, noParse?, parser?, rules?, strictExportPresence?, strictThisContextOnImports?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp? }
   -> Options affecting the normal modules (`NormalModuleFactory`).
```

### 出现原因：

- ​	**这一段的意思是webpack.config.js错误，原因是这个配置文件的版本和我们当前安装的webpack的版本不匹配。**

```web-idl
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
```

- **意思是webpack.config.js这个配置文件里的module属性有一个未知的配置项loaders，当前安装的webpack版本已经去掉了这个配置。**

  ```web-idl
  configuration.module has an unknown property ‘loaders’.
  ```

当前配置版本为：

```json
"devDependencies": {
        "clean-webpack-plugin": "^4.0.0",
        "cross-env": "^7.0.3",
        "html-webpack-plugin": "^5.5.0",
        "ts-loader": "^9.3.1",
        "typescript": "^4.7.4",
        "webpack": "^5.73.0",
        "webpack-cli": "^4.10.0",
        "webpack-dev-server": "^4.9.3"
    }
```

- 总结原因：webpack版本与typescript版本不兼容导致项目无法运行

### 解决方案：

使用npm un ×××卸载当前webpack和ts-loader版本，并安装特定版本号

```web-idl
npm install webpack@4.35.3  --save-dev
npm install webpack-cli@3.3.6  --save-dev

npm install awesome-typescript-loader@5.2.1  --save-dev // 负责 将 TS 转换成 ES5语法
npm install typescript@3.5.3  --save-dev  // 负责编译 TS 文件为 JS 文件

```

