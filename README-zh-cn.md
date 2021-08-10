## Trade Me API 自动化实践说明

**[Trade Me](https://www.Trade Me.co.nz/)**是新西兰最大的在线拍卖和分类广告网站。

本实践选取了 10 个典型的 Trade Me API，旨在演示 API 自动化测试和 CI 流程。

- #### [GitHub 仓库](https://github.com/ifulltest/postman)

- #### [仓库说明](https://ifulltest.github.io/postman/README-zh-cn) ([英文仓库说明](https://ifulltest.github.io/postman/))

- #### 该实践的技术架构图

![](https://ifulltest.github.io/images/tm-api-technical-structure.webp)

- #### 该实践的全景图 ([看大图点我](https://ifulltest.github.io/images/tm-api-automation-panorama.webp))

![img](https://ifulltest.github.io/images/tm-api-automation-panorama.webp)

## 准备阶段

- #### Trade Me UI 端

##### [Trade Me沙箱前端用户注册](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#2注册trademe沙箱用户点我httpswwwtmsandboxconzmembersregisteraspx)

- #### Trade Me API 端

##### [Trade Me 沙箱应用注册](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#3注册您的api应用点我httpsdevelopertrademeconzapi-overviewregistering-an-application)

##### [Trade Me 沙箱授权](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#4认证点我httpsdevelopertrademeconzapi-overviewauthentication)

- #### 本地环境准备

##### **Postman** - API 测试工具。[如何安装Postman？](https://ifulltest.github.io/zh-cn/posts/postman-installation/)

##### **Newman** - Postman API 测试报告生成工具。[如何安装Newman？](https://ifulltest.github.io/zh-cn/posts/newman-installation/)

##### **Git Bash** - 在本地和 GitHub 之间传输文件。 [如何安装 Git Bash？](https://ifulltest.github.io/zh-cn/posts/git-bash-installation/)

##### **GitHub** - 存储此实践的仓库。

##### **JDK** - Jenkins 运行时环境。[如何安装JDK？](https://ifulltest.github.io/zh-cn/posts/jdk-installation/)

##### **Jenkins** - CICD 工具。[如何安装Jenkins？](https://ifulltest.github.io/zh-cn/posts/jenkins-installation/)

##### **Node.js** - 后端 JavaScript 运行时环境。[如何安装 Node.js？](https://ifulltest.github.io/zh-cn/posts/nodejs-installation/)

- #### 本地工作目录

##### Collections - Postman 和 Node.js 脚本文件

​	\- nodemailer.js: 通过此脚本向相关人员发送测试报告

​	\- Trade MeSandBox.postman_collection.json: Postman正向案例脚本

​	\- Trade MeSandBox-Negative.postman_collection.json: Postman 反向案例脚本

![img](https://ifulltest.github.io/images/tm-readme-collections.webp)

##### data - Postman 环境变量和其他临时数据文件

##### node_modules 文件夹

​	\- fs 模块：第一次安装 Node.js 时生成

​	\- moment 模块：获取当前时间。

​	\- nodemailer 模块：将电子邮件发送给相关人员

##### reports - Newman TXT 和 HTML 报告文件

![img](https://ifulltest.github.io/images/tm-readme-reports.webp)

##### postman_github 文件夹 - GitHub 上上述本地工作目录的克隆

![img](https://ifulltest.github.io/images/tm-readme-repository-structure1.webp)

- #### 开始您的第一个 API 测试

##### [Trade Me-1-API 测试第一个演示](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/)

## 脚本阶段

- #### Trade Me 典型事务前端 UI 和后端 API 的关系

##### [Trade Me-2-典型交易](https://ifulltest.github.io/zh-cn/posts/tm-api-typical-transactions/)

- #### Trade Me API 端测试脚本开发与加强

##### 		[Trade Me-3-检索一般类别 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-general-categories/)

##### 		[Trade Me-4-检索您的监视列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-watchlist/)

##### 		[Trade Me-5-从您的监视列表中删除列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-rm-a-listing-from-watchlist/)

##### 		[Trade Me-6-检索即将关闭列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-closing-soon-listings/)

##### 		[Trade Me-7-将列表添加到您的监视列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-add-a-listing-to-watchlist/)

##### 		[Trade Me-8-检索您赢得的物品 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-won-items/)

##### 		[Trade Me-9-从您赢得的物品列表中删除购买 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-rm-a-purchase-from-won-list/)

##### 		[Trade Me-10-通用搜索API测试](https://ifulltest.github.io/zh-cn/posts/tm-api-general-search/)

##### 		[Trade Me-11-检索单个列表的详细信息 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-listings-details/)

##### 		[Trade Me-12-使用 Buy Now购买拍卖 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-buy-an-auction-using-buy-now/)



## 报告和 CI 阶段

通过 Collection Runner 或 Newman 生成报告，以及 Jenkins CI 过程

- #### [Trade Me-13-场景和Newman报告](https://ifulltest.github.io/zh-cn/posts/tm-api-scenarios-and-newman-report/)

- #### [Trade Me-14-Jenkins-持续集成流程](https://ifulltest.github.io/zh-cn/posts/tm-api-jenkins-cicd-process/)



## 开始您测试的快速方法

- #### 初始化本地工作文件夹

```
rem Initialization your local working folders
pushd d:\Software && md postman\collections postman\data postman\reports\hisreports postman\postman_github
```

- #### 设置您的Postman主目录

```
rem set your postman home directory, this example is 'D:\Software\postman'
setx "POSTMAN_HOME" "D:\Software\postman" /M
```

- #### 克隆演示 GitHub 仓库

```
rem clone demo GitHub repository 
pushd %POSTMAN_HOME%\postman_github && git init && git clone https://github.com/ifulltest/postman.git
```

- #### 将示例GitHub的collections和data复制到本地工作目录

```
rem copy GitHub demo collections and data to your local working directory
copy %POSTMAN_HOME%\postman_github\postman\collections\* %POSTMAN_HOME%\collections\ && copy %POSTMAN_HOME%\postman_github\postman\data\* %POSTMAN_HOME%\data\*
```

- #### 将collections导入您的Postman

![img](https://ifulltest.github.io/images/tm-readme-postman-import-1.webp)

![img](https://ifulltest.github.io/images/tm-readme-postman-import-2.webp)

- #### 将 Postman 环境变量导入 Postman

![img](https://ifulltest.github.io/images/tm-readme-postman-import-3.webp)

![img](https://ifulltest.github.io/images/tm-readme-postman-import-4.webp)

- #### 替换为您 Postman 上“Authorization  - OAuth 1.0”的身份验证信息。

##### 身份验证信息获取参考：[Trade Me 沙箱应用注册](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#3注册您的api应用点我httpsdevelopertrademeconzapi-overviewregistering-an-application) 和 [Trade Me 沙箱授权](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#4认证点我httpsdevelopertrademeconzapi-overviewauthentication)

![img](https://ifulltest.github.io/images/tm-readme-postman-auth-replace.webp)

- #### 替换您'%POSTMAN_HOME%\data\nodemailer.js'文件中的email相关信息为您自己的信息

![](https://ifulltest.github.io/images/tm-api-nodemailer-replace-info.webp)

- #### 开启您自己的 API 自动化测试之旅

##### 到此为止，您就可以开始练习 API 自动化测试和 CI 流程了。**祝你好运！:)**

