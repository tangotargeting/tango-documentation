Tags are a useful way to target specific users. Every device that has an associated tag (segment) will receive campaigns that are also associated with that tag.

To add new segments to an iOS device use the following line:

```swift fct_label="Swift"
  Tango.registerSegments(segments: ["firstSegment", "secondSegment"])
```

```objc fct_label="Objective-C"
[Tango registerSegmentsWithSegments: @[@"first-segment", @"second-segment"]];
```

!!! note
	Segments can be associated with the device externally as well. Those tags will not be accessible on the device.
