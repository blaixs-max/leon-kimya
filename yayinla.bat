@echo off
rem =============================================================
rem  LEON KIMYA - tek tik yayinlama
rem  Claude degisiklikleri commit'e kadar hazirlar; bu dosyaya
rem  cift tiklamak kalan iki adimi calistirir:
rem    1) git push            (GitHub'a gonder)
rem    2) vercel deploy --prod (canliya al)
rem =============================================================
cd /d "%~dp0"
echo.
echo [1/2] GitHub'a gonderiliyor...
git push
if errorlevel 1 goto hata
echo.
echo [2/2] Vercel uretim deploy'u...
call vercel deploy --prod
if errorlevel 1 goto hata
echo.
echo TAMAM - site yayinda.
pause
exit /b 0
:hata
echo.
echo HATA olustu - yukaridaki mesaji kontrol edin.
pause
exit /b 1
