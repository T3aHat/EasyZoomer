import zipfile
with zipfile.ZipFile('rightclickwheelzoom.zip', 'w')as zf:
    zf.write('manifest.json')
    zf.write('background.js')
    zf.write('contents.js')
    zf.write('popup.js')
    zf.write('popup.html')
    zf.write('style.css')
    zf.write('icon128.png')
