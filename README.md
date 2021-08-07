## Repository instructions of trademe API automation practice realized by Postman

- #### [GitHub repository entrance](https://github.com/ifulltest/postman)

- #### [Repository instructions entrance](https://ifulltest.github.io/postman/)

- #### This repository stores the Trade Me API automation practice-related documents.

- #### **[Trade Me](https://www.trademe.co.nz/)** is New Zealand's largest online auction and classifieds website.

- #### This practice aims to demonstrate the API automation testing plus the CI process.

- #### The main tools and their usage used in the practice are as below:

  **Postman** - API testing tool.

  **Newman** - Postman API testing reports generating tool.

  **Git Bash** - Transfers files between local and GitHub.

  **GitHub** - Stores the repository of this practice.

  **JDK** - Jenkins runtime environment.

  **Jenkins** - CICD tool.

  **Node.js** - back-end JavaScript runtime environment.

## Repository structure

![](https://ifulltest.github.io/images/tm-readme-repository-structure1.webp)

- #### Collections - API automation testing-related scripts will all be stored here

![](https://ifulltest.github.io/images/tm-readme-collections.webp)

##### 			nodemailer.js - email stakeholder the testing reports by this script

##### 			tradeMeSandBox.postman_collection.json - Postman positive cases script

##### 			tradeMeSandBox-Negative.postman_collection.json - Postman negative cases script

- #### data - related temporary data will all be stored here

##### 		    tradeMeSandBox.postman_environment.json - Postman environment variables

- #### node_modules - Node.js component, Node.js-related method will all be stored here.

![](https://ifulltest.github.io/images/tm-readme-node_modules.webp)

##### 			moment - As one of the Node.js modules, it is invoked by the nodemailer.js when getting the current time.

##### 			nodemailer - As one of the Node.js modules, it is invoked by the nodemailer.js when sending the email to stakeholders.

...

- #### reports - API automation testing-related reports will all be stored here

  ![](https://ifulltest.github.io/images/tm-readme-reports.webp)

  ##### 		newmanrpt-20210804211407.html - Postman positive cases HTML report file.

  ##### 		newmanrpt-20210804211407.txt - Postman positive cases TXT report file.

  ##### 		newmanrpt-20210804211418-neg.html - Postman negative cases HTML report file.

  ##### 		newmanrpt-20210804211418-neg.txt - Postman negative cases TXT report file.

- #### README.md - repository instructions

## How to Run TradeMe API testing and CI process

- #### Steps of TradeMe API testing and CI process

Local environment preparations -> Trademe environment preparations -> Import Postman collections and environment variables file into Postman -> Replace authorization related information on Postman with your personal info -> Run Postman collection runner to check the scripts all right -> Run Newman to check the reports all good -> Create Jenkins job to get reports, push reports onto GitHub, and email stakeholders the reports info

- #### Local environment preparations


##### *Before execute the full API automation testing process, you need to install some tools to your local environment. Such as the Postman, Node.js, Newman, JDK, Jenkins, Git Bash, etc.* 

##### [How to install Postman?](https://ifulltest.github.io/en/posts/postman-installation/)

##### [How to install Node.js?](https://ifulltest.github.io/en/posts/nodejs-installation/)

##### [How to install Newman?](https://ifulltest.github.io/en/posts/newman-installation/)

##### [How to install JDK?](https://ifulltest.github.io/en/posts/jdk-installation/)

##### [How to install Jenkins?](https://ifulltest.github.io/en/posts/jenkins-installation/)

##### [How to install Git Bash?](https://ifulltest.github.io/en/posts/git-bash-installation/)

- #### Trademe environment preparations


Trademe environment preparations includes 'sandbox front-end user register', 'Trademe sandbox application register', 'Trademe sandbox authorization'

##### [Trademe sandbox front-end user register](https://ifulltest.github.io/en/posts/tm-api-first-demo/#2register-a-tradme-sandbox-userhttpswwwtmsandboxconzmembersregisteraspx)

##### [Trademe sandbox application register](https://ifulltest.github.io/en/posts/tm-api-first-demo/#3register-your-api-applicationhttpsdevelopertrademeconzapi-overviewregistering-an-application)

##### [Trademe sandbox authorization](https://ifulltest.github.io/en/posts/tm-api-first-demo/#4authenticationhttpsdevelopertrademeconzapi-overviewauthentication)

- #### Import Postman collections and environment variables file into Postman


![](https://ifulltest.github.io/images/tm-readme-postman-import-1.webp)

![](https://ifulltest.github.io/images/tm-readme-postman-import-2.webp)

![](https://ifulltest.github.io/images/tm-readme-postman-import-3.webp)

![](https://ifulltest.github.io/images/tm-readme-postman-import-4.webp)

- #### Replace authorization related information on Postman with your personal info


***Follow the authorization process to get your own authentication related Consumer Key, Consumer Secret, Access Token, Token Secret.***

##### [How to get authentication?](https://ifulltest.github.io/en/posts/tm-api-first-demo/#4authenticationhttpsdevelopertrademeconzapi-overviewauthentication)

##### Replace your authentication information to related fields of 'Authorization - OAuth 1.0' in Postman. 

![](https://ifulltest.github.io/images/tm-readme-postman-auth-replace.webp)

- #### [Run Postman collection runner to check the scripts all right](https://ifulltest.github.io/en/posts/tm-api-scenarios-and-newman-report/#run-your-scenarios-by-the-collection-runner) 


- #### [Run Newman to check the reports all good](https://ifulltest.github.io/en/posts/tm-api-scenarios-and-newman-report/#run-your-scenarios-by--newman)


- #### Create Jenkins job to get reports, push reports onto GitHub, and email stakeholders the reports info


##### Jenkins CI process realization refers to: **[Jenkins CI process Practice](https://ifulltest.github.io/en/posts/tm-api-jenkins-cicd-process/#jenkins-ci-process-practice)**

## Process of publishing the above TradeMe API automation testing practice

Demo product selection -> Demo product API instruction documents -> Demo product front-end website typical transaction selection -> Postman scripting -> Newman reports -> Jenkins CI -> Practice process documenting

- #### Demo product selection


##### [Why choose the Trademe?](https://ifulltest.github.io/en/posts/tm-api-first-demo/#why-choose-the-trademe)

- #### Demo product API instruction documents


#####  [Trademe development documents entrance](https://developer.trademe.co.nz/)

![](https://ifulltest.github.io/images/tm-development-documents.webp)

##### [Trademe getting started](https://developer.trademe.co.nz/getting-started)

![](https://ifulltest.github.io/images/tm-getting-started.webp)

##### [Trademe api-overview](https://developer.trademe.co.nz/api-overview)

![](https://ifulltest.github.io/images/tm-api-overview.webp)

##### [Trademe register an application](https://developer.trademe.co.nz/api-overview/registering-an-application)

![](https://ifulltest.github.io/images/tm-register-an-application.webp)

##### [Trademe API Reference](https://developer.trademe.co.nz/api-reference)

![](https://ifulltest.github.io/images/tm-api-reference.webp)

- #### Demo product front-end website typical transaction selection and details


##### [Typical transaction selection](https://ifulltest.github.io/en/posts/tm-api-typical-transactions/)

##### Selected typical transactions details

##### 	[Trade Me-3-Retrieve general categories API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-general-categories/)

##### 	[Trade Me-4-Retrieve your watchlist API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-watchlist/)

##### 	[Trade Me-5-Remove a listing from your watchlist API testing](https://ifulltest.github.io/en/posts/tm-api-rm-a-listing-from-watchlist/)

##### 	[Trade Me-6-Retrieve closing soon listings API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-closing-soon-listings/)

##### 	[Trade Me-7-Add a listing to your watchlist API testing](https://ifulltest.github.io/en/posts/tm-api-add-a-listing-to-watchlist/)

##### 	[Trade Me-8-Retrieve your won items API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-won-items/)

##### 	[Trade Me-9-Remove a purchase from your won items list API testing](https://ifulltest.github.io/en/posts/tm-api-rm-a-purchase-from-won-list/)

##### 	[Trade Me-10-General search API testing](https://ifulltest.github.io/en/posts/tm-api-general-search/)

##### 	[Trade Me-11-Retrieve the details of a single listing API testing](https://ifulltest.github.io/en/posts/tm-api-retrieve-listings-details/)

##### 	[Trade Me-12-Buy an auction using Buy Now API testing](https://ifulltest.github.io/en/posts/tm-api-buy-an-auction-using-buy-now/)

- #### Postman scripting

##### 	[Trade Me-3-Retrieve general categories API scripting](https://ifulltest.github.io/en/posts/tm-api-retrieve-general-categories/#api-testing-script-debugging)

##### 	[Trade Me-4-Retrieve your watchlist API scripting](https://ifulltest.github.io/en/posts/tm-api-retrieve-watchlist/#api-testing-script-debugging)

##### 	[Trade Me-5-Remove a listing from your watchlist API scripting](https://ifulltest.github.io/en/posts/tm-api-rm-a-listing-from-watchlist/#api-testing-script-debugging)

##### 	[Trade Me-6-Retrieve closing soon listings API scripting](https://ifulltest.github.io/en/posts/tm-api-retrieve-closing-soon-listings/#api-testing-script-debugging)

##### 	[Trade Me-7-Add a listing to your watchlist API scripting](https://ifulltest.github.io/en/posts/tm-api-add-a-listing-to-watchlist/#api-testing-script-debugging)

##### 	[Trade Me-8-Retrieve your won items API scripting](https://ifulltest.github.io/en/posts/tm-api-retrieve-won-items/#api-testing-script-debugging)

##### 	[Trade Me-9-Remove a purchase from your won items list API scripting](https://ifulltest.github.io/en/posts/tm-api-rm-a-purchase-from-won-list/#api-testing-script-debugging)

##### 	[Trade Me-10-General search API scripting](https://ifulltest.github.io/en/posts/tm-api-general-search/#api-testing-script-debugging)

##### 	[Trade Me-11-Retrieve the details of a single listing API scripting](https://ifulltest.github.io/en/posts/tm-api-retrieve-listings-details/#api-testing-script-debugging)

##### 	[Trade Me-12-Buy an auction using Buy Now API scripting](https://ifulltest.github.io/en/posts/tm-api-buy-an-auction-using-buy-now/#api-testing-script-debugging)

- #### Newman reports


##### Newman reports generating refers to: [Run your scenarios by ‘Newman’](https://ifulltest.github.io/en/posts/tm-api-scenarios-and-newman-report/#run-your-scenarios-by--newman)

- #### Jenkins CI

##### Jenkins CI process refers to: [Trade Me-14-Jenkins-CI-process](https://ifulltest.github.io/en/posts/tm-api-jenkins-cicd-process/)

- #### Practice process documenting

##### Practice process documenting refers to: [README](https://github.com/ifulltest/postman#readme)

