@echo off
title Menjalankan Website Atma Java
echo ========================================================
echo        MEMULAI SERVER WEBSITE ATMA JAVA
echo ========================================================
echo.

:: 1. Cek apakah MySQL sudah berjalan di port 3306
netstat -ano | findstr :3306 >nul
if %errorlevel% neq 0 (
    echo [1/3] Menjalankan MySQL Database...
    start "" /B "D:\laragon\bin\mysql\mysql-8.4.3-winx64\bin\mysqld.exe" --defaults-file="D:\laragon\bin\mysql\mysql-8.4.3-winx64\my.ini"
    timeout /t 3 /nobreak >nul
) else (
    echo [1/3] MySQL Database sudah aktif.
)

:: 2. Buka browser otomatis
echo [2/3] Membuka browser ke http://localhost:8000 ...
start http://localhost:8000

:: 3. Jalankan web server PHP
echo [3/3] PHP Server aktif di http://localhost:8000
echo.
echo ========================================================
echo Website sedang berjalan! Jangan tutup jendela ini selama
echo kamu masih menggunakan website.
echo Tekan Ctrl + C untuk menghentikan server.
echo ========================================================
echo.
cd /d "d:\atma java"
php -S 127.0.0.1:8000
pause
