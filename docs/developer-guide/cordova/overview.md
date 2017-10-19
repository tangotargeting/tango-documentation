# Cordova Plugin Overview



## Download
There are three ways you can add *cordova-plugin-tango* to your Cordova project:

#### via ```config.xml``` dependency
```xml
<plugin name="cordova-plugin-tango" spec="<specify-version>" />
```
#### from npmjs
Navigate to your project and run the following line:

```
cordova plugin add cordova-plugin-tango
```

#### from Git
Navigate to your project and run:

```bash
cordova plugin add https://github.com/tangotargeting/cordova-plugin-tango.git
```

## Installation

- [Android](android.md)
- [iOS](ios.md)

## Usage

### Prepare the SDK

In order to use it correctly, Tango Targeting SDK should be initialized as soon as possible when your Cordova App launches. In your project's ***index.js*** add the following line at the top of your `onDeviceReady` method.

``` javascript
window.TangoPlugin.initialize('your-tango-sdk-key');
```

This will register the device on TangoTargeting and prepare it for consuming campaigns.

!!! Important
    To find your Tango API KEY [Go to Console :fa-external-link:](https://app.tangotargeting.com/) and locate the card **Tango SDK Key**
    ![Dashboard Overview](../../images/content/locate-apikey-overview.png)
    then hover it and click the copy icon on the right.
    ![Tango SDK Key](../../images/content/locate-api-key-copy.png)

!!! note
	Explicitly initializing Tango is only needed for iOS. On Android the SDK auto-initializez, provided it can find the API Key in the manifest file. See [Android Installation](https://github.com/tangotargeting/cordova-plugin-tango/blob/master/INSTALLATION-Android.md).

### Trigger an Automated Campaign

Automated campaigns can be triggered using the following method call:

``` javascript
window.TangoPlugin.trigger('your-automated-campaign-trigger');
```

You can find the campaign trigger string by clicking on the campaign in your Tango Console.

### Handle custom actions

Handling a custom action is as easy as extending `TangoPlugin` with the following method:

```javascript
window.TangoPlugin.onCustomAction = function(action){
    // identify the action and do stuff
};
```

### Manage tags

You can add segments to a device to allow it to widen the pool of campaigns it can receive with the following method:

``` javascript
window.TangoPlugin.addSegments(["first-segment", "second-segment"]);
```


## Troubleshooting

1. If you completed the integration but don't receive any campaign, make sure you use the the API Key (see above how to find your API Key) and **NOT** the Public API Key.

2. Sometimes, depending on the version of your Cordova Framework version or Cordova wrappers like Ionic or Phonegap, the configurations in **config.xml** may not be applied to the platforms/android/AndroidManifest.xml. To fix this you can use the **cordova-custom-config** plugin which will make sure the configurations will pe applied to their respective platforms.  


[1]: http://tangotargeting.com