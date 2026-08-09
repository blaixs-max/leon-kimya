@echo off
rem =============================================================
rem  LEON KIMYA - tek tik yayinlama
rem  Claude degisiklikleri commit'e kadar hazirlar; bu dosyaya
rem  cift tiklamak kalan adimlari calistirir:
rem    1) git pull --rebase   (uzaktakini al)
rem    2) git push            (GitHub'a gonder)
rem    3) vercel deploy --prod (canliya al)
rem
rem  NO_UPDATE_NOTIFIER + "<nul": Vercel CLI surum yukseltme sorusu
rem  sormasin diye. Bir kez soruldu, npm bulunamadi ve BASARILI
rem  deploy'dan sonra betik hata verdi (09.08.2026).
rem =============================================================
cd /d "%~dp0"
set "NO_UPDATE_NOTIFIER=1"
set "VERCEL_TELEMETRY_DISABLED=1"

echo.
echo [0/3] Calisma agaci kontrol ediliyor...
git diff --quiet
if errorlevel 1 goto kirli
git diff --cached --quiet
if errorlevel 1 goto kirli

echo.
echo [1/3] Uzaktaki degisiklikler aliniyor (varsa otomatik birlestirilir)...
git pull --rebase origin main
if errorlevel 1 goto hata

echo.
echo [2/3] GitHub'a gonderiliyor...
git push
if errorlevel 1 goto hata

echo.
echo [3/3] Vercel uretim deploy'u...
call vercel deploy --prod <nul
if errorlevel 1 goto deploySupheli

echo.
echo TAMAM - site yayinda: https://leon-kimya.vercel.app
pause
exit /b 0

:kirli
echo.
echo DURDURULDU - commit edilmemis degisiklikler var.
echo Once degisiklikleri commit edin, sonra bu dosyayi tekrar calistirin:
echo    git add -A
echo    git commit -m "aciklama"
echo.
git status --short
pause
exit /b 1

:deploySupheli
echo.
echo Vercel komutu sifirdan farkli bir kod dondurdu.
echo Yukaridaki ciktiya bakin: "Ready" ve "Aliased" satirlari varsa
echo deploy BASARILIDIR, hata yalnizca CLI'nin kendi adimina aittir.
echo Emin olmak icin: https://vercel.com/blaixs-4009s-projects/leon-kimya
pause
exit /b 1

:hata
echo.
echo HATA olustu - yukaridaki mesaji kontrol edin.
pause
exit /b 1
