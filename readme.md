Generate plate number ini merupakan program pendataan plat nomor secara otomatis berdasarkan wilayah yang berada di Jawa Barat dan jenis kendaraan yang dimiliki oleh yang telah didaftarkan, dimana plat nomor tersebut terdiri dari :

1. 1 karakter pertama merupakan kode plat regional
2. 4 karakter berikutnya merupakan angka random sebagai pembeda
3. 1 karakter berikutnya merupakan kode domisili
4. 1 karakter berikutnya merupakan tipe kendaraan yang didaftarkan
5. 1 karakter berikutnya merupakan huruf random sebagai pembeda

Generate plate number ini terdiri dari 3 tabel, yaitu :

1. master.regency : berisi data karyawan seperti id, name, regional_plat, type_plat
2. master.vehicle : berisi data kendaraan seperti id, name, type_plat
3. tnkb : berisi data pribadi pendaftar dan nomor plat serta tanggal expirednya yang terdiri dari id, name, address, no_plat, regency_id, vehicle_id, startDate, expiredDate

Penggunaan Endpoint

1. Untuk master.regency, menggunakan endpoint /api/regency. Karena bersifat data master, endpoint ini hanya dapat melakukan create dan list. Create dimasukkan dengan mengirimkan name, regional_plat, dan type_plat
2. Untuk master.vehicle, menggunakan endpoint /api/vehicle. Karena bersifat data master, endpoint ini hanya dapat melakukan create dan list. Create dimasukkan dengan mengirimkan name dan type_plat
3. Untuk tabel tnkb menggunakan endpoint /api/tnkb. Endpoint ini dapat melakukan create, list, update, dan delete. Create dimasukkan dengan mengirimkan name, address, regency_id, dan vehicle_id. Untuk melakukan update/delete diperlukan params id dengan menambahkan url di endpoind /api/vehicle/id.
