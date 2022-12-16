## 一、安裝

##### ⭐步驟 1

先下載並安裝 [Python 3.10](https://www.python.org/downloads/)

##### ⭐步驟 2

打開終端機 (在windows的左下角輸入 power 會找到 PowerShell，選擇並打開) 後輸入下方指令安裝套件

```
pip install Flask
pip install SimConnect
```

##### ⭐步驟 3

先打開 微軟模擬飛行2020

再到這個專案的資料夾下，執行 `start.bat` 

或是按住 shift 並對資料夾按滑鼠右鍵選擇 PowerShell ， 並輸入指令 `python .\app.py`

##### ⭐步驟 4

打開瀏覽器，並進入網址 [127.0.0.1:5000](http://127.0.0.1:5000)

## 二、如何替換 GoogleMap 的金鑰

打開地圖後會發現地圖暗暗的並有開發模式的浮水印，如果想去除浮水印可以前往 [Google Cloud Console](https://console.cloud.google.com/) 申請 Google Maps JavaScript API 的金鑰，取得金鑰的操作有點繁雜，可以自行上網搜尋教學，或參考這支[影片](https://youtu.be/OGTG1l7yin4)。

拿到金鑰後，使用任何文字編輯器打開 `app.py`，並找到第五行 `googleMapAPIKey='<填上你的金鑰>'`後即可。

```
# 範例
# GOOGLE MAP API KEY
googleMapAPIKey = 'AIzaSbbotUSaaRUaRNsrhAQNbT3_1XUMlf64zVx'
```



> ⭐ Google Maps API 在有限額度內是完全免費的。免費額度會每天重置，以個人使用的話幾乎用不完



