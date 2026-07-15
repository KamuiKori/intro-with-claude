if (!document.querySelector("[name=CQpopup]")) {
    var iframe = document.createElement('iframe');
    iframe.name = "CQpopup";
    iframe.id = 'carrot_frame_{{ sending_id }}';
    iframe.frameBorder = 0;
    iframe.style.opacity = "0";
    iframe.style.position = 'fixed';
    iframe.style.left = "0px";
    iframe.style.bottom = "0px";
    iframe.style.height = '350px';
    iframe.style.width = '100%';
    iframe.style.maxWidth = '420px';
    iframe.style.zIndex = '9999999999';
    iframe.style.transition = ".3s";

    if (window.innerWidth < 420) {
        iframe.style.top = 0;
        iframe.style.height = '320px';
        iframe.style.margin = "auto 0";

    }

    document.body.appendChild(iframe);

    var iframeContent = (iframe.contentWindow || iframe.contentDocument);
    if (iframeContent.document) iframeContent = iframeContent.document;

    iframeContent.open();
    iframeContent.writeln(popupContent);
    iframeContent.close();

    carrotquest.identify([{op: 'update_or_create', key: 'popup', value: 'opened'}]);
    localStorage["cq_popup"] = 'opened';
}