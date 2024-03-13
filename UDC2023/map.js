var map;
var marker;
var audio;
var markers = [];
var circles = [];

// 複数のターゲットエリアを定義
var targetAreas = [
  {
    name: "郡山駅前",
    lat: 37.39869129379377,
    lng: 140.38842719257167,
    music: "./aseets/test.mp3",
  },
  {
    name: "イオンタウン郡山",
    lat: 37.39087,
    lng: 140.38765,
    music: "audio/shibuya_station.mp3",
  },
  {
    name: "WIZの前",
    lat: 37.3945,
    lng: 140.39112,
    music: "audio/shibuya_station.mp3",
  },
  {
    name: "開成山公園",
    lat: 37.39812,
    lng: 140.3583,
    music: "./aseets/test.mp3",
  },
  {
    name: "開成山大神宮",
    lat: 37.3979,
    lng: 140.35331,
    music: "./aseets/test.mp3",
  },
];

// 判定半径（メートル）
var detectionRadius = 150;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.6895, lng: 139.6917 },
    zoom: 17,
  });

  audio = document.getElementById("audio");
  infoWindow = new google.maps.InfoWindow();
  songnameElement = document.getElementById("song name");
  artistElement = document.getElementById("artist");
  imageElement = document.getElementById("img");
  labelElement = document.getElementById("label");

  for (var i = 0; i < targetAreas.length; i++) {
    var targetArea = targetAreas[i];
    var targetMarker = new google.maps.Marker({
      position: { lat: targetArea.lat, lng: targetArea.lng },
      map: map,
      title: targetArea.name,
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // マーカーの色を設定
    });
    markers.push(targetMarker);

    var circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
      center: { lat: targetArea.lat, lng: targetArea.lng },
      radius: 150, // 半径（メートル）
    });
    circles.push(circle);
  }

  var isPlaying = false; // Variable to track the audio playback state

  document.getElementById("playButton").addEventListener("click", function () {
    var playButton = document.getElementById("playButton");

    if (isPlaying) {
      // If audio is currently playing, pause it and change the button to "▶"
      audio.pause();
      playButton.innerText = "▶";
    } else {
      // If audio is paused or stopped, play it and change the button to "■"
      audio.play();
      playButton.innerText = "■";
    }

    // Toggle the playback state
    isPlaying = !isPlaying;
  });

  navigator.geolocation.getCurrentPosition(
    function (position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      showInfoWindow(userLocation.lat, userLocation.lng);

      if (!marker) {
        marker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "Your Location",
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // 初期のピンの色
        });
      } else {
        marker.setPosition(userLocation);
      }

      map.setCenter(userLocation);
      console.log(userLocation.lat, userLocation.lng);

      // 対象エリアに入ったら音楽を再生
      var insideArea = getInsideArea(userLocation, targetAreas);
      //console.log(insideArea.name);
      document.getElementById("card-container").style.display = "block";
      console.log(insideArea);
      if (insideArea != null) {
        //audio.src = insideArea.music;
        // audio.play();

        // エリアに入ったらピンの色を変更
        marker.setIcon(
          "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        ); // 緑色のピンに変更
        songnameElement.innerText = "キセキ";
        artistElement.innerText = "GReeeN";
        labelElement.innerText =
          "現在位置は" +
          insideArea.name +
          "エリア内です！対象音楽は「GReeeN」で「キセキ」です。";
      } else {
        songnameElement.innerText = "no music";
        artistElement.innerText = "no artist";
        imageElement.src = "./assets/noimage.png";
        labelElement.innerText =
          "現在位置は対象エリア外です！対象音楽はありません！";

        // audio.pause();

        // エリア外に出たらピンの色を元に戻す
        marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
      }
    },
    function (error) {
      console.log("位置情報の取得エラー:", error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 100000,
      maximumAge: 0,
    }
  );
}

function getInsideArea(userLocation, targetAreas) {
  // ユーザーがどのエリアに入っているかを判定
  for (var i = 0; i < targetAreas.length; i++) {
    var targetArea = targetAreas[i];
    var distance = calculateDistance(userLocation, targetArea);

    if (distance < detectionRadius) {
      return targetArea;
    }
  }

  return null;
}

function calculateDistance(point1, point2) {
  // 2つの座標点間の距離を計算（単純な直線距離）
  var latDiff = Math.abs(point1.lat - point2.lat);
  var lngDiff = Math.abs(point1.lng - point2.lng);
  return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111000; // 緯度1度あたり約111キロメートル
}

function showInfoWindow(lat, lng) {
  // InfoWindowのコンテンツを構築
  var contentString = "緯度：" + lat + "<br>経度：" + lng;

  // InfoWindowにコンテンツをセット
  infoWindow.setContent(contentString);

  // InfoWindowをマーカーの位置に表示
  infoWindow.open(map, marker);
}
