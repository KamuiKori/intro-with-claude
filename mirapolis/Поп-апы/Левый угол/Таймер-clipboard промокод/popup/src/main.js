var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.left = "45px";
iframe.style.bottom = "45px";
iframe.style.zIndex = '9999999999';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.transition = '.5s';
iframe.style.maxWidth = '560px';
iframe.style.maxHeight = '300px';

if (window.innerWidth <= 390) {
    iframe.style.left = 0;
    iframe.style.bottom = 0;
    iframe.style.top = 0;
    iframe.style.right = 0;
    iframe.style.height = '100%';
    iframe.style.maxWidth = "100%";
    iframe.style.margin = "auto";
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