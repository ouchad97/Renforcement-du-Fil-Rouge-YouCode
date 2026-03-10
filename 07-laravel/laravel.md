# 📘 Document de Révision Laravel

---

## 🟢 Bases Laravel

1. Qu’est-ce que Laravel ?
2. Pourquoi utiliser un framework PHP ?
3. Citer 3 avantages de Laravel.
4. Quel est le rôle du fichier `.env` ?
5. À quoi sert Composer ?
6. Quelle est la structure MVC ?
7. Rôle de chaque composant :
   - Model
   - Controller
   - View
8. Où définit-on les routes dans Laravel ?
9. Différence entre `web.php` et `api.php`.
10. À quoi sert Blade ?

---

## 🟢 1️⃣ Routage & Controllers

### 🔹 A. Questions Théoriques

1. Différence entre `web.php` et `api.php`.
2. Différence entre `Route::get()` et `Route::post()`.
3. Que fait `Route::resource()` ?
4. Différence entre :
   - Controller classique
   - Single Action Controller
5. Qu’est-ce que l’injection de dépendance ?
6. Comment passer des paramètres dans une route ?
7. Différence entre route nommée et route simple.
8. Comment protéger une route avec middleware ?

### 🔹 B. Challenges Pratiques

1. Créer une route `/profile/{id}`.
2. Créer un `UserController`.
3. Faire une route resource pour `Post`.
4. Protéger une route avec middleware `auth`.
5. Rediriger vers une route nommée après création.

---

## 🟢 2️⃣ Migrations – Seeders – Factories

### 🔹 A. Théorie

1. À quoi sert une migration ?
2. Différence entre :
   - `migrate`
   - `migrate:fresh`
   - `rollback`
3. Que fait un Seeder ?
4. Que fait une Factory ?
5. Différence entre Seeder et Factory.
6. Comment définir une clé étrangère ?

### 🔹 B. Pratique

1. Créer une migration `posts` avec :
   - `id`
   - `title`
   - `content`
   - `user_id` (foreign key)
2. Créer un seeder qui insère 10 posts.
3. Créer une factory pour générer 50 users.
4. Ajouter une relation avec clé étrangère.

---

## 🟢 3️⃣ Eloquent ORM

### 🔹 A. Théorie

1. Différence entre Eloquent et Query Builder.
2. Que retourne `all()` ?
3. Différence entre `get()` et `first()`.
4. Que fait `find()` ?
5. C’est quoi le Mass Assignment ?
6. Différence entre `$fillable` et `$guarded`.
7. Que fait `save()` ?
8. Que fait `update()` ?
9. Que fait `delete()` ?
10. C’est quoi le Soft Delete ?
11. Comment trier des résultats avec Eloquent ?
12. Comment limiter le nombre de résultats ?
13. Différence entre `save()` et `create()`.

### 🔹 B. Pratique

1. Récupérer tous les users.
2. Récupérer un user par ID.
3. Créer un nouveau post.
4. Mettre à jour un post.
5. Supprimer un post.
6. Implémenter SoftDelete.

---

## 🟢 4️⃣ Relations Eloquent

### 🔹 A. Théorie

1. Différence entre :
   - `hasOne`
   - `hasMany`
   - `belongsTo`
   - `belongsToMany`
2. Où met-on `belongsTo` ?
3. Quand utiliser `belongsToMany` ?
4. C’est quoi une table pivot ?
5. Comment accéder aux données pivot ?
6. Différence entre eager loading et lazy loading.
7. Que fait `with()` ?
8. Que fait `load()` ?

### 🔹 B. Pratique

1. Créer relation :
   - `User → hasMany Posts`
   - `Post → belongsTo User`
2. Créer relation Many-to-Many : `User ↔ Role`
3. Créer table pivot `role_user`.
4. Charger les relations avec `with()`.
5. Tester le N+1 problem.

---

## 🟢 5️⃣ Eager Loading vs Lazy Loading

### 🔹 Questions

1. C’est quoi le N+1 problem ?
2. Pourquoi eager loading améliore les performances ?
3. Différence entre `with()` et `load()`.
4. Quand utiliser lazy loading ?

### 🔹 Challenge

Optimiser cette requête pour éviter N+1 :

```php
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->user->name;
}
```

---

## 🟢 6️⃣ Query Builder

### 🔹 Théorie

- Différence entre `DB::table()` et Model.  
- Que fait `where()` ?  
- Que fait `join()` ?  
- Différence entre `leftJoin()` et `join()`.  
- Comment faire un `groupBy` ?  

### 🔹 Pratique

- Récupérer les users avec plus de 5 posts.  
- Faire un join entre `posts` et `users`.  
- Faire un `groupBy`.  
- Utiliser `having()`.  

---

## 🟢 7️⃣ Blade & Directives

### 🔹 Théorie

- C’est quoi Blade ?  
- Différence entre :
  - `{{ }}`
  - `{!! !!}`  
- Que fait `@extends` ?  
- Que fait `@section` ?  
- Que fait `@yield` ?  
- Que fait `@csrf` ?  
- Différence entre `@if` et `@isset` ?  

### 🔹 Pratique

- Créer layout principal.  
- Créer vue avec section.  
- Faire une boucle `@foreach`.  
- Protéger un formulaire avec `@csrf`.  

---

## 🟢 8️⃣ Sécurité

### 🔹 Théorie

- C’est quoi CSRF ?  
- Comment Laravel protège contre CSRF ?  
- C’est quoi XSS ?  
- Comment Blade protège contre XSS ?  
- C’est quoi une injection SQL ?  
- Pourquoi Eloquent protège contre SQL Injection ?  
- Quand peut-on être vulnérable ?  

### 🔹 Challenge

- Corriger un formulaire vulnérable.  
- Identifier une requête SQL dangereuse.  

---

## 🟢 9️⃣ Middleware

### 🔹 Théorie

- C’est quoi un middleware ?  
- Différence entre middleware global et route.  
- Où enregistrer un middleware ?  
- Comment passer des paramètres à un middleware ?  

### 🔹 Pratique

- Créer middleware Admin.  
- Bloquer les utilisateurs non admin.  
- Appliquer middleware à un groupe de routes.  

---

## 🟢 🔟 Architecture & Bonnes Pratiques

### 🔹 Questions

- Pourquoi séparer Controller / Service / Repository ?  
- Pourquoi éviter la logique métier dans Controller ?  
- C’est quoi le principe SOLID ?  
- Pourquoi utiliser Request validation ?  
- Pourquoi utiliser FormRequest ?  
- Comment organiser un projet Laravel propre ?  

---

## 🟢 🧠 Challenge Final Global

Créer une mini application comprenant :  

- User  
- Post  
- Comment  
- Relation complète  
- Auth  
- Middleware admin  
- CRUD complet  
- Eager loading optimisé  
- Protection CSRF  
- Validation FormRequest  