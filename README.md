# basetheme_d8
Starter d8 theme for everyday projects

## Once checked out
1. Rename files to proper theme name via console
'''
sudo rename 's/d8_theme/newname_theme/' *.*
'''
2. Rename all the theme functions and other strings via console
'''
sed -i 's/d8_theme/new_theme/g' *.*
'''
OSX
'''
sed '.bak' -i 's/d8_theme/new_theme/g' *.*
'''
