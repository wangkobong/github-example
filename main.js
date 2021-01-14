'use strict';

// 구글 맵
function initMap() {
  const myLatLng = {
    lat: 37.782293,
    lng: -122.391240
  }

  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: myLatLng,
      scrollwheel: false,
      zoom: 18
    }
  );

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Github'
  });
  
}

// 토글버튼 이벤트
const toggles = document.querySelectorAll('.toggle');
const toggleBtn = document.querySelector('#toggle-btn');

toggleBtn.addEventListener('click', function () {
  toggleElements();
})

window.addEventListener('resize', function() {
  if(window.innerWidth > 1024){
    // Off toggle element
    offElements();
  }
});

function toggleElements(){
  [].forEach.call(toggles, function(toggle) {
    toggle.classList.toggle('on');
  });
}

function offElements(){
  [].forEach.call(toggles, function(toggle) {
    toggle.classList.remove('on');
  });
}

