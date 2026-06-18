(function() {  
  //Для ie
  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  };
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
      for (var i = this.length - 1; i >= 0; i--) {
          if (this[i] && this[i].parentElement) {
              this[i].parentElement.removeChild(this[i]);
          }
      }
  };
  window.addEventListener('message', function(e) {
    if (e.data.command == "carrotquest.animationPopup") {
      animationOpacity(document.getElementById('carrot_frame_' + e.data.id));
    }
    if (e.data.command == 'carrotquest.closePopup') {
      animationOpacity(document.getElementById('carrot_frame_' + e.data.id));
      setTimeout(cb, 500);
      function cb() {
        document.getElementById('carrot_frame_' + e.data.id).remove();
        carrotquest.identify([{ op: 'update_or_create', key: 'popup', value: 'closed' }]);
        localStorage["cq_popup"] = 'closed';
        carrotquest.track('Закрыл поп-ап', {
          'id': e.data.id
        });
      }
    };
    if (e.data.command == 'carrotquest.track') {
      carrotquest.track(e.data.name);
    }
    if (e.data.command == 'carrotquest.identify') {
      carrotquest.identify(e.data.props);
    }
    if (e.data.command == 'carrotquest.resizeFrame') {
      document.getElementById('carrot_frame_' + e.data.id).style.height = e.data.height;
      document.getElementById('carrot_frame_' + e.data.id).style.width = e.data.width;
      document.getElementById('carrot_frame_' + e.data.id).style.maxWidth = e.data.maxWidth;
      document.getElementById('carrot_frame_' + e.data.id).style.maxHeight = e.data.maxHeight;
      document.getElementById('carrot_frame_' + e.data.id).style.left = e.data.left;
      document.getElementById('carrot_frame_' + e.data.id).style.right = e.data.right;
      document.getElementById('carrot_frame_' + e.data.id).style.bottom = e.data.bottom;
      document.getElementById('carrot_frame_' + e.data.id).style.top = e.data.top;
    }
  });
  //Анимация для попапов
  function animationOpacity(iframe) {
    if (iframe.style.opacity == "0") {
      iframe.style.opacity = "1";
    } else {
      iframe.style.opacity = "0";
    }
  }
}());