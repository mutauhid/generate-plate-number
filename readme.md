Generate plate number ini merupakan program pendataan plat nomor secara otomatis berdasarkan wilayah yang berada di Jawa Barat dan jenis kendaraan yang dimiliki oleh individu yang telah didaftarkan, dimana plat nomor tersebut terdiri dari :

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

1. Untuk master.regency, menggunakan endpoint /api/regency. Karena bersifat data master, endpoint ini hanya dapat melakukan post dan get. Create dimasukkan dengan mengirimkan name, regional_plat, dan type_plat
2. Untuk master.vehicle, menggunakan endpoint /api/vehicle. Karena bersifat data master, endpoint ini hanya dapat melakukan post dan get. Create dimasukkan dengan mengirimkan name dan type_plat
3. Untuk tabel tnkb menggunakan endpoint /api/tnkb. Endpoint ini dapat melakukan post, get, update, dan delete. Create dimasukkan dengan mengirimkan name, address, regency_id, dan vehicle_id. Untuk melakukan update/delete diperlukan params id dengan menambahkan url di endpoint /api/vehicle/id.

### Install

```
npm install
```

### Make .env File with This Template

```
APP_HOST=localhost
APP_PORT=3000
DB_DRIVER=postgresql //your database driver
DB_HOST=localhost //your database host
DB_PORT=5432 //your database port
DB_USER=username //your database user
DB_PASS=password //your database password
DB_NAME=db_social_gathering //your database name
```

### API spec

- Host : `localhost`
- Port : `3000`
- Postman :

### Regency

- Request : `POST`
- Endpoint : `/api/regency`
- Body

```json
{
  "name": "Jakarta Timur",
  "province_plat": "B",
  "type_plat": "T"
}
```

- Response

```json
{
  "code": 200,
  "msg": "SUCCES",
  "data": {
    "id": 1,
    "name": "Jakarta Timur",
    "regional_plat": "B",
    "type_plat": "T"
  }
}
```

- Request : `GET`
- Endpoint : `/api/regency`
- Response :

```json
{
    "code": 200,
    "msg": "SUCCES",
    "data": [
        {
            "id": 1,
            "name": "Jakarta Timur",
            "regional_plat": "B",
            "type_plat": "T"
        },
        {
            "id": 2,
            "name": "Jakarta Barat",
            "regional_plat": "B",
            "type_plat": "B"
        },
        {
            "id": 3,
            "name": "Jakarta Selatan",
            "regional_plat": "B",
            "type_plat": "S"
        },
        {
            "id": 4,
            "name": "Jakarta Utara",
            "regional_plat": "B",
            "type_plat": "U"
        },
        {
            "id": 5,
            "name": "Jakarta Pusat",
            "regional_plat": "B",
            "type_plat": "P"
        }
    ]
```

### Vehicle

- Request : `POST`
- Endpoint : `/api/vehicle`
- Body

```json
{
  "name": "Sedan",
  "type_plat": "S"
}
```

- Response

```json
{
  "code": 200,
  "msg": "SUCCES",
  "data": {
    "id": 1,
    "name": "Sedan",
    "type_plat": "S"
  }
}
```

- Request : `GET`
- Endpoint : `/api/vehicle`
- Response

```json
{
  "code": 200,
  "msg": "SUCCES",
  "data": [
    {
      "id": 1,
      "name": "Sedan",
      "type_plat": "S"
    },
    {
      "id": 2,
      "name": "Pick Up",
      "type_plat": "P"
    },
    {
      "id": 3,
      "name": "Truk",
      "type_plat": "D"
    },
    {
      "id": 4,
      "name": "Minibus",
      "type_plat": "M"
    },
    {
      "id": 5,
      "name": "HatchBack",
      "type_plat": "H"
    }
  ]
}
```

### TNKB

- Request : `POST`
- Endpoint : `/api/tnkb`
- Body

````json
{
    "name" : "Taufik",
    "address" : "Kalisari",
    "regency_id" : 3,
    "vehicle_id" : 2
}
```
- Response
```json
{
    "code": 200,
    "msg": "SUCCES",
    "data": {
        "id": 1,
        "name": "Taufik",
        "address": "Kalisari",
        "no_plat": "B 6833 BSV",
        "regency_id": 3,
        "vehicle_id": 2,
        "startdate": "2022-09-22T17:00:00.000Z",
        "expireddate": "2027-09-22T17:00:00.000Z"
    }
}
````

- Request : `GET`
- Endpoint : '/api/vehicle`
- Response

```json
{
  "code": 200,
  "msg": "SUCCES",
  "data": [
    {
      "id": 1,
      "name": "Taufik",
      "address": "Kalisari",
      "no_plat": "B 6833 BSV",
      "wilayah": "Jakarta Selatan",
      "type_kendaraan": "Pick Up",
      "startdate": "2022-09-22T17:00:00.000Z",
      "expiredDate": "2027-09-22T17:00:00.000Z"
    },
    {
      "id": 2,
      "name": "Rehan",
      "address": "Kalimalang",
      "no_plat": "B 9182 BCW",
      "wilayah": "Tangerang",
      "type_kendaraan": "Pick Up",
      "startdate": "2022-09-22T17:00:00.000Z",
      "expiredDate": "2027-09-22T17:00:00.000Z"
    }
  ]
}
```

- Request : `PUT`
- Endpoint : `/api/tnkb/1`
- Body

```json
{
  "name": "Taufik",
  "address": "Cijantung",
  "regency_id": 10,
  "vehicle_id": 2
}
```

- Response

```json
{
  "code": 200,
  "msg": "SUCCES",
  "data": {
    "id": 1,
    "name": "Taufik",
    "address": "Cijantung",
    "no_plat": "B 6833 BSV",
    "regency_id": 10,
    "vehicle_id": 2,
    "startdate": "2022-09-22T17:00:00.000Z",
    "expireddate": "2027-09-22T17:00:00.000Z"
  }
}
```

- Request : `DELETE`
- Endpoint : `/api/tnkb/2`
- Response

```json
{
  "code": 200,
  "msg": "SUCCES",
  "data": "TNKB with ID 2 has been deleted"
}
```
