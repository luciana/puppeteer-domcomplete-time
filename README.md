# Test Site DomComplete Time with Puppeteer
 This code uses Puppeteer's to access browser performance API to record domComplete times for a particular URL. I personally used this code to A/B test site performance hosted on Content Network Delivery (CDN) to understand performance gains in downloading site content. 


## To Start

 ### Setup
 To setup for running this code, install puppeteer by typing this line on the command line. You must have node installed to use this code.
 
 ```
 	npm i puppeteer 
 ```

 ### Run 
 On the command line, type the command below to run with the default values.

  ```
  node index.js 	#this runs the default values 

  ```

The default values are:
 - URL = http://lucianabruscino.com/
 - Repeat = 1
 

Specify values for:

- URL: which URL you want to test
- Repeat: how many times you want to run the test

### Other Examples

```

URL=https://www.alotofpilates.com repeat=2 node index.js

```
 
