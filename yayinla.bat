@echo off
rem =============================================================
rem  LEON KIMYA - tek tik yayinlama
rem  Claude degisiklikleri commit'e kadar hazirlar; bu dosyaya
rem  cift tiklamak kalan adimlari calistirir:
rem    1) git pull --rebase   (uzaktakini al)
rem    2) git push            (GitHub'a gonder)
rem  Canliya alma otomatik: Vercel'in GitHub baglantisi main'e gelen
rem  her push'u 1-2 dakikada yayinlar.
rem
rem  28.09.2026: "vercel deploy --prod" adimi KALDIRILDI. Yerel klasoru
rem  oldugu gibi yukluyordu; _to_delete, saraskimya-assets ve proje
rem  notlari canlida herkese acik kaldi. Geri eklemeyin - GitHub
rem  uzerinden yapilan yayin yalnizca depodaki dosyalari icerir.
rem =============================================================
cd /d "%~dp0"

echo.
echo [0/2] Calisma agaci kontrol ediliyor...
git diff --quiet
if errorlevel 1 goto kirli
git diff --cached --quiet
if errorlevel 1 goto kirli

echo.
echo [1/2] Uzaktaki degisiklikler aliniyor (varsa otomatik birlestirilir)...
git pull --rebase origin main
if errorlevel 1 goto hata

echo.
echo [2/2] GitHub'a gonderiliyor...
git push
if errorlevel 1 goto hata

echo.
echo TAMAM - GitHub'a gonderildi. Vercel 1-2 dakika icinde yayinlar:
echo    https://leonkimya.com
echo Yayin durumu: https://vercel.com/blaixs-4009s-projects/leon-kimya
pause
exit /b 0

:kirli
echo.
echo DURDURULDU - commit edilmemis degisiklikler var.
echo Once degisiklikleri commit edin (dosya yollarini acikca yazin,
echo "git add -A" katalog/ ve kartvizit/ klasorlerini de depoya sokar):
echo    git add dosya1 dosya2
echo    git commit -m "aciklama"
echo.
git status --short
pause
exit /b 1

:hata
echo.
echo HATA olustu - yukaridaki mesaji kontrol edin.
pause
exit /b 1
