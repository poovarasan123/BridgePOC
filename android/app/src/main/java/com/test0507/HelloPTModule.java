package com.test0507;
import android.provider.MediaStore;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.jetbrains.annotations.NotNull;

public class HelloPTModule extends ReactContextBaseJavaModule {
     public HelloPTModule (@Nullable ReactApplicationContext reactContext){
         super(reactContext);
     }
    @Override
    public String getName() {
        return "HelloPT";
    }

    @ReactMethod
    public void sayHello (String name, Callback cb) {
        try {
            String hello = "Hello " + name;
            cb.invoke(null, hello);
        } catch (Exception err) {
            cb.invoke(err, null);
        }
    }

    public void startNewActivity(String activityClassName, Callback cb) {
        try {
            // Create an intent to start a new activity
            Intent intent = new Intent(getCurrentActivity(), Class.forName(activityClassName));

            // You can add extra data to the intent if needed
            // intent.putExtra("key", "value");

            // Start the new activity
            getCurrentActivity().startActivity(intent);

            // Callback success
            cb.invoke(null, "Activity started successfully");
        } catch (Exception e) {
            // Callback error
            cb.invoke(e.getMessage(), null);
        }
    }
}