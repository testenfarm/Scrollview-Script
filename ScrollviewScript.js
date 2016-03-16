
var target = UIATarget.localTarget();

// START_MODULE ScrollViews Module
var testmodule = "ScrollViews Module";
UIALogger.logStart(testmodule);

UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_1')
target.delay(2);

target.frontMostApp().mainWindow().scrollViews()[0].buttons()["Press me!"].tap();
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_2')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()[0].switches()[0].setValue(0);
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_3')
target.delay(2);
// 1 : true ,0 : False into the setValue.
target.frontMostApp().mainWindow().scrollViews()[0].switches()[0].setValue(0);
// Slider : Define the value to drag the slider
target.frontMostApp().mainWindow().scrollViews()[0].sliders()[0].dragToValue(0.23);

target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_4')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()[0].sliders()[0].dragToValue(0.23);
target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.94, y:0.80}, endOffset:{x:0.33, y:0.81}});
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_5')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.62, y:0.79}, endOffset:{x:0.32, y:0.79}});
target.dragFromToForDuration({x:310.50, y:436.00}, {x:224.50, y:446.50}, 1.0);
target.dragFromToForDuration({x:283.00, y:446.00}, {x:80.00, y:456.50}, 1.0);
target.frontMostApp().mainWindow().scrollViews()[0].tapWithOptions({tapOffset:{x:0.46, y:0.76}});
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_6')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()[0].tapWithOptions({tapOffset:{x:0.34, y:0.76}, tapCount:2});
target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.80, y:0.77}, endOffset:{x:0.20, y:0.78}});
target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.63, y:0.79}, endOffset:{x:0.15, y:0.81}});
target.delay(2);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_7')
target.delay(2);
target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.73, y:0.56}, endOffset:{x:0.09, y:0.57}});

UIALogger.logPass(testmodule);