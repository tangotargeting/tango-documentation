# Cordova iOS installation

1.  If you don't have the iOS platform in your project, use the following line to add it:
```
cordova platform add ios
```
2.  Navigate to `yourCordovaProject/platforms/ios` and open the `.xcworkspace` file with Xcode.
3.  Select **yourCordovaProject** from Xcode Project Navigator. Then, select *Build Settings*, 
    search for **Always Embed Swift Standard Libraries** and set it to **YES**.
4.  You also need to code sign your app, for that please follow [this guide](https://developer.apple.com/support/code-signing/).
5.  Build and run.

### iOS 10 Rich Notifications

Tango Targeting SDK has support for iOS 10 notifications attachments which enables you to add images and animated GIFs in a notification. For using this functionality you will need to create a [notification service extension](https://developer.apple.com/reference/usernotifications/unnotificationserviceextension/). 

Create a new iOS target in *Xcode (File -> New -> Target)* and select the `Notification Service Extension` type
![NotificationServiceExtension image](../../images/content/ios-notification-service-extension.png)

Go to `"yourCordovaProject"/platforms/ios` and open `Podfile`, then add the `TangoRichNotification` framework to this target, by typing following lines:
```
target 'Your-NotificationServiceExtesion-Target-Name' do
	use_frameworks!
	pod 'TangoRichNotification', '~> 1.0.1'
end
```

TangoRichNotification is developed for iOS 10.0 or higher, this means you should also update the `platform :ios, '9.0'` to `10.0`.
After changing and saving the Podfile  run the following command in the Terminal:

```
$ pod install
```

iOS 10 Notification Framework installed.

### TangoRichNotification framework

A few changes need to be made to `NotificationsService.swift` file.

#### Import `TangoRichNotification`
After creating the Notification service extension, go to `NotificationService.swift` and add the following import:

``` objc
import TangoRichNotification
```

#### Change `didReceive` method
In `didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent)` method replace:
``` objc
if let bestAttemptContent = bestAttemptContent {
    // Modify the notification content here...
    bestAttemptContent.title = "\(bestAttemptContent.title) [modified]"
    contentHandler(bestAttemptContent)
}
```

with:

``` objc
if let bestAttemptContent = bestAttemptContent {
    TangoRichNotification.setupRichContent(content: bestAttemptContent,  apiKey: "your-api-key", completionHandler: { (content) in contentHandler(content)})
}
```

#### Build and run

### Push Notifications Capabilities

In Xcode click on your project root. Then under *Targets* select your project then choose the *Capabilities* pane. Now enable **Push Notifications**: 

![PushNotificatioCapabilities image](../../images/content/ios-enable-push-notifications.png)

Enable **Background Modes**, then check **Remote notifications** as presented in the image below.

![BackgroundModes image](../../images/content/ios-enable-background-modes.png)

### APNS Setup
After you setup the framework in order to use push notification you should create an APNS Certificate which require membership in the [iOS Developer Program](https://developer.apple.com/programs/).

Go to [Apple Developer Members Center](https://developer.apple.com/account/ios/certificate/) click on App IDs from Identifiers section.

![AppIds image](../../images/content/ios-app-ids.png)

1. Select your app id. If you don't have an app id created select +  button and fill out the form, be sure you check Push Notification checkbox.
2. Expand your app by selecting your app id and you will see a field named Push Notifications with yellow or green status icons for development or distribution: ![PushNotificationStatus image](../../images/content/ios-push-notifications-status.png)
3. Click edit button, go to Push Notifications section and press the button create certificate for distribution or development.![CreateCertificate image](../../images/content/ios-create-certificate.png) Follow up the instructions to create an Certificate Signing Request (CSR) file from your Mac. And press continue.
4. Upload the CSR and after that press download to get the Certificate.
5. Open the certificate. Opening the certificate will open Keychain Access.
6. Select your certificate from  Keychain Access in My Certificates section. If the certificate is not here try in Certificate section. Right clik on it and then Export "Apple iOS Development/Distribution Push Service: your_app_bundle". 
This command will export the certificate in a .p12 file with a password.

### Add Certificate to Tango
After generating the Push Notification certificate go [here](https://app.tangotargeting.com/app) and create a new iOS app:

![CreateiOSApp image](../../images/content/ios-create-ios-app.png)

After that you should fill the form with your app data:
- insert app bundle id
- insert app name
- drag and drop  .p12 file from previous step

![AddCertificate image](../../images/content/ios-add-certificate.png)

## Location campaigns

If you are going to use a location campaign you need to add in your plist the following key `NSLocationAlwaysUsageDescription`.

[1]: http://tangotargeting.com