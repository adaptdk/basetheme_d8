# basetheme_d8
Starter d8 theme for everyday projects

## Some of the features
1. JS-CSS compiling ready
2. css/template file structure already created
3. /User page styled to look properly from the beginning
4. Error messages styled
5. Tabs appear fixed on screen
6. Can use region rendering in nodes same way you can in page.html.twig
7. Responsive typography and vertical rhytm with [Typi](https://github.com/zellwk/typi)
8. General mixins (constantly updated)
9. Packed with [font-awesome](http://fontawesome.io/) (just uncomment in .info file)



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
