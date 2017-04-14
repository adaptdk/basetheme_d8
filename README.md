# basetheme_d8
Starter d8 theme for everyday projects

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

#Have fun developing your next theme
