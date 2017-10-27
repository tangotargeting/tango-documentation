### Monitor the usage of the applications

!!! important
    Tango Usage monitoring requires Android Lollipop 5.1 and a special permission needs to be requested.
    
!!! important
    We strongly advice not to use this module, unless it is required by the business or app functionalities. 

Tango will monitor all user activity and applications on the device. Each application event (Application moved to foreground, Application moved to background, installed applications) will be monitored and reported with the associated data.


### Add the Gradle dependency

In your app's ``build.gradle`` file add the following dependency.

```groovy
compile ('com.tangotargeting:tango-usage:2.2.2') {
	transitive = true;
}
```
!!! important
    Previous Tango installation steps are required. 

### Requesting special permissions 

Tango provides helper methods for managing special permissions. 

Check for usage permission:
```java
	UsagePermissionUtil.usageStatsPermissionGranted(context); //returns boolean
```
Add the following code for requesting usage permission:
```java
	UsagePermissionUtil.openGrantUsageStatsPermission(context);
```

## You are ready to go!

At this point Tango will monitor and report applications usage stats.
