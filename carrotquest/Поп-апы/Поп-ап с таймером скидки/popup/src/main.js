var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width = '450px';
iframe.style.height = '490px';
iframe.style.transition = '.5s';
iframe.style.left='0';
iframe.style.bottom='0';
if(top.window.innerWidth < 450){
    iframe.style.width = '350px';
    iframe.style.height = '430px';
    iframe.style.left='50%';
    iframe.style.bottom='0';
    iframe.style.transform='translateX(-50%)';
}


document.body.appendChild(iframe);

var iframeContent = (iframe.contentWindow || iframe.contentDocument);
if (iframeContent.document) iframeContent = iframeContent.document;

iframeContent.open();
iframeContent.writeln(popupContent);
iframeContent.close();

carrotquest.identify([{op: 'update_or_create', key: 'popup', value: 'opened'}]);
localStorage["cq_popup"] = 'opened';