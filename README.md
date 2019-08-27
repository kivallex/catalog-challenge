Coding Challenge for Catalog Internship

API:- https://api.ratesapi.io/api/{date}?base={base}
date:- should be in format of yyyy-dd-mm
base:- GBP or USD

You have to create a page with with list of currency and exchange value in the header of page you have to provide a date picker and base radio choice(keep GBP as default selected).
User can change date using date picker and select the base using radio button choice. for example if user select 4th Mar. 2019 in date and USD in base so api url will be https://api.ratesapi.io/api/2019-04-03??base=GBP

In response for this API you will get exchange price for difference currency from USD(you can check the sample data in here ). So you have to show received data in table with 2 column
Currency and Exchange Rate(up to 2 decimal place) something like below.
Currency . Exchange Rate
HKD 12.51

Along with this you have to provide sort option on page with following option

1. Low-max exchange rate
2. Max-low exchange rate
3. Currency name ASC
4. Currency name DESC

Basic UI without micro interaction will work but it should be functional.
You have to provide the solution by monday EOD 26th Aug.2019 PST.

Instruction:

1. Open terminal to where catalog-challenge is saved.
2. Run "nodemon index.js" command on your terminal from /catalog-challenge
3. Go in to the client folder by using "cd cilent/" from /catalog-challenge
4. Once you are in client folder, run "npm start"

If you do not run both at the same time, you will not be able to see the list of Currencies and Exchange Rates
