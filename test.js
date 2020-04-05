
async function testPage(page) {
  const URL = process.env.URL || 'http://lucianabruscino.com/'; 
  
  await page.goto(URL, {waitUntil : 'networkidle2' });
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  const navigationStart = performanceTiming.navigationStart;
  //The next line outputs all browsers Performance timing events
  //console.log("performanceTiming", performanceTiming);

  //specify which event is of interest
  const testFocusOn = 'domComplete';

  const domCompleteTime =  performanceTiming[testFocusOn] - navigationStart;
  return domCompleteTime;

}

module.exports = testPage;