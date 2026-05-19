function setTgLink(link){
    var tgLink = link;
    tgLink += top.carrotquest.data.user.user_signature.telegram ? `?start=${top.carrotquest.data.user.user_signature.telegram}` : '';
    document.querySelector(".cq-popup__button").href = tgLink;
}