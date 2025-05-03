# Blog API

Bu proje, basit bir blog sistemi için REST API sağlar. Kullanıcılar blog yazıları oluşturabilir, düzenleyebilir ve silebilir. Ayrıca yazılara yorum yapabilir ve yorumları yönetebilirler.

## Özellikler

- Blog yazıları oluşturma, düzenleme, silme ve listeleme
- Blog yazılarına yorum ekleme, düzenleme ve silme
- RESTful API mimari yapısı
- MongoDB veritabanı ile kalıcı veri depolama

## Başlangıç

### Gereksinimler

- Node.js (v14.0.0 veya üstü)
- MongoDB (yerel veya Atlas üzerinde)

### Kurulum

1. Projeyi klonlayın:
```bash
git clone <repo-url>
cd blog-api
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyası oluşturun ve gerekli değişkenleri ekleyin:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-api
```

4. Uygulamayı başlatın:
```bash
npm run dev
```

## API Endpoint'leri

### Gönderiler (Posts)

- **GET /api/posts** - Tüm gönderileri listele
- **GET /api/posts/:id** - Belirli bir gönderiyi getir
- **POST /api/posts** - Yeni gönderi oluştur
- **PUT /api/posts/:id** - Gönderiyi güncelle
- **DELETE /api/posts/:id** - Gönderiyi sil

### Yorumlar (Comments)

- **GET /api/posts/:postId/comments** - Gönderiye ait yorumları getir
- **POST /api/posts/:postId/comments** - Gönderiye yorum ekle
- **PUT /api/comments/:id** - Yorumu güncelle
- **DELETE /api/comments/:id** - Yorumu sil

## Postman Koleksiyonu

Projeyle birlikte API'yi test etmek için hazır bir Postman koleksiyonu bulunmaktadır. Bu koleksiyonu ve environment'ı kullanmak için:

1. Postman uygulamasını açın
2. Import > File > Upload Files
3. `backend/postman/blog-api-collection.json` ve `backend/postman/blog-api-environment.json` dosyalarını seçin
4. Sağ üst köşeden "Blog API Environment" ortamını seçin
5. Artık API isteklerini kullanabilirsiniz

## Proje Yapısı

```
blog-api/
  ├── src/
  │   ├── controllers/      # İş mantığı ve endpoint işlemleri
  │   │   ├── postController.js
  │   │   └── commentController.js
  │   ├── models/           # Veritabanı modelleri
  │   │   ├── postModel.js
  │   │   └── commentModel.js
  │   ├── routes/           # API rotaları
  │   │   ├── postRoutes.js
  │   │   └── commentRoutes.js
  │   └── app.js            # Ana uygulama dosyası
  ├── postman/              # Postman koleksiyonu ve environment
  │   ├── blog-api-collection.json
  │   └── blog-api-environment.json
  ├── package.json
  ├── .env                  # Ortam değişkenleri
  └── README.md
```

## Teknolojiler

- Express.js - Web sunucusu framework'ü
- Mongoose - MongoDB ORM
- Cors - Cross-Origin Resource Sharing
- Dotenv - Ortam değişkenleri yönetimi

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 