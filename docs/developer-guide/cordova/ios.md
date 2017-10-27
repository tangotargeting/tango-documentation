# Cordova iOS installation
### Prepare platform
1.  If you don't have the iOS platform in your project, use the following line to add it:
```
cordova platform add ios
```
2.  Navigate to `yourCordovaProject/platforms/ios` and open the `.xcworkspace` file with Xcode.
3.  Select **yourCordovaProject** from Xcode Project Navigator. Then, select *Build Settings*,
    search for **Always Embed Swift Standard Libraries** and set it to **YES**.
4.  You also need to code sign your app, for that please follow [this guide](https://developer.apple.com/support/code-signing/).
5.  Build and run.

### Integrate Tango SDK
Please follow the [iOS project installation guide](/developer-guide/ios/installation/#ios-10-rich-notifications) in order to complete your Tango iOS SDK integration.
