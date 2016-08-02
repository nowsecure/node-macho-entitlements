macho-entitlements
==================

NodeJS library to extract the entitlements from MACH-O or FAT-MACH-O binaries

Author
------

Sergi Alvarez <pancake@nowsecure.com>

Example
-------

Example:

```xml
$ node test.js TestApp
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>application-identifier</key>
    <string>7TCWUMRD7U.com.e4bf058462-1-42</string>
    <key>com.apple.developer.team-identifier</key>
    <string>7TCWUMRD7U</string>
    <key>get-task-allow</key>
    <false/>
    <key>keychain-access-groups</key>
    <array>
      <string>7TCWUMRD7U.com.e4bf058462-1-42</string>
    </array>
  </dict>
</plist>
```

Example
-------

The API exposes the `.parse` and `.parseFile` methods which load a file or a buffer and extract the entitlements of the first binary found inside the fat-mach0 or mach0.

```js
'use strict';

const machoEntitlements = require('macho-entitlements');
const ent = machoEntitlements.parseFile('/Applications/Twitter.app/Contents/MacOS/Twitter');
console.log(ent.toString());
```
