####说明

传统开发模式

1.安装两个插件 babel-cli 和 babel-preset-react

	npm install -g babel-cli
	npm install babel-preset-react

2.建立相关文件和目录

	├── dist	//编译后的js存放目录,命令可以自动创建
	├── js		//reactJS
	│   ├── react-dom.min.js
	│   └── react.min.js
	├── node_modules	//npm模块
	│   └── babel-preset-react
	├── src 	//源js
	│   └── example.js
	└── test.html

3.运行命令

	babel --presets react src --watch --out-dir dist

**注意：**

某些浏览器需要服务器环境运行
