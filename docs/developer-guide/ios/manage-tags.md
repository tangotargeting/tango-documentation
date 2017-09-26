Tags are a useful way to target specific users. Every device that has an associated tag (segment) will receive campaigns that are also associated with that tag.

To add new segments to an iOS device use the following line:

```swift
func yourCustomMethod() {
    Tango.registerSegments(segments: ["firstSegment", "secondSegment"])
}
```
!!! note
	Segments can be associated with the device externally as well. Those tags will not be accessible on the device.