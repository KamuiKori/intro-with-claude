var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width = '100%';
iframe.style.maxWidth = '500px';
iframe.style.height = '100%';
iframe.style.maxHeight = '400px';
iframe.style.transition = '.5s';
iframe.style.left='0';
iframe.style.bottom='0';

if(top.location.origin.indexOf('m.') > -1 || top.window.innerWidth < 500){
    iframe.style.maxWidth = '100%';
    iframe.style.maxHeight = '100%';
}


document.body.appendChild(iframe);

var iframeContent = (iframe.contentWindow || iframe.contentDocument);
if (iframeContent.document) iframeContent = iframeContent.document;

iframeContent.open();
iframeContent.writeln(popupContent);
iframeContent.close();

carrotquest.identify([{op: 'update_or_create', key: 'popup', value: 'opened'}]);
localStorage["cq_popup"] = 'opened';