### iOS 10 Rich Notifications

iOS 10 introduced a new awesome new notifications, with images or gifs, and Tango Rich Notification SDK supports them fully. If you wish to use this functionality you will need to create a [notification service extension](https://developer.apple.com/reference/usernotifications/unnotificationserviceextension/).

Create a new iOS target in Xcode (File -> New -> Target) and select the Notification Service Extension type

[![NotificationServiceExtension image](../../images/content/ios-notification-service-extension.png)](../../images/content/ios-notification-service-extension.png)

You can add the Tango Rich Notifications framework to your extension, by adding the following lines to your podspec:

```
target 'NotificationServiceExtesion-Target-Name' do
  use_frameworks!
  pod 'TangoRichNotification', '~> 1.0.14'
end
```
!!! warning ""
    Don't forget to replace the **NotificationServiceExtesion-Target-Name** in the code snippet above.

After saving the Podfile run the following command in a Terminal window:

```
$ pod install
```

### Tango Rich Notification framework

Navigate into your notification service extension folder, open the `NotificationService` class and add the following import:

```swift fct_label="Swift"
import TangoRichNotification
```

```objc fct_label="Objective-C"
#import <UserNotifications/UserNotifications.h>
#import <TangoRichNotification/TangoRichNotification-Swift.h>
#import <TangoRichNotification/TangoRichNotification.h>
```

Then, in the `didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent)` method replace the following code:
```swift fct_label="Swift"
if let bestAttemptContent = bestAttemptContent {
    // Modify the notification content here...
    bestAttemptContent.title = "\(bestAttemptContent.title) [modified]"
    contentHandler(bestAttemptContent)
}
```

```objc fct_label="Objective-C"
// Modify the notification content here...
self.bestAttemptContent.title = [NSString stringWithFormat:@"%@ [modified]", self.bestAttemptContent.title];

self.contentHandler(self.bestAttemptContent);
```

with:

```swift fct_label="Swift"
if let bestAttemptContent = bestAttemptContent {
    TangoRichNotification.setupRichContent(content: bestAttemptContent,  apiKey: "your-tango-sdk-key", completionHandler: { (content) in contentHandler(content)})
}
```
```objc fct_label="Objective-C"
[TangoRichNotification setupRichContentWithContent:self.bestAttemptContent apiKey:@"your-tango-sdk-key" completionHandler:self.contentHandler];
```
