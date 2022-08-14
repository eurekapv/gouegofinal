#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "CardIO.h"
#import "CardIOCordovaPlugin.h"
#import "CardIOCreditCardInfo.h"
#import "CardIODetectionMode.h"
#import "CardIOPaymentViewController.h"
#import "CardIOPaymentViewControllerDelegate.h"
#import "CardIOUtilities.h"
#import "CardIOView.h"
#import "CardIOViewDelegate.h"
#import "CDVDevice.h"
#import "CDVAssetLibraryFilesystem.h"
#import "CDVFile.h"
#import "CDVLocalFilesystem.h"
#import "FileOpener2.h"
#import "CDVOrientation.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];

