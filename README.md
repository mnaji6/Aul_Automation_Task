# Aul Automation Task

This repo contains tests written in Cypress to verify purchasing a device from Amazon store.

The test case covers the following steps:

##### 1. Login with a valid email address/password to Amazon store.
##### 2. Search for a certain product defined in the application configuration.
##### 3. Select the first product from the search results.
##### 4. Add the selected product to the shopping cart.
##### 5. Proceed to checkout page.
##### 6. Verify that error messages appear upon entering an empty shipping address.
##### 7. Verify that error messages disappear after confirming a valid US shipping address

## Requires
1. [node](https://nodejs.org/en/)
1. [git](https://git-scm.com/)

## Setup
1. clone: `git@github.com:mnaji6/Aul_Automation_Task.git`
2. install: `npm i`

## Run the Tests
run: `npx cypress open`

---

![Test Run Video] (https://www.dropbox.com/s/t9u8pl6xorteico/2021-07-01-21-01-59.mp4?dl=0)

## Note for reviewers:

Please note that I had trouble running the automation tasks against google store, due to some security issues.
I have tried different workarounds, browsers, cypress versions. 
it ended up that google store is blocking cypress automation and I am keep getting blank screen after pickng the region.
so I had to do the same tests on a different store, I used amazon store.

An email has been sent earlier to Esmat describing the issue.
