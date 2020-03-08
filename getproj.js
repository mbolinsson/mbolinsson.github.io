// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhWq914J3PQH5DAdub3iZn_jQou0v02Lg",
  authDomain: "personalsite-a26fd.firebaseapp.com",
  databaseURL: "https://personalsite-a26fd.firebaseio.com",
  projectId: "personalsite-a26fd",
  storageBucket: "personalsite-a26fd.appspot.com",
  messagingSenderId: "311629093205",
  appId: "1:311629093205:web:c23d102f3b81e5f653f7dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
storage
  .ref("projects.json")
  .getDownloadURL()
  .then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open("GET", url);
    xhr.send();

    fetch(url)
      .then(result => result.json())
      .then(data => {
        send(data);
      });
  });
