# HTMail Builder

Expedite marketing and transactional HTML email development with the help of Gulp, SASS, HAML, Inline CSS and [Litmus](https://litmus.com/checklist) for cross-app and cross-browser testing

##### What are transactional emails?

Typically any email that is triggered by or sent automatically from your application.

* Welcome emails
* Actionable emails
* Password resets
* Receipts
* Monthly invoices
* Support requests
* App error alerts
* Reminders
* etc.

#### Setup

* Make sure you have at least Node 4.3 installed by running

`node --version`

* Clone this repo

`git clone https://github.com/nsarafa/HTMail.git`

* Change directory into it

`cd your/path/to/HTMail`

Install all the things

`npm install`

#### Using Gulp

Compile HAML to HTML

`gulp haml`

Compile SASS to CSS

`gulp sass`

Inline your CSS, as well as compile your SASS to CSS

`gulp inline`

Compile your HAML, SCSS while Inlining the compiled CSS into your HTML in real time

`gulp watch`

#### Running Tests

1. After you have compiled your email, run `gulp test`
2. Open [Litmus email dashboard](https://litmus.com/checklist)
3. Click on your email
 * If you don't have Litmus account please see __Litmus Test Setup__ below and set up your account

#### Litmus HTML Email Testing Suite Setup
 
1. Open `gulpfile.js`
1. Find the Litmus configuration and update the configuration with your litmus username, password, organization's litmus URL
2. Next, choose email clients to test email against by..
 * List of available email test clients can be found here - https://<YOURAPPNAME>.litmus.com/emails/clients.xml
 * After you pick the clients you want to test, copy their <application_code>, open gulpfile.js and add your chose <application_code> to the litmus config applications array 
3. Save gulpfile.js and run `gulp test`
4. See your email test results on your litmus account' checklist [here](https://litmus.com/checklist/)

### TODO

* Explore alternatives to Litmus for cross-app and cross-browser email testing as Litmus is very expensive
* Re-write `gulp compile` function with gulp-css-inline and test deployment included
* Integrate documentation markdown tool for inline documentation that outputs to wiki
* Integrate global SASS variable file for easy to implement brand specific styles 
* Expand module sets
* Integrate [BrowserSync](https://www.browsersync.io/)
* Consolidate gulp functions
* Introduce Outlook specific styles [(Reference)](http://templates.mailchimp.com/development/css/outlook-conditional-css/)
* Introduce Style reset [(Reference)](http://templates.mailchimp.com/development/css/reset-styles/) 
* Add example email template(s)
