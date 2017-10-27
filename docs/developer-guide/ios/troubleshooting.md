### Unsupported SWIFT_VERSION value

When using Objective-C projects and Cocoapods 1.3.1, some Swift pods might have an undefined `SWIFT_VERSION`, which would prevent your project from building because of the following error:

> The “Swift Language Version” (SWIFT_VERSION) build setting must be set to a supported value for targets which use Swift. This setting can be set in the build settings editor.

In order to fix this problem, add the following script to your Podfile and run `pod install`:

```
post_install do |installer|
  installer.pods_project.targets.each do |target|
    if ['Alamofire'].include? target.name
      target.build_configurations.each do |config|
          config.build_settings['SWIFT_VERSION'] = '4.0'
      end
    end
  end
end
```

!!! note
    In Tango's case, our only dependency, Alamofire, needs to have it's SWIFT_VERSION version set to 4.0.


### Rich Push Notification image not showing

If you find that Tango rich notifications don't work on your project, please follow these steps:

1. Double check your Tango SDK implementation.
2. Make sure that the `Deployment Target` of your NotificationServiceExtension is the same as your project's.
