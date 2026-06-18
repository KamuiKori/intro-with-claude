"use strict";

if (!document.querySelector("[name=CQpopup]")) {
  var isMob = window.innerWidth < 768;
  var iframe = document.createElement('iframe');
  iframe.name = "CQpopup";
  iframe.id = 'carrot_frame_{{ sending_id }}';
  iframe.frameBorder = 0;
  iframe.style.opacity = "0";
  iframe.style.position = 'fixed';
  iframe.style.left = "0px";
  iframe.style.bottom = "0px";
  iframe.style.height = isMob ? '90px' : '170px';
  iframe.style.width = '100%';
  iframe.style.maxWidth = isMob ? '220px' : '370px';
  iframe.style.zIndex = '9999999999';
  iframe.style.transition = ".3s";
  document.body.appendChild(iframe);
  var iframeContent = iframe.contentWindow || iframe.contentDocument;
  if (iframeContent.document) iframeContent = iframeContent.document;
  iframeContent.open();
  iframeContent.writeln(popupContent);
  iframeContent.close();
  carrotquest.identify([{
    op: 'update_or_create',
    key: 'popup',
    value: 'opened'
  }]);
  localStorage["cq_popup"] = 'opened';
}