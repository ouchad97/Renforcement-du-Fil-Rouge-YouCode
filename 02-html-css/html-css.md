````markdown
# 🟢 Révision HTML & CSS

---

## 1️⃣ HTML — Structure de base et balises

### 1.1 Structure minimale d’une page HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page</title>
</head>
<body>
  <!-- Contenu ici -->
</body>
</html>
````

### 1.2 Balises importantes

| Balise                                           | Usage                                              |
| ------------------------------------------------ | -------------------------------------------------- |
| `<h1> … <h6>`                                    | Titres, de h1 (principal) à h6 (le plus petit).    |
| `<p>`                                            | Paragraphe.                                        |
| `<a href="">`                                    | Lien hypertexte.                                   |
| `<img src="" alt="">`                            | Image avec texte alternatif.                       |
| `<ul>` / `<ol>` / `<li>`                         | Liste non ordonnée / ordonnée / éléments de liste. |
| `<div>`                                          | Conteneur générique block.                         |
| `<span>`                                         | Conteneur inline.                                  |
| `<form>` / `<input>` / `<button>`                | Formulaire, champs et boutons.                     |
| `<table>` / `<tr>` / `<td>` / `<th>`             | Tableaux.                                          |
| `<header>` / `<footer>` / `<main>` / `<section>` | Sections sémantiques.                              |
| `<nav>`                                          | Menu de navigation.                                |
| `<article>` / `<aside>`                          | Contenu autonome / contenu annexe.                 |

### 1.3 Attributs fréquents

* `id` : identifiant unique.
* `class` : pour styliser ou sélectionner plusieurs éléments.
* `src` / `href` / `alt` : images et liens.
* `type` / `value` / `name` : formulaires.
* `placeholder` : texte indicatif pour les inputs.

---

## 2️⃣ CSS — Sélecteurs et propriétés de base

### 2.1 Sélecteurs

| Sélecteur      | Exemple            | Description                              |
| -------------- | ------------------ | ---------------------------------------- |
| Universel      | `* {}`             | Tous les éléments.                       |
| Type           | `p {}`             | Tous les `<p>`.                          |
| ID             | `#header {}`       | Élément avec id="header".                |
| Classe         | `.btn {}`          | Tous les éléments avec class="btn".      |
| Descendant     | `div p {}`         | Tous les `<p>` à l’intérieur de `<div>`. |
| Enfant         | `ul > li {}`       | `<li>` directement dans `<ul>`.          |
| Attribut       | `[type="text"] {}` | Élément avec attribut type="text".       |
| Pseudo-classes | `a:hover {}`       | Changement au survol.                    |

### 2.2 Couleurs

* Noms : `red`, `blue`, `green`, etc.
* Hex : `#FF0000`, `#00FF00`, `#0000FF`.
* RGB : `rgb(255,0,0)`.
* RGBA : `rgba(255,0,0,0.5)` (transparence).
* HSL : `hsl(120, 100%, 50%)`.

### 2.3 Texte et police

```css
color: red; /* couleur texte */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: underline;
line-height: 1.5;
```

### 2.4 Boîte (Box Model)

* **Margin** : espace à l’extérieur de l’élément.
* **Border** : bordure.
* **Padding** : espace intérieur.
* **Width / Height** : dimensions de l’élément.

```css
div {
  margin: 10px;
  padding: 15px;
  border: 2px solid black;
  width: 200px;
  height: 100px;
}
```

---

## 3️⃣ Layout — Flexbox

### 3.1 Conteneur Flex

```css
.container {
  display: flex; /* active flexbox */
  flex-direction: row; /* row (default) ou column */
  justify-content: space-between; /* alignement horizontal */
  align-items: center; /* alignement vertical */
  flex-wrap: wrap; /* autorise retour à la ligne */
}
```

### 3.2 Éléments Flex

```css
.item {
  flex-grow: 1; /* prend l’espace restant */
  flex-shrink: 1; /* rétrécit si nécessaire */
  flex-basis: 100px; /* largeur de base */
  align-self: flex-start; /* surclasse align-items */
}
```

### 3.3 Propriétés utiles

* `justify-content`: flex-start, flex-end, center, space-between, space-around.
* `align-items`: flex-start, flex-end, center, stretch, baseline.
* `flex-wrap`: nowrap, wrap, wrap-reverse.
* `gap`: espace entre éléments.

---

## 4️⃣ Layout — CSS Grid

### 4.1 Conteneur Grid

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
  grid-template-rows: 200px 200px; /* 2 lignes de 200px */
  gap: 10px; /* espace entre les cellules */
}
```

### 4.2 Placement des éléments

```css
.item1 {
  grid-column: 1 / 3; /* commence à colonne 1, finit avant 3 */
  grid-row: 1 / 2; /* ligne 1 */
}
```

### 4.3 Propriétés utiles

* `grid-template-columns` / `grid-template-rows`
* `grid-gap` / `gap`
* `justify-items` / `align-items`
* `justify-content` / `align-content`

---

## 5️⃣ Marges, Padding et Borders

```css
div {
  margin: 10px 20px 30px 40px; /* top right bottom left */
  padding: 5px 10px; /* top-bottom right-left */
  border: 2px solid black;
  border-radius: 5px; /* arrondir les coins */
}
```

* Valeurs possibles : `px`, `%`, `em`, `rem`, `vh`, `vw`.

---

## 6️⃣ Couleurs et fonds

```css
body {
  background-color: #f5f5f5;
  color: #333333;
}

div {
  background: linear-gradient(to right, red, yellow);
  opacity: 0.8;
}
```

* `background-color`: couleur simple.
* `background-image`: image de fond.
* `opacity`: transparence globale.
* `linear-gradient` / `radial-gradient`: dégradés.

---

## 7️⃣ Positions

```css
.relative { position: relative; top: 10px; left: 20px; }
.absolute { position: absolute; top: 0; right: 0; }
.fixed { position: fixed; bottom: 0; }
.sticky { position: sticky; top: 0; }
```

* `z-index`: ordre de superposition.

---

## 8️⃣ Media Queries — Responsive

```css
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

* Permet de changer le layout selon la taille de l’écran.

---

## 9️⃣ Challenges pratiques HTML/CSS

1. Créer une page avec header, footer, sidebar et contenu principal.
2. Styliser le header avec background color et texte centré.
3. Créer un menu horizontal avec `<ul>` et `<li>`.
4. Créer un formulaire avec input, textarea et bouton.
5. Appliquer Flexbox pour aligner 3 div côte à côte.
6. Créer un layout Grid avec 3 colonnes et 2 lignes.
7. Ajouter hover sur boutons pour changer couleur et ombre.
8. Créer une carte produit avec margin, padding, border-radius et box-shadow.
9. Faire une page responsive pour mobile avec media queries.
10. Utiliser dégradé comme fond de section et changer couleur du texte.

---
 