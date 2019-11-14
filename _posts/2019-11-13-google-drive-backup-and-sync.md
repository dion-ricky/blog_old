---
title: Program 'Backup and Sync' dari Google Drive Bermasalah?
layout: post
description: >-
  Sebagai pengguna setia Google Drive aku kecewa dengan performa program Backup and Sync yang disediakan oleh Google, apakah kamu juga merasakan hal yang sama? Coba cek beberapa poin dibawah!
category: Tech
tags: [backup, tech-rant]
img:
color:
bgcolor: aliceblue
---
Sebagai pengguna setia **Google Drive** aku kecewa dengan performa program **Backup and Sync** yang disediakan oleh Google, apakah kamu juga merasakan hal yang sama? Coba cek beberapa poin dibawah!

## 1. Tidak ada fitur exception
Jadi untuk poin pertama ini aku ada kasus yang menurutku permasalahannya serius banget wkwkw :joy:. Sebagai backstory, program _Backup and Sync_ meminta user memilih **parent folder** yang ingin dibackup, kemudian program akan melakukan scanning keseluruhan tree file dan subfolder pada parent folder.

Permasalahan utama muncul ketika aku ingin membuat beberapa **exception** (pengecualian) untuk subfolder didalam parent folder — jadi mirip _git_ konsepnya. Gimana tuh caranya?
> "Maaf gan, gabisa :sob:"
>
> — Google Drive

_Whaat the ff—_

Program _Backup and Sync_ di laptop pribadiku diatur untuk melakukan backup **folder kuliah**. Didalam folder tersebut ada folder untuk file resource kuliah yang ukurannya **jumbo**, niatnya ingin biar satu folder ini jangan dibackup gitu, _loh_. Selain boros resource, proses uploadnya juga lama padahal masih ada file lain yang lebih penting untuk diupload.

## 2. Delta sync, dimana kamu!!~
Menurutku, ini fitur yang paling aku inginkan dari program _Backup and Sync_. Alasannya simpel, kamu punya file teks dengan ukuran ~450KB. Kemudian isi teks tersebut kamu ubah 1 line. Program _Backup and Sync_ akan tetap mengupload file secara utuh, walaupun yang diubah cuma beberapa bytes.

Tapi, dilihat dari sudut pandang programmer aku sepertinya bisa memahami kenapa Google memutuskan untuk tidak mengimplementasikan fitur ini di program _Backup and Sync_ mereka. File yang dibackup oleh program ini sangat bervariasi mulai dari tipe ekstensinya, format penulisannya, dan encodingnya. Jadi, untuk memproses jutaan informasi ketika melakukan backup sepertinya terlalu banyak membutuhkan resource.

## 3. Directory dan directory tree bukan satu entity?
