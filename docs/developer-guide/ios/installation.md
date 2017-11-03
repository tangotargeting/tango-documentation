### Requirements

- iOS 9.0+ for Tango framework only
- iOS 10.0+ if you use both Tango and TangoRichNotification framework
- Xcode 8.1+
- Swift 3.2+

### Install with CocoaPods

CocoaPods is a dependency manager, which automates and simplifies the process of using 3rd-party libraries in your projects. See the [Getting Started](https://guides.cocoapods.org/using/getting-started.html) guide for more information. You can install it with the following terminal command:

```
$ gem install cocoapods
```

After installing go to your project directory and type this commad:

```
$ pod init
```

In project folder it will appear a file called Podfile. Open it and integrate Tango by typing:

```
target 'TargetName' do
  use_frameworks!
  pod 'Tango', '~> 1.0.14'
end
```

After filling the Podfile save it and run the following command in the Terminal:

```
$ pod install
```

Close your project, go to your project location on disk and open the workspace the newly created `.xcworkspace` file inside your project directory. Continue by reading the [Prepare and initialize](/developer-guide/ios/prepare-and-initialize/) guide.
