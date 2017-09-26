To handle custom [actions](/user-guide/engagement/what-is-a-campaign.md#actions) on Android you have to create a BroadcastReceiver that will intercept the actions:

```Java
public class CustomActionReceiver extends BroadcastReceiver {
  private static final String KEY_CTA = "com.tangotargeting.intent.extra.CTA";

  @Override public void onReceive(Context context, Intent intent) {
    String action = intent.getStringExtra(KEY_CTA);
    if (action != null) {
      // Check what action was received and handle it
    }
  }
}
```
then declare it in the `AndroidManifest.xml` file:
```xml
<application>
    ...
    <receiver android:name=".CustomActionReceiver">
        <intent-filter>
            <action android:name="com.tangotargeting.intent.action.CUSTOM_CTA"/>
        </intent-filter>
    </receiver>
    ...
</application>
```