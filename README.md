# Vanilla Toast (vanilla-toast)
Vanilla Toast is a JavaScript notification element that doesn't require any dependencies

## Demo
Demo application can be found in `/demo` folder.

## How To Use

## Suggested Dependencies For Additional Support
- PEP
- Web Elements

## How To Develop
In order to develop this element, you need to have Node.js installed.  

1. Install all development dependencies using command `npm install`.
2. Start watching TypeScript and SCSS changes with `gulp watch-all`.
3. Edit!  

On Linux systems, if you get error: `Error: watch ... ENOSPC` when executing `gulp watch-all`, then run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` to fix it.

## How To Create Production Release
1. Execute `gulp prod`.
2. Production files can be found in `/dist` folder.
