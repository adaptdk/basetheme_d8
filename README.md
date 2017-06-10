# basetheme_d8
Starter d8 theme for everyday projects

## Some of the features
+ JS-CSS compiling ready
+ css/template file structure already created
+ /user login, errors, tabs and pager styled initially - easy to modify
+ General re-usable mixins (constantly updated)
+ Some templates e.g. views-blocks are modified to have more classes for unique selectors
+ Can use region rendering in nodes same way you can in page.html.twig (see node_preprocess hook)
+ Responsive typography and vertical rhytm with help of [Typi](https://github.com/zellwk/typi) (see typography-settings.scss)
+ Packed with [font-awesome 4.7.0](http://fontawesome.io/) (just uncomment in .info file)
+ Linting ready just uncomment in webpack.config file 



## Once checked out
1. Rename files to proper theme name via console
```
sudo rename 's/d8_theme/newname_theme/' *.*
```
2. Rename all the theme functions and other strings via console
```
sed -i 's/d8_theme/newname_theme/g' *.*
```
OSX
```
sed '.bak' -i 's/d8_theme/newname_theme/g' *.*
```
3. Add logo.svg file from the new project
4. Generate favicons by using one of the favicon, put them in favicon folder, add favicon.ico in theme folder and make sure that code matches with the one in html.twig template

## Compiling js-css
It uses npm and webpack to compile css/js, so to get it going just use:
```
npm install
npm run watch
```

# Have fun developing your next theme
