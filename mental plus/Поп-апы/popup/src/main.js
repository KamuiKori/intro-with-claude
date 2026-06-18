var isPhone = window.innerWidth < 500;

var iframe = document.createElement('iframe');
iframe.id = 'carrot_frame_{{ sending_id }}';
iframe.frameBorder = 0;
iframe.style.opacity = "0";
iframe.style.position = 'fixed';
iframe.style.zIndex = '9999999999';
iframe.style.width  = isPhone ? '140px' : '360px';
iframe.style.height = isPhone ? '175px' : '495px';
iframe.style.transition = '.5s';
iframe.style.bottom = '0';
iframe.style.left = '0';
iframe.style.top = 'auto';
iframe.style.right = 'auto';

document.body.appendChild(iframe);

var iframeContent = (iframe.contentWindow || iframe.contentDocument);
if (iframeContent.document) iframeContent = iframeContent.document;

iframeContent.open();
iframeContent.writeln(popupContent);
iframeContent.close();

carrotquest.identify([{op: 'update_or_create', key: 'popup', value: 'opened'}]);
localStorage["cq_popup"] = 'opened';
