## TradeMe API Automation Practice Instructions

**[Trade Me](https://www.trademe.co.nz/)** is New Zealand's largest online auction and classifieds website.

This practice picks 10 typical TradeMe APIs aiming to demonstrate the API automation testing and CI process.

- #### [GitHub repository](https://github.com/ifulltest/postman)

- #### [Repository instructions](https://ifulltest.github.io/postman/)

- #### Panorama for this practice

![](https://ifulltest.github.io/images/tm-api-automation-panorama.webp)

## Preparations Stage

- #### TradeMe UI side

##### [Trademe sandbox front-end user register](https://ifulltest.github.io/en/posts/tm-api-first-demo/#2register-a-tradme-sandbox-userhttpswwwtmsandboxconzmembersregisteraspx)

- #### TradeMe API side

##### [Trademe sandbox application register](https://ifulltest.github.io/en/posts/tm-api-first-demo/#3register-your-api-applicationhttpsdevelopertrademeconzapi-overviewregistering-an-application)

##### [Trademe sandbox authorization](https://ifulltest.github.io/en/posts/tm-api-first-demo/#4authenticationhttpsdevelopertrademeconzapi-overviewauthentication)

- #### Local environment preparations

##### **Postman** - API testing tool. [How to install Postman?](https://ifulltest.github.io/en/posts/postman-installation/)

**Newman** - Postman API testing reports generating tool. [How to install Newman?](https://ifulltest.github.io/en/posts/newman-installation/)

##### **Git Bash** - Transfers files between local and GitHub.  [How to install Git Bash?](https://ifulltest.github.io/en/posts/git-bash-installation/)

##### **GitHub** - Stores the repository of this practice.

##### **JDK** - Jenkins runtime environment. [How to install JDK?](https://ifulltest.github.io/en/posts/jdk-installation/)

##### **Jenkins** - CICD tool. [How to install Jenkins?](https://ifulltest.github.io/en/posts/jenkins-installation/)

##### **Node.js** - back-end JavaScript runtime environment. [How to install Node.js?](https://ifulltest.github.io/en/posts/nodejs-installation/)

- #### Local working directory


##### collections - Postman and Node.js script files

​	- nodemailer.js - email stakeholder the testing reports by this script

​	- tradeMeSandBox.postman_collection.json - Postman positive cases script

​	- tradeMeSandBox-Negative.postman_collection.json - Postman negative cases script

![](https://ifulltest.github.io/images/tm-readme-collections.webp)

##### data - Postman environment variables and other temporary data files

##### node_modules folder

​	- fs module: generates when 1st time installing the Node.js

​	- moment module: gets the current time.

​	- nodemailer module: sends the email to stakeholders

##### reports - Newman TXT and HTML report files

![](https://ifulltest.github.io/images/tm-readme-reports.webp)

##### postman_github folder - A clone of the above local working directory on the GitHub

![](https://ifulltest.github.io/images/tm-readme-repository-structure1.webp)

- #### Quick way to start your first API testing

##### [Trade Me-1-API testing first demo](https://ifulltest.github.io/en/posts/tm-api-first-demo/)



## Scripting Stage

- #### TradeMe UI side

##### [Typical transactions front-end UI and back-end API relationships](https://ifulltest.github.io/en/posts/tm-api-typical-transactions/)

- #### TradeMe API side

##### 	[Trade Me-3-Retrieve general categories API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-general-categories/)

##### 	[Trade Me-4-Retrieve your watchlist API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-watchlist/)

##### 	[Trade Me-5-Remove a listing from your watchlist API testing](https://ifulltest.github.io/en/posts/tm-api-rm-a-listing-from-watchlist/)

##### 	[Trade Me-6-Retrieve closing soon listings API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-closing-soon-listings/)

##### 	[Trade Me-7-Add a listing to your watchlist API testing](https://ifulltest.github.io/en/posts/tm-api-add-a-listing-to-watchlist/)

##### 	[Trade Me-8-Retrieve your won items API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-won-items/)

##### 	[Trade Me-9-Remove a purchase from your won items list API testing](https://ifulltest.github.io/en/posts/tm-api-rm-a-purchase-from-won-list/)

##### 	[Trade Me-10-General search API testing](https://ifulltest.github.io/en/posts/tm-api-general-search/)

##### 	[Trade Me-11-Retrieve the details of a single listing API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-listings-details/)

##### 	[Trade Me-12-Buy an auction using Buy Now API scripting](https://ifulltest.github.io/en/posts/tm-api-buy-an-auction-using-buy-now/#api-testing-script-debugging)



## Reports and CI Stage

Generating report by Collection Runner or Newman, and the Jenkins CI process

- #### [Trade Me-13-scenarios-and-newman-reports](https://ifulltest.github.io/en/posts/tm-api-scenarios-and-newman-report/)

- #### [Trade Me-14-Jenkins-CI-process](https://ifulltest.github.io/en/posts/tm-api-jenkins-cicd-process/)



## Fast way to start your testing

- #### Initialization your local working folders

```markdown
rem Initialization your local working folders
pushd d:\Software && md postman\collections postman\data postman\reports\hisreports postman\postman_github
```

- #### Set your postman home directory

```markdown
rem set your postman home directory, this example is 'D:\Software\postman'
setx "POSTMAN_HOME" "D:\Software\postman" /M
```

- #### Clone demo GitHub repository 

```markdown
rem clone demo GitHub repository 
pushd %POSTMAN_HOME%\postman_github && git init && git clone https://github.com/ifulltest/postman.git
```

- #### Copy GitHub demo collections and data to your local working directory

```markdown
rem copy GitHub demo collections and data to your local working directory
copy %POSTMAN_HOME%\postman_github\collections\* %POSTMAN_HOME%\collections\ && copy %POSTMAN_HOME%\postman_github\data\* %POSTMAN_HOME%\data\*
```

- #### Import collections into your Postman

![](https://ifulltest.github.io/images/tm-readme-postman-import-1.webp)

![](https://ifulltest.github.io/images/tm-readme-postman-import-2.webp)

- #### Import Postman environment variables into your Postman

![](https://ifulltest.github.io/images/tm-readme-postman-import-3.webp)

![](https://ifulltest.github.io/images/tm-readme-postman-import-4.webp)

- #### Replace with your authentication info on 'Authorization - OAuth 1.0' of your Postman. 

![](https://ifulltest.github.io/images/tm-readme-postman-auth-replace.webp)

- #### Start your own API automation testing journey

Till now, you can start to practice the API automation testing and CI process. **Good luck! :）**

