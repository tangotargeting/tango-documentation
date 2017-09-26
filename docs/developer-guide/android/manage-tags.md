Tags are a useful way to target specific users. Every device that has an associated tag (segment) will receive campaigns that are also associated with that tag. 

To manage the tags on Android devices we have provided three useful static methods:

* `#!java Tango.addTags(Set<String>)` - associates a set of tags with the current device;
* `#!java Tango.deleteTags(Set<String>)` - removes a set of tags for the current device;
* `#!java Tango.getTags()` - returns a set of tags associated with the device.

!!! note
	It is important to note the fact that tags can be associated with the device externally. However, `#!java Tango.getTags()` will only return the tags managed locally with `#!java Tango.addTags()` and `#!java Tango.deleteTags()`.