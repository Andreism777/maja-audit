Maja audit - eestikeelne versioon

Põhifunktsioonid:
- Ühele puudusele saab lisada mitu fotot ja faili.
- Puuduse kirjeldus, olulisus, kuupäev ja asukoht salvestatakse telefonis.
- Nupp "Loo täidetav PDF" loob päris PDF-vormi (AcroForm).
- PDF-is on redigeeritavad väljad:
  * Lahendus - mitmerealine tekstiväli
  * Vastutaja - rippmenüü
  * Tähtaeg - tekstiväli kuupäeva sisestamiseks
- Kõik fotod lisatakse PDF-i.
- Muud failid (nt PDF, DOCX, XLSX, TXT) lisatakse võimalusel PDF-i manustena.
- Varukoopia saab eksportida ja hiljem taastada.

Paigaldamine telefoni:
1. Paiguta failid HTTPS-veebimajutusse (nt Netlify, GitHub Pages või Cloudflare Pages).
2. Ava veebiaadress telefonis.
3. Vali brauseri menüüst "Lisa avakuvale".
4. PDF-i loomisel kasutatakse pdf-lib teeki. Esimesel kasutuskorral on internetiühendus vajalik; seejärel saab brauser teegi vahemällu salvestada.

Märkus:
Kõik auditikirjed ja manused hoitakse IndexedDB-s selles seadmes/brauseris. Tee regulaarselt varukoopia.

Uuendus v2:
- Lahendus on PDF-is suurem mitmerealine tekstiväli.
- Tekst murrab automaatselt mitmele reale.

Uuendus v3:
- Parandatud PDF-välja Lahendus viga: "No /DA (default appearance) entry found".
- Lahendus jääb suureks mitmerealiseks täidetavaks väljaks.

Uuendus v4:
- Lahendus: fikseeritud 10 pt fondisuurus, et Edge/Firefox ei näitaks teksti hiigelsuurena.
- Tähtaeg: kolm standardset rippmenüüd Euroopa järjekorras PP / KK / AAAA.
- PDF JavaScript kalendrit ei kasutata, sest Edge ja Firefox ei toeta seda ühtlaselt.
- Kasutatakse standardseid AcroForm välju maksimaalse brauseriühilduvuse jaoks.

Uuendus v5:
- Tähtaeg on jälle üks kuupäevaväli (PP.KK.AAAA), sarnaselt rakenduse Avastamise kuupäev väljale.
- Adobe Acrobat saab kuupäevavälja vormindada PDF JavaScripti kaudu.
- Edge ja Firefox ei kuva AcroForm-kuupäevaväljale süsteemset kalendrit; seal jääb väli käsitsi redigeeritavaks.
