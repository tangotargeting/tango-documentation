Triggering an automated campaign with Tango Targeting SDK is straightforward. All you have to do is to use the trigger associated with the campaign and make the call below wherever you think is appropriate in your code.

```java
TangoAutomation.trigger("your-campaign-trigger");
```

The result of the call is an int describing the result of the trigger call. If you want to do different things depending on the result, transform the code above like this:

```java
int triggerResult = TangoAutomation.trigger("your-campaign-trigger");

switch(triggerResult){
    case TangoAutomation.CAMPAIGN_NOT_STARTED:
        // do stuff if the campaign has not started yet
        break;
    case TangoAutomation.CAMPAIGN_NOT_FOUND:
        // maybe the device is not yet synchronized with the latest campaigns or
        // maybe the tag you provided is wrong 
        break;
    case TangoAutomation.CAMPAIGN_HAS_ENDED:
        // do stuff if the campaign has ended
        break;
    case TangoAutomation.CAMPAIGN_TRIGGERED:
        // do stuff if the campaign triggered
        break;
}
```
!!! Attention
     `TangoAutomation.trigger(String)` must be explicitly called for retries. Meaning, if the campaign starts tomorrow but you called it today, your app is responsible for calling it again tomorrow.
