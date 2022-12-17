# FS2020xGoogleMap

![image](https://github.com/r3850355/FS2020viaGoogleMap/blob/main/image/frame_generic_dark.png)

基於 Python 的 [SimConnect](https://github.com/odwdinc/Python-SimConnect) 專案精簡並重新構寫 web 頁面。

用於連動 Microsoft Flight Simulator 2020 中的資料，並顯示在 GoogleMaps 上。

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

## API Documentation

Fron-End Code [Here✋](https://github.com/r3850355/MSFS-with-googlemap)

#### ⭐ GET /api/navigation
get navigation data for map display, including `PLANE_ALTITUDE`, `PLANE_LATITUDE`, `PLANE_LONGITUDE`, `PLANE_HEADING_DEGREES_TRUE`, `GROUND_VELOCITY`.

#### ⭐ GET /api/get/{datapoint_name}

get [Simulation Variables](https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Simulation_Variables.htm) of MSFS2020.

Example:

```
GET /api/get/GROUND_VELOCITY
# get ground speed value
```
```
# return ground speed
313
```

#### ⭐ POST /api/event/{event_name}

```
BODY: { value: '' }
```
Emit events to FS2020.

Check Offical SDK Document for more [Event IDs](https://docs.flightsimulator.com/html/Programming_Tools/Event_IDs/Event_IDs.htm).

However, some event cannot be found or work on this SimConnect version.

Example:

```
POST /api/event/STROBES_SET
BODY: { value: 1 }
# value 1 will turn on STROBES LIGHT
```
```
# will return 'success' if command work
success
```

### ⭐ POST /api/mobiflight/{event_name}
```
BODY: { value: '' }
```
just likes MSFS event, But this method work for mobiflight events.

to use this method need to install mobiflight plugin for MSFS first.

[Mobiflight Presets](https://hubhop.mobiflight.com/presets/)




