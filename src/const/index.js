
function getWhatsappUrl(number, text) {
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${number}/?text=${encodedText}`
  return whatsappUrl;
}


export const WHATSAPP_URL = getWhatsappUrl("573163436514", "Hola, me gustaría saber más sobre sus servicios");