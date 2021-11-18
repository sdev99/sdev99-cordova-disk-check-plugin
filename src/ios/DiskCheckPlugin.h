#import <Cordova/CDV.h>

@interface DiskCheckPlugin : CDVPlugin

- (void)info:(CDVInvokedUrlCommand*)command;
-(NSUInteger)getDirectoryFileSize:(NSURL *)directoryUrl;

@end
