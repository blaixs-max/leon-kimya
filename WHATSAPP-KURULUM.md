# WhatsApp Hattı Kurulumu — Leon Kimya (+90 533 704 01 25)

Sitedeki yeşil WhatsApp düğmesi sohbeti başlatır ve müşterinin diline göre
ön-dolu bir mesaj hazırlar. **Otomatik yanıtlar ise sitede değil, telefondaki
WhatsApp Business uygulamasında kurulur.** Aşağıdaki adımları bir kez yapmanız
yeterli.

## 1) Karşılama mesajı (müşteri ilk yazdığında otomatik gider)

WhatsApp Business → Ayarlar → İşletme araçları → **Karşılama mesajı** → Aç →
mesajı yapıştır → Kaydet.

> Merhaba, Leon Kimya ailesi olarak size yardımcı olabilmemiz adına e-mail
> veya telefon numarası ve talebinizle ilgili kısa bir açıklama yazar mısınız?

## 2) Talep alındı mesajı (müşteri bilgilerini yazdıktan sonra)

WhatsApp Business'ta "ikinci otomatik mesaj" özelliği yoktur; bu mesaj için
**Hızlı yanıt** kullanılır: Ayarlar → İşletme araçları → **Hızlı yanıtlar** →
Ekle → kısayol: `/talep` → mesajı yapıştır → Kaydet.
Müşteri bilgilerini yazınca sohbete `/talep` yazıp göndermeniz yeterli.

> Talebiniz kayıt edilmiştir. Müşteri Temsilcilerimiz en kısa zamanda
> sizinle iletişime geçecektir.

## 3) Yabancı müşteriler için çeviriler

Site 4 dilde yayında; yabancı müşteri gelirse aynı şablonların çevirileri
(bunları da ayrı hızlı yanıt olarak kaydedebilirsiniz: `/en`, `/fr`, `/ar`
ve `/endone`, `/frdone`, `/ardone` gibi):

**EN — karşılama:** Hello! To help you better as the Leon Kimya family,
could you please share your e-mail or phone number and a short note about
your request?
**EN — talep alındı:** Your request has been recorded. Our customer
representatives will contact you as soon as possible.

**FR — karşılama:** Bonjour ! Afin de mieux vous aider, pourriez-vous nous
communiquer votre e-mail ou numéro de téléphone ainsi qu'une courte
description de votre demande ?
**FR — talep alındı:** Votre demande a été enregistrée. Nos conseillers
clientèle vous contacteront dans les plus brefs délais.

**AR — karşılama:** مرحبًا! لكي نتمكن من مساعدتكم بشكل أفضل في عائلة ليون
كيميا، هل يمكنكم مشاركة بريدكم الإلكتروني أو رقم هاتفكم مع وصف موجز لطلبكم؟
**AR — talep alındı:** تم تسجيل طلبكم. سيتواصل معكم ممثلو خدمة العملاء في
أقرب وقت ممكن.

## Notlar

- Düğme her dilde müşteri adına şu ön-dolu mesajla açılır (müşteri isterse
  silebilir): TR "Merhaba, ürünleriniz hakkında bilgi almak istiyorum." /
  EN / FR / AR karşılıkları.
- Numara değişirse tek yer güncellenir: `assets/i18n.js` → `contact.whatsapp`.
- Mesai dışı otomatik mesaj isterseniz: İşletme araçları → **Diğer mesaj**
  (Away message) — aynı karşılama metni kullanılabilir.
