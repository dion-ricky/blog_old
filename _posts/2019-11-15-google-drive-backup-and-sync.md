---
title: Program 'Backup and Sync' dari Google Drive Bermasalah?
layout: post
description: >-
  Sebagai pengguna setia Google Drive aku kecewa dengan performa program Backup and Sync yang disediakan oleh Google, apakah kamu juga merasakan hal yang sama? Coba cek beberapa poin dibawah!
category: Tech
tags: [backup, tech-rant]
img:
color:
bgcolor: rgba(0, 214, 214, 0.5)
---
Sebagai pengguna setia **Google Drive** aku kecewa dengan performa program **Backup and Sync** yang disediakan oleh Google, apakah kamu juga merasakan hal yang sama? Coba cek beberapa poin dibawah!

## 1. Tidak ada fitur exception
Jadi untuk poin pertama ini aku ada kasus yang menurutku permasalahannya serius banget wkwkw :joy:. Sebagai backstory, program _Backup and Sync_ meminta user memilih **parent folder** yang ingin dibackup, kemudian program akan melakukan scanning keseluruhan tree file dan subfolder pada parent folder.

Permasalahan utama muncul ketika aku ingin membuat beberapa **exception** (pengecualian) untuk subfolder didalam parent folder — jadi mirip _git_ konsepnya.

Program _Backup and Sync_ di laptop pribadiku diatur untuk melakukan backup **folder kuliah**. Didalam folder tersebut ada folder untuk file resource kuliah yang ukurannya **jumbo**, niatnya ingin biar satu folder ini jangan dibackup gitu, _loh_. Selain boros resource, proses uploadnya juga lama padahal masih ada file lain yang lebih penting untuk diupload.

## 2. Delta sync, dimana kamu!!~
Menurutku, ini fitur yang paling aku inginkan dari program _Backup and Sync_. Alasannya simpel, kamu punya file teks dengan ukuran ~450KB. Kemudian isi teks tersebut kamu ubah 1 line. Program _Backup and Sync_ akan tetap mengupload file secara utuh, walaupun yang diubah cuma beberapa bytes.

Tapi, dilihat dari sudut pandang programmer aku sepertinya bisa memahami kenapa Google memutuskan untuk tidak mengimplementasikan fitur ini di program _Backup and Sync_ mereka. File yang dibackup oleh program ini sangat bervariasi mulai dari tipe ekstensinya, format penulisannya, dan encodingnya. Jadi, untuk memproses jutaan informasi ketika melakukan backup sepertinya terlalu banyak membutuhkan resource.

## 3. Directory tree scanner, sucks!
Kamu punya ribuan file yang mau dibackup? Good luck waiting, dude. Aku pernah nyalain program _Backup and Sync_ udah ditinggal 15 menit daann~ si program masih scanning. Really? Apakah perlu waktu selama itu? Koneksi internet juga gaada masalah. Kenapa nggak pakai thread biar bisa multi process?

Sudah menunggu lama, eh ternyata program yang seharusnya melakukan "backup" ternyata cuma berperan jadi file scanner.

## 4. Kenapa tidak menggunakan thread?
Seriously, sebagai programmer aku penasaran kenapa program _Backup and Sync_ dari Google nggak pake thread. Jadi kalau nggak pakai thread itu basically hanya bisa menjalankan satu proses dalam satu waktu. Kalau sedang scanning directory tree, ya nggak bisa sambil upload file. Padahal sebenarnya programnya capable untuk melakukan hal itu, tapi kenapa kok nggak diimplementasikan?

## 5. You suffer? Let me use your wafer to buffer!
Oke oke.. Aku paham, buffer itu perlu. Tapi liat sikon lah ya. RAM udah hampir penuh bukannya kasian sama program yang lain malah egois dipake sendiri. Lagipula, untuk upload apakah perlu dibuffer dulu? Secepat apa sih speed uploadku? Gak mungkin lebih tinggi dari speed read harddisk kan?.

## Conclusion
Aku menarik kesimpulan dari segi UX yang aku rasakan sebagai pengguna dari program _Backup and Sync_ yang disediakan oleh Google Drive. Karena UX adalah hal yang bersifat subjektif, jangan harap kalian akan menemukan konklusi objektif disini. Aku bersyukur karena sudah disediakan interface untuk melakukan backup file ke Google Drive. But really, there is still a lot of things to improve. Ayolah Google, kalian paling paham sama customer kann~. Kalau misalnya ada update untuk algoritma scanning yang lebih baik, aku pasti review lagi disini.
