---
path: "/docker"
cover: "./docker1.png"
date: "2023-01-04"
title: "Apa perbedaan antara Docker dan mesin virtual?"
tags: ['docker', 'Apa itu docker', 'docker Adalah', 'apa itu docker dan fungsinya', 'cara kerja docker', 'perbedaan docker dengan mesin virtual']
published: true
---



# Apa Itu Docker ?

**sebelum kita membahas tentang perbedaan docker dengan mesin virtal, alangkah baiknya kita kenali dulu docker itu sendiri**

**Penggunaan aplikasi saat ini semakin terus berkembang, terlebih dengan adanya teknologi Cloud Computing membuat perusahaan berlomba-lomba untuk membuat aplikasi agar lebih fleksibel dalam melakukan pekerjaan ataupun untuk komunikasi dengan customer.**

![docker](./docker2.png)

Docker adalah platform perangkat lunak yang memungkinkan Anda membuat, menguji, dan menerapkan aplikasi dengan cepat. Docker mengemas perangkat lunak ke dalam unit standar yang disebut kontainer yang memiliki semua yang diperlukan perangkat lunak agar dapat berfungsi termasuk pustaka, alat sistem, kode, dan waktu proses. Dengan menggunakan Docker, Anda dapat dengan cepat menerapkan dan menskalakan aplikasi ke lingkungan apa pun dan yakin bahwa kode Anda akan berjalan.

Docker merupakan salah satu solusi dari permasalahan yang sering dialami oleh para Developer untuk mengembangkan aplikasi agar dapat berjalan fleksibel di berbagai lingkungan. Kemampuan yang dimiliki oleh Docker yaitu mampu untuk menjalankan berbagai macam aplikasi dengan konfigurasi yang berbeda, walaupun dalam perangkat yang sama.





# Cara kerja Docker

![docker-architecture](https://user-images.githubusercontent.com/62259121/210399611-cdf3fa0b-9e96-4701-9e96-12e24477c62e.png)

Docker berfungsi dengan menyediakan cara standar untuk menjalankan kode Anda. Docker adalah sistem operasi untuk kontainer. Mirip dengan cara mesin virtual memvirtualisasi (menghilangkan kebutuhan untuk secara langsung mengelola/meminimalisis sumber daya) pada perangkat keras server, kontainer memvirtualisasi sistem operasi server.

teknologi docker container ini bekerja dengan konsep standar seperti container yang membungkus program atau kode yang akan diterapkan atau diuji. docker diinstal pada server atau komputer lokal dengan memberi perintah sederhana ketika akan menjalankan kontainer seperti memulai, menghentikan atau membuat kontainer.


## Kenapa sih harus menggunakan docker container?

menggunakan docker container sebagai platform deployment bisa dibilang ada beberapa benefit atau keuntungannya diantara lain seperti:

1. Cepat
   
   karena dengan menggunakan docker container sebagai penggunaan deployment atau penerapan aplikasi perangkat lunak dapat mempercepat pekerjaan apabila terdapat banyaknya aplikasi atau perangkat lunak yang berbeda fitur sekalipun

2. Mempermudah Pengoperasian
   
   menggunakan docker juga dapat mempermudah pengoperasian terhadap apabila pada saat developer atau pengembang tidak mau menginstall program pada OS host, dan akan menginstall pada docker container didalamnya beserta kode yang akan dicoba, sekaligus manajemen terhadap pustaka pada OS hostnya.





# Apa perbedaan antara Docker dan mesin virtual?

![perbedaan-docker-dengan-mesin-virtual](https://user-images.githubusercontent.com/62259121/210399642-abdfac86-d3b8-40d6-99cc-a76b4da2096d.png)

Mesin virtual (Virtual Machine, VM) memvirtualisasi (atau menghapus kebutuhan untuk secara langsung mengelola) perangkat keras server sementara kontainer memvirtualisasikan sistem operasi server. Docker adalah sistem operasi (atau waktu proses) untuk kontainer. Mesin Docker diinstal pada setiap server tempat Anda ingin menjalankan kontainer dan menyediakan sekumpulan perintah sederhana yang dapat digunakan untuk membuat, memulai, atau menghentikan kontainer.

Dalam bidang virtualiasi, terdapat istilah VM (Virtual Machine) dan Container. Secara prinsip keduanya tersebut sama – sama menggunakan skema virtualisasi, namun ada yang membedakan diantara kedua istilah tersebut.

Berikut beberapa perbedaan dari segi mendasar antara VM dan Container :

1. VM (Virtual Machine) menggunakan keseluruhan resource hardware yang ada pada host, sehingga jika diibaratkan host langsung menjalankan double sistem operasi sekaligus, sedangkan container bersifat seperti aplikasi, dan hanya menggunakan sedikit resource dari host, Docker ini seolah – olah juga seperti menjalankan aplikasi biasa.

2. VM (Virtual Machine) menggunakan kernel tersendiri sehingga menjadi beban bagi host dan akan sangat memberatkan, beda hal dengan docker yang membagi kernelnya ke container yang ada saja sehingga lebih efisien.

3. Alokasi spesifikasi pada virtual machine jika sudah di set untuk VM A, maka VM B tidak bisa menggunakan spesifikasi yang telah dipakai VM A, beda hal dengan Docker, jika ada sebuah container b sedang idle, maka container A bisa menggunakan resource milik B maupun sebaliknya. Intinya docker akan melakukan efisiensi resource dengan sebaik – baiknya pada system.


#### Sekian Dan Semoga Bermanfaat . . .

