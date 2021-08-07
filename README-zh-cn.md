## Postman实现Trade Me API自动化实践的仓库说明

- #### [GitHub仓库入口](https://github.com/ifulltest/postman)

- #### [仓库说明入口](https://ifulltest.github.io/postman/readme-zh-cn)

- #### 该仓库存储与 Trade Me API 自动化实践相关的文档。

- #### **[Trade Me](https://www.trademe.co.nz/)**是新西兰最大的在线拍卖和分类广告网站。

- #### 本实践旨在展示 API 自动化测试 + CI 过程。

- #### 实践中用到的主要工具及用途如下：

  **Postman** - API 测试工具。

  **Newman** - Postman API 测试报告生成工具。

  **Git Bash** - 在本地和 GitHub 之间传输文件。

  **GitHub** - 存储此实践的仓库。

  **JDK** - Jenkins 运行环境。

  **Jenkins** - CICD 工具。

  **Node.js** - 后端 JavaScript 运行环境。

## 仓库结构

![img](https://ifulltest.github.io/images/tm-readme-repository-structure1.webp)

- #### Collections - API自动化测试相关的脚本文件都会存放在这里

![img](https://ifulltest.github.io/images/tm-readme-collections.webp)

##### nodemailer.js - 通过此脚本向相关人员发送测试报告

##### tradeMeSandBox.postman_collection.json - Postman正向案例脚本

##### tradeMeSandBox-Negative.postman_collection.json - Postman反向案例脚本

- #### data - 相关的临时数据文件都会存储在这里

##### tradeMeSandBox.postman_environment.json - Postman环境变量文件

- #### node_modules - Node.js 组件，Node.js 相关的方法都会存放在这里。

![img](https://ifulltest.github.io/images/tm-readme-node_modules.webp)

##### moment - 作为 Node.js 模块之一，由 nodemailer.js 调用，以获取当前时间。

##### nodemailer - 作为 Node.js 模块之一，由 nodemailer.js 调用，向相关人员发送电子邮件时。

…

- #### 报告 - API 自动化测试相关的报告文件都将存储在这里

  ![img](https://ifulltest.github.io/images/tm-readme-reports.webp)

  ##### newmanrpt-20210804211407.html - Postman正向案例 HTML 报告文件。

  ##### newmanrpt-20210804211407.txt - Postman正向案例 TXT 报告文件。

  ##### newmanrpt-20210804211418-neg.html - Postman反向案例 HTML 报告文件。

  ##### newmanrpt-20210804211418-neg.txt - Postman反向案例 TXT 报告文件。

- #### README.md - 仓库说明

## 如何运行 TradeMe API 测试和 CI 流程

- #### TradeMe API 测试步骤和 CI 流程

本地环境准备 -> Trademe 环境准备 -> 将 Postman 集合和环境变量文件导入 Postman -> 将 Postman 的授权相关信息替换为你的个人信息 -> 运行 Postman collection runner 检查脚本是否正常 -> 运行 Newman 检查报告一切正常 -> 创建 Jenkins 作业以获取报告，将报告推送到 GitHub，并将报告信息通过电子邮件发送给相关人员

- #### 本地环境准备

##### *在执行完整的 API 自动化测试过程之前，您需要在本地环境中安装一些工具。如 Postman、Node.js、Newman、JDK、Jenkins、Git Bash 等。*

##### [如何安装Postman？](https://ifulltest.github.io/zh-cn/posts/postman-installation/)

##### [如何安装 Node.js？](https://ifulltest.github.io/zh-cn/posts/nodejs-installation/)

##### [如何安装Newman？](https://ifulltest.github.io/zh-cn/posts/newman-installation/)

##### [如何安装JDK？](https://ifulltest.github.io/zh-cn/posts/jdk-installation/)

##### [如何安装Jenkins？](https://ifulltest.github.io/zh-cn/posts/jenkins-installation/)

##### [如何安装 Git Bash？](https://ifulltest.github.io/zh-cn/posts/git-bash-installation/)

- #### Trademe环境准备

Trademe环境准备包括'沙箱前端用户注册'、'Trademe沙箱应用注册'、'Trademe沙箱授权'

##### [Trademe沙箱前端用户注册](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#2register-a-tradme-sandbox-userhttpswwwtmsandboxconzmembersregisteraspx)

##### [Trademe 沙箱应用注册](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#3register-your-api-applicationhttpsdevelopertrademeconzapi-overviewregistering-an-application)

##### [Trademe 沙箱授权](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#4authenticationhttpsdevelopertrademeconzapi-overviewauthentication)

- #### 将 Postman 集合文件和环境变量文件导入 Postman

![img](https://ifulltest.github.io/images/tm-readme-postman-import-1.webp)

![img](https://ifulltest.github.io/images/tm-readme-postman-import-2.webp)

![img](https://ifulltest.github.io/images/tm-readme-postman-import-3.webp)

![img](https://ifulltest.github.io/images/tm-readme-postman-import-4.webp)

- #### 将 Postman 上的授权相关信息替换为您个人的信息

***按着授权流程获取您自己认证相关的Consumer Key、Consumer Secret、Access Token、Token Secret。***

##### [如何获得认证？(点我)](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#4认证点我httpsdevelopertrademeconzapi-overviewauthentication)

##### 将您的身份验证信息替换为 Postman 中“Authorization -> OAuth 1.0”的相关字段。

![img](https://ifulltest.github.io/images/tm-readme-postman-auth-replace.webp)

- #### [运行 Postman collection runner 检查脚本是否正常](https://ifulltest.github.io/zh-cn/posts/tm-api-scenarios-and-newman-report/#由collection-runner运行您的场景)

- #### [运行Newman检查报告一切正常](https://ifulltest.github.io/zh-cn/posts/tm-api-scenarios-and-newman-report/#通过newman运行您的场景)

- #### 创建 Jenkins 作业以获取报告，将报告推送到 GitHub，并将报告信息通过电子邮件发送给相关人员

##### Jenkins CI流程实现参考：**[Jenkins CI流程实践](https://ifulltest.github.io/zh-cn/posts/tm-api-jenkins-cicd-process/#jenkins-ci-process-practice)**

## 以上TradeMe API自动化测试实践的发布流程

Demo产品选择->Demo产品API说明文档->Demo产品前端网站典型交易选择->Postman脚本->Newman报告->Jenkins CI->实践过程文档

- #### 演示产品选择

##### 请参考：[为什么选择 Trademe？](https://ifulltest.github.io/zh-cn/posts/tm-api-first-demo/#为什么选择-trademe)

- #### 演示产品API说明文档

##### [Trademe开发文件入口](https://developer.trademe.co.nz/)

![img](https://ifulltest.github.io/images/tm-development-documents.webp)

##### [Trademe 入门](https://developer.trademe.co.nz/getting-started)

![img](https://ifulltest.github.io/images/tm-getting-started.webp)

##### [Trademe api-概述](https://developer.trademe.co.nz/api-overview)

![img](https://ifulltest.github.io/images/tm-api-overview.webp)

##### [Trademe 注册申请](https://developer.trademe.co.nz/api-overview/registering-an-application)

![img](https://ifulltest.github.io/images/tm-register-an-application.webp)

##### [Trademe API 参考](https://developer.trademe.co.nz/api-reference)

![img](https://ifulltest.github.io/images/tm-api-reference.webp)

- #### Demo产品前端网站典型交易选择

##### [典型交易选择](https://ifulltest.github.io/zh-cn/posts/tm-api-typical-transactions/)

##### 典型交易详解

##### 		[Trade Me-3-检索一般类别 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-general-categories/)

##### 		[Trade Me-4-检索您的监视列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-watchlist/)

##### 		[Trade Me-5-从您的监视列表中删除列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-rm-a-listing-from-watchlist/)

##### 		[Trade Me-6-检索即将关闭列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-closing-soon-listings/)

##### 		[Trade Me-7-将列表添加到您的监视列表 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-add-a-listing-to-watchlist/)

##### 		[Trade Me-8-检索您赢得的物品 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-won-items/)

##### 		[Trade Me-9-从您赢得的物品列表中删除购买 API 测试](https://ifulltest.github.io/zh-cn/posts/tm-api-rm-a-purchase-from-won-list/)

##### 		[Trade Me-10-通用搜索API测试](https://ifulltest.github.io/zh-cn/posts/tm-api-general-search/)

##### 		[Trade Me-11-检索单个列表 API 测试的详细信息](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-listings-details/)

##### 		[Trade Me-12-使用 Buy Now API 测试购买拍卖](https://ifulltest.github.io/zh-cn/posts/tm-api-buy-an-auction-using-buy-now/)

- #### Postman脚本

##### Postman脚本参考：

##### 		[Trade Me-3-检索一般类别 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-general-categories/#api测试脚本调试)

##### 		[Trade Me-4-检索您的监视列表 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-watchlist/#api测试脚本调试)

##### 		[Trade Me-5-从您的监视列表中删除列表 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-rm-a-listing-from-watchlist/#api测试脚本调试)

##### 		[Trade Me-6-检索即将关闭列表 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-closing-soon-listings/#api测试脚本调试)

##### 		[Trade Me-7-将列表添加到您的监视列表 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-add-a-listing-to-watchlist/#api测试脚本调试)

##### 		[Trade Me-8-检索您赢得的物品 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-won-items/#api测试脚本调试)

##### 		[Trade Me-9-从您赢得的物品列表中删除购买 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-rm-a-purchase-from-won-list/#api测试脚本调试)

##### 		[Trade Me-10-通用搜索 API 脚本](https://ifulltest.github.io/zh-cn/posts/tm-api-general-search/#api测试脚本调试)

##### 		[Trade Me-11-检索单个列表 API 脚本的详细信息](https://ifulltest.github.io/zh-cn/posts/tm-api-retrieve-listings-details/#api测试脚本调试)

##### 		[Trade Me-12-使用 Buy Now API 脚本购买拍卖](https://ifulltest.github.io/zh-cn/posts/tm-api-buy-an-auction-using-buy-now/#api测试脚本调试)

- #### Postman报告

##### Postman报告生成参考：[通过“Newman”运行您的场景](https://ifulltest.github.io/zh-cn/posts/tm-api-scenarios-and-newman-report/#通过newman运行您的场景)

- #### Jenkins CI

##### Jenkins CI 流程参考：[Trade Me-14-Jenkins-持续集成流程](https://ifulltest.github.io/zh-cn/posts/tm-api-jenkins-cicd-process/)

- #### 实践过程文档

##### 实践过程文档参考：[README-zh-cn](https://ifulltest.github.io/postman/README-zh-cn)

