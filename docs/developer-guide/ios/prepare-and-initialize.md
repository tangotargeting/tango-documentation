After adding the framework into the project by following the [Installation](installation.md) guide, modify your source code to finalize the integration:

### Tango framework

Open your project AppDelegate.m file and import the Tango framework.

```swift
import Tango
import UserNotifications
```

Add `UNUserNotificationCenterDelegate` in app delegate: 
```swift
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {}
```

In the `didFinishLaunchingWithOptions`, setup notification delegate and initialize the Tango Targeting SDK with your Tango SDK key by calling `Tango.initialize()`.

```swift
UNUserNotificationCenter.current().delegate = self

// Initialize with API key
Tango.initialize(tango: "your-tango-sdk-key")
```

!!! Important
    To find your Tango API KEY [Go to Console :fa-external-link:](https://app.tangotargeting.com/) and locate the card **Tango SDK Key**
    ![Dashboard Overview](../../images/content/locate-apikey-overview.png)
    then hover it and click the copy icon on the right.
    ![Tango SDK Key](../../images/content/locate-api-key-copy.png)

After that you should implement the following delegate methods.
```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    Tango.application(application, didReceiveRemoteNotification: userInfo)
}

func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    Tango.application(application, didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    Tango.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
}

func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any]) {
    Tango.application(application, didReceiveRemoteNotification: userInfo)
}

func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
    Tango.application(application, didRegister: notificationSettings)
}

func application(_ application: UIApplication, didReceive notification: UILocalNotification) {
    Tango.application(application, didReceive: notification)
}
```

For **iOS 10** you should also add: 
```swift
// MARK: UNUserNotificationCenterDelegate Methods

@available(iOS 10.0, *)
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    Tango.userNotificationCenter(center, didReceive: response, withCompletionHandler: completionHandler)
}

@available(iOS 10.0, *)
func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
    Tango.userNotificationCenter(center, willPresent: notification, withCompletionHandler: completionHandler)
}
```

***Important:*** If you are going to use a location campaign you need to add in your `plist` the following key: `NSLocationAlwaysUsageDescription`.

### TangoRichNotification framework

Open the `NotificationService` class you have created following the [Installation Guide](https://github.com/tangotargeting/tango-documentation/wiki/Installation---iOS) and add the following import:

```swift
import TangoRichNotification
```

Then, in the `didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent)` method replace the following code:
```swift
if let bestAttemptContent = bestAttemptContent {
    // Modify the notification content here...
    bestAttemptContent.title = "\(bestAttemptContent.title) [modified]"
    contentHandler(bestAttemptContent)
}
```

with:

```swift
if let bestAttemptContent = bestAttemptContent {
    TangoRichNotification.setupRichContent(content: bestAttemptContent,  apiKey: "your-tango-sdk-key", completionHandler: { (content) in contentHandler(content)})
}
```

### Test

At this point you should be ready to go. To test if the installation succeeded you should enter the Tango Targeting account then create and activate some campaigns. The easiest way is to create a real-time campaign but it pays off to test all campaigns as some of them have specific needs(like location permissions).

If a campaign doesn't trigger it is possible it did not reach the device yet as the synchronization is triggered approximately every ten minutes. To go around this, you could simply restart the application and a synchronization will immediately trigger. Note that real-time campaigns don't need any synchronization to work.
