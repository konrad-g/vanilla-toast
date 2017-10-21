# Vanilla Toast (vanilla-toast)
Vanilla Toast is a tiny, yet powerful JavaScript notification element that doesn't require any dependencies.  

## Demo
[Live Demo](https://konradg.com/vanilla-toast/demo/index.html)  
Demo application can be found in `/demo` folder.  

It shows all use cases.

## Suggested Dependencies For Additional Support
This element is using pointer events. As of today not all browser support this feature.  
[Browser support](http://caniuse.com/#search=pointer%20events)  
  
It might be necessary for you to use [Pointer Events Polyfill](https://github.com/jquery/PEP)  

## To Install With Bower
To use this element with Bower dependency manager, run:  
`bower install vanilla-toast --save`  

## How To Develop
In order to develop this element, you need to have Node.js installed.  

1. Install all development dependencies using command `npm install`.
2. Start watching TypeScript and SCSS changes with `gulp watch-all`.
3. Edit!  

On Linux systems, if you get error: `Error: watch ... ENOSPC` when executing `gulp watch-all`, then run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` to fix it.

## How To Create Production Release
1. Execute `gulp prod`.
2. Production files can be found in `/dist` folder.
