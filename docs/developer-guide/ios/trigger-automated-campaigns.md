Triggering an automated campaign with Tango Targeting SDK is straightforward. All you have to do is to use the trigger associated with the campaign and make the call below wherever you think is appropriate in your code.

```swift fct_label="Swift"
Tango.triggerWithKey(trigger: "your-campaign-trigger");
```

```objc fct_label="Objective-C"
[Tango triggerWithKey:@"your-campaign-trigger"];
```
