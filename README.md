####说明

##### **Tags ==> v_origin**

传统开发模式，不使用webpack

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

#####**Tags ==> v_webpack**

使用webpack工具开发react

1.确保已经安装了webpack和react等相关的模块js,和加载器

	npm install

2.创建webpack.config.js文件，和实例DEMO

3.相关文件目录结构
	
	.
	├── README.md
	├── app		//项目目录
	│   ├── js	// js文件存放目录
	│   ├── main.js //程序入口文件
	│   └── sass //scss 样式文件存放目录
	├── demo.html 	//测试页面
	├── dist	//最终打包生成的js文件
	│   └── build.js
	├── node_modules //模块包
	├── package.json
	└── webpack.config.js

4.运行webpack

	webpack --progress --watch 或 npm run bulid 或npm run dev

**注意**
配置好package.json文件

--devtool eval: 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
--content-base dist: 指向设置的输出目录 