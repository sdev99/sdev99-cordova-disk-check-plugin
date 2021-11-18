# Disk Check Plugin

This plugin allows to get information about disk check in Android / iOS

## Installation

To use this plugin in a project, you have to do:

    cordova plugin add https://github.com/sdev99/sdev99-cordova-disk-check-plugin.git

Add your platforms targeted:

    cordova platform add android
    cordova platform add ios
    cordova platform add windows

## Usage

1- You can get disk information by executing the info function:

    DiskCheckPlugin.info(options, successCallback, errorCallback);

Where options is a javascript object:

    location: 1 // To get information about external storage (For android only)
    location: 2 // To get information about internal storage (For android only)

The result object is like that:

    {
    	"app": 23123, // Space occupied by the current application
    	"total": 34545345435435, // Total space of the device
    	"free": 34324234  // Free space of the device
    }
