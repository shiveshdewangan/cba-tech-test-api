## CBA Tech Test - API Automation

#### Technology used - CucumberJS for BDD, SupertestJs, JavaScript, NodeJs, CircleCI, Chai Assertions

### Running locally
- `git clone https://github.com/shiveshdewangan/cba-tech-test-api.git`
- `cd cba-tech-test-api`
- `npm install`
- `npm run test`
- `npm run generate:report`

### Running on Circle CI
- I have added CI Steps under `.circleci/config.yml` which enables us to run it on **Circle CI Pipeline**.
- Run it on Circle CI here - https://app.circleci.com/pipelines/github/shiveshdewangan/cba-tech-test-api

### Test Report
- After running the tests locally on command line, you can check the cucumber report published globally at link generated. It looks something like this - `https://reports.cucumber.io/reports/8f5ffc09-c87e-4513-8ff9-bb29c77510a9`.

### Issues and Bugs
For issues or bugs please check within issues folder

### Achievements
- ✅ BDD with CucumberJs
- ✅ Assertions for both verification and validations wherever necessary
- ✅ Code modularity/reuse of methods is achieved
- ✅ Right Setup and teardown of tests
- ✅ CucumberJs HTML Reporting
