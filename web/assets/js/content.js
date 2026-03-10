// All course content embedded as JS strings
window.MODULES = [
  {
    id: "git",
    icon: "🌿",
    title: "Git & GitFlow",
    color: "#f97316",
    colorClass: "orange",
    level: "Débutant",
    files: [
      {
        slug: "git-workflow",
        title: "Git Workflow & Bonnes Pratiques",
        content: `# 🟢 Git & GitFlow — Révision

## 1️⃣ Concepts Git de base

- **Git** : système de gestion de versions distribuées.
- **Repository (repo)** : dossier contenant le projet suivi par Git.
- **Commit** : capture de l'état du projet à un instant donné.
- **Branch** : ligne de développement indépendante.
- **Merge** : fusion de branches.
- **Pull** : récupérer les changements depuis le dépôt distant.
- **Push** : envoyer les changements vers le dépôt distant.
- **Clone** : copier un dépôt distant localement.
- **Staging / Index** : zone temporaire avant le commit.

### Commandes Git essentielles

| Commande | Description |
|---|---|
| \`git init\` | Initialise un dépôt Git local. |
| \`git clone <repo>\` | Clone un dépôt distant. |
| \`git status\` | Affiche l'état des fichiers. |
| \`git add <file>\` | Ajoute un fichier au staging. |
| \`git commit -m "message"\` | Crée un commit. |
| \`git log\` | Affiche l'historique des commits. |
| \`git diff\` | Montre les différences non commitées. |
| \`git branch\` | Liste les branches locales. |
| \`git checkout <branch>\` | Change de branche. |
| \`git merge <branch>\` | Fusionne une branche. |
| \`git pull\` | Récupère et fusionne depuis le distant. |
| \`git push\` | Envoie les commits vers le dépôt distant. |
| \`git reset\` | Annule des modifications. |
| \`git revert\` | Annule un commit en créant un nouveau. |

---

## 2️⃣ GitFlow

### Branches principales

| Branche | Usage |
|---|---|
| \`main\` | Code stable, prêt pour la production. |
| \`develop\` | Branche d'intégration de développement. |
| \`feature/<nom>\` | Nouvelle fonctionnalité en cours. |
| \`release/<version>\` | Préparation d'une release. |
| \`hotfix/<nom>\` | Correction urgente sur \`main\`. |

### Workflow GitFlow

**1. Créer une fonctionnalité**
\`\`\`bash
git checkout develop
git checkout -b feature/login
\`\`\`

**2. Développement et commit**
\`\`\`bash
git add .
git commit -m "Ajout fonctionnalité login"
\`\`\`

**3. Fusion dans develop**
\`\`\`bash
git checkout develop
git merge feature/login
git branch -d feature/login
\`\`\`

**4. Release**
\`\`\`bash
git checkout -b release/v1.0.0
git checkout main && git merge release/v1.0.0
git tag v1.0.0
\`\`\`

**5. Hotfix**
\`\`\`bash
git checkout main
git checkout -b hotfix/correction-bug
git commit -am "Correction bug critique"
git checkout main && git merge hotfix/correction-bug
git tag v1.0.1
\`\`\`

### Bonnes pratiques
- Toujours mettre à jour \`develop\` avant de créer une branche.
- Commits clairs et descriptifs.
- Utiliser des branches courtes pour les features.
- Tester avant fusion. Taguer chaque release stable.

---

## ✅ Challenges Git / GitFlow

1. Initialiser un dépôt Git pour un projet Laravel.
2. Créer la branche \`develop\` à partir de \`main\`.
3. Développer une fonctionnalité dans \`feature/login\`.
4. Fusionner la feature dans \`develop\`.
5. Créer une \`release/v1.0.0\`, tester et fusionner dans \`main\`.
6. Effectuer un \`hotfix\` pour corriger un bug critique sur \`main\`.
7. Taguer toutes les releases.`
      }
    ]
  },
  {
    id: "html-css",
    icon: "🎨",
    title: "HTML & CSS",
    color: "#3b82f6",
    colorClass: "blue",
    level: "Débutant",
    files: [
      {
        slug: "html-css",
        title: "HTML & CSS — Révision complète",
        content: `# 🟢 Révision HTML & CSS

## 1️⃣ HTML — Structure de base

### Structure minimale d'une page HTML
\`\`\`html
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
\`\`\`

### Balises importantes

| Balise | Usage |
|---|---|
| \`<h1>…<h6>\` | Titres (h1 = principal). |
| \`<p>\` | Paragraphe. |
| \`<a href="">\` | Lien hypertexte. |
| \`<img src="" alt="">\` | Image avec texte alternatif. |
| \`<ul>/<ol>/<li>\` | Listes. |
| \`<div>\` | Conteneur générique block. |
| \`<span>\` | Conteneur inline. |
| \`<form>/<input>/<button>\` | Formulaire. |
| \`<header>/<footer>/<main>/<section>\` | Sections sémantiques. |
| \`<nav>\` | Menu de navigation. |

---

## 2️⃣ CSS — Sélecteurs et propriétés

### Sélecteurs

| Sélecteur | Exemple | Description |
|---|---|---|
| Universel | \`* {}\` | Tous les éléments. |
| Type | \`p {}\` | Tous les \`<p>\`. |
| ID | \`#header {}\` | id="header". |
| Classe | \`.btn {}\` | class="btn". |
| Descendant | \`div p {}\` | \`<p>\` dans \`<div>\`. |
| Pseudo-classes | \`a:hover {}\` | Changement au survol. |

### Texte et police
\`\`\`css
color: red;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: center;
\`\`\`

### Box Model
- **Margin** : espace extérieur.
- **Border** : bordure.
- **Padding** : espace intérieur.
- **Width / Height** : dimensions.

---

## 3️⃣ Flexbox

\`\`\`css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
\`\`\`

---

## 4️⃣ CSS Grid

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
\`\`\`

---

## 5️⃣ Media Queries — Responsive

\`\`\`css
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
\`\`\`

---

## ✅ Challenges HTML/CSS

1. Créer une page avec header, footer, sidebar et contenu principal.
2. Styliser le header avec background color et texte centré.
3. Créer un menu horizontal avec \`<ul>\` et \`<li>\`.
4. Créer un formulaire avec input, textarea et bouton.
5. Appliquer Flexbox pour aligner 3 div côte à côte.
6. Créer un layout Grid avec 3 colonnes et 2 lignes.
7. Ajouter hover sur boutons (changement couleur + ombre).
8. Créer une carte produit avec margin, padding, border-radius.
9. Faire une page responsive pour mobile avec media queries.
10. Utiliser dégradé comme fond de section.`
      }
    ]
  },
  {
    id: "javascript",
    icon: "⚡",
    title: "JavaScript",
    color: "#eab308",
    colorClass: "yellow",
    level: "Intermédiaire",
    files: [
      {
        slug: "js-logique",
        title: "JS — Logique & Manipulation",
        content: `# 🟢 JavaScript — Logique et Manipulations

> Challenges pratiques pour travailler les **tableaux, matrices, chaînes, boucles et conditions** sans utiliser les méthodes prédéfinies.

---

## 1️⃣ Tableaux (Array)

### Challenge 1 : Création et affichage
- Créer un tableau \`numbers\` avec 10 nombres aléatoires entre 1 et 100.
- Afficher tous les éléments du tableau avec une boucle \`for\`.

### Challenge 2 : Trouver maximum et minimum
- Trouver le nombre maximum et minimum **sans utiliser Math.max/Math.min**.

### Challenge 3 : Somme et moyenne
- Calculer la somme de tous les éléments.
- Calculer la moyenne des éléments.

### Challenge 4 : Insertion et suppression
- Ajouter un élément au début et à la fin du tableau.
- Supprimer le premier et le dernier élément **en manipulant les index**.

### Challenge 5 : Recherche
- Demander un nombre à l'utilisateur.
- Vérifier s'il est présent dans le tableau et afficher sa position.

---

## 2️⃣ Tri par logique (sans sort)

### Challenge 6 : Tri croissant
- Trier le tableau par ordre croissant **avec des boucles imbriquées**.

### Challenge 7 : Tri décroissant
- Trier le tableau par ordre décroissant **manuellement**.

### Challenge 8 : Tri alphabétique
- Créer un tableau de 5 mots. Les trier alphabétiquement **sans sort()**.

---

## 3️⃣ Matrices

### Challenge 9 : Création et affichage
- Créer une matrice 3x3. Afficher chaque ligne et chaque colonne.

### Challenge 10 : Somme ligne / colonne
- Calculer la somme de chaque ligne et de chaque colonne.

### Challenge 11 : Maximum et minimum
- Trouver le max et le min de la matrice.

### Challenge 12 : Transposition
- Créer une matrice transposée sans fonctions prédéfinies.

---

## 4️⃣ Chaînes de caractères

### Challenge 13 : Manipulations simples
- Compter le nombre de caractères **manuellement**.
- Convertir en majuscules **sans toUpperCase()** (via codes ASCII).
- Convertir en minuscules **sans toLowerCase()**.

### Challenge 14 : Recherche et remplacement
- Vérifier si un mot existe dans la phrase.
- Remplacer ce mot par un autre **manuellement**.

### Challenge 15 : Inversion
- Inverser la phrase caractère par caractère.

### Challenge 16 : Inversion mots
- Inverser l'ordre des mots : \`"Bonjour le monde"\` → \`"monde le Bonjour"\`.

---

## 5️⃣ Boucles

### Challenge 17 : Nombres
- Afficher tous les nombres de 1 à 50 avec \`for\`.
- Afficher les pairs avec \`while\`.
- Somme 1 à 100 avec \`do...while\`.

### Challenge 18 : Table de multiplication
- Afficher la table de multiplication de 1 à 10.
- Afficher uniquement les multiples de 3.

---

## 6️⃣ Logique et conditions

### Challenge 20 : Comparaison
- Vérifier si un nombre est positif, négatif ou nul.
- Vérifier si un nombre est pair ou impair.

### Challenge 22 : Classification de note
- >=90 : Excellent | >=70 : Bien | >=50 : Moyen | <50 : Faible

---

## ✅ Challenges Mixtes

### Challenge 23 : Fusion de tableaux
Créer deux tableaux de 5 nombres. Les fusionner et supprimer les doublons manuellement.

### Challenge 27 : Matrice diagonale
Créer une matrice 4x4 et calculer la somme de la diagonale principale.

### Challenge 28 : Inversion tableau
Inverser l'ordre des éléments d'un tableau sans \`reverse()\`.

---

## 🏆 Mini-Projets

1. **Mini panier d'achats** : tableau de prix → total avec réduction de 10%.
2. **Mini gestion de notes** : 5 élèves → moyenne, max, min.
3. **Mini mots croisés** : compter voyelles et consonnes manuellement.`
      },
      {
        slug: "js-dom",
        title: "JS — Manipulation du DOM",
        content: `# JavaScript – Manipulation du DOM

## Objectif
Pratiquer la **manipulation du DOM avec JavaScript** à travers une série de défis progressifs.

> Ressource : [https://ouchad97.github.io/e/](https://ouchad97.github.io/e/)

---

## 🟢 Niveau 1 : Découverte du DOM

1. Change la couleur de la **première marche**.
2. Agrandis **toutes les marches de l'escalier**.
3. Change uniquement la couleur des **marches impaires**.
4. Ajoute un **texte personnalisé** sur la dernière marche.
5. Ajoute une **nouvelle classe** à la troisième marche.

---

## 🟡 Niveau 2 : Dynamique et interactions

6. Crée un **bouton** qui change la couleur de **toutes les marches** au clic.
7. Crée un bouton qui **inverse la direction de l'escalier**.
8. Ajoute un bouton **"+"** qui ajoute **une nouvelle marche à chaque clic**.
9. Ajoute un bouton **"–"** qui supprime **la dernière marche**.
10. Crée une **barre de recherche** : la marche correspondante change de couleur.

---

## 🟠 Niveau 3 : Animation et logique

11. Crée un bouton qui **anime les marches une par une** (apparition progressive).
12. Interaction sur les marches paires, impaires, ou avec une classe spécifique.
13. Bouton qui **ajoute automatiquement une marche toutes les 2 secondes** jusqu'à 10.
14. Bouton **"Cacher / Montrer"** qui rend l'escalier visible ou invisible.

---

## 🔴 Niveau 4 : Créativité et gestion avancée

15. Active le **glisser-déposer (drag & drop)** pour réorganiser les marches.

---

## Compétences travaillées

- \`querySelector\` / \`querySelectorAll\`
- \`classList\` — manipulation des styles
- \`addEventListener\`
- Création et suppression d'éléments
- Animations simples — interactions utilisateur`
      },
      {
        slug: "js-data",
        title: "JS — Manipulation de données",
        content: `# JavaScript – Manipulation de données

## Objectif
Pratiquer la **manipulation de données avec JavaScript** : parcours, filtrage, tri, recherche.

> Ressource : [https://ouchad97.github.io/j/](https://ouchad97.github.io/j/)

---

## 🟢 Niveau 1 : Exploration des données

1. Afficher **tous les noms dans la console**.
   → \`function showAllNames()\`

2. Afficher uniquement les **nationalités (sans doublons)**.
   → \`function showUniqueNationalities()\`

3. Compter combien de personnes sont **Marocaines**.
   → \`function countMoroccan()\`

---

## 🟡 Niveau 2 : Manipulation du DOM

4. Bouton qui **supprime toutes les cartes des Tunisiennes**.
   → \`function removeTunisians()\`

5. Bouton qui **colore en vert toutes les cartes des Marocains**.
   → \`function highlightMoroccan()\`

6. Bouton qui **trie les cartes par nom**.
   → \`function sortByName()\`

7. Bouton qui **filtre les Marocains seulement**.
   → \`function filterMoroccan()\`

---

## 🟠 Niveau 3 : Recherche et filtrage

8. Afficher les personnes **dont le prénom commence par "A"**.
   → \`function showNamesStartingWithA()\`

9. **Champ de recherche** qui filtre les cartes.
   → \`function searchCards(text)\`

10. Bouton qui affiche **le nombre de cartes visibles**.
    → \`function countVisibleCards()\`

---

## 🔴 Niveau 4 : Logique avancée

11. Bouton qui **mélange les cartes (randomize)**.
    → \`function randomizeCards()\`

12. Bouton qui **réinitialise l'état initial des cartes**.
    → \`function resetCards()\`

13. Calculer **la moyenne d'âge des personnes**.
    → \`function averageAge()\`

14. **Select / dropdown** pour filtrer par nationalité.
    → \`function filterByNationality(nationality)\`

15. Permettre **d'éditer le nom et prénom** via un champ inline.
    → \`function editName(cardId)\`

---

## Compétences travaillées

- \`map()\` — \`filter()\` — \`find()\` — \`sort()\`
- Manipulation du **DOM** — gestion des **événements**`
      }
    ]
  },
  {
    id: "uml",
    icon: "📐",
    title: "UML & Modélisation",
    color: "#a855f7",
    colorClass: "purple",
    level: "Intermédiaire",
    files: [
      {
        slug: "use-case",
        title: "Diagramme Use Case",
        content: `# UML – Diagramme de cas d'utilisation (Use Case)

## Objectif
Modéliser les **interactions entre les acteurs et le système**.

> Que peut faire l'utilisateur avec le système ?

---

## Composants

### Acteur
Entité externe interagissant avec le système.
- **Principal** : utilise directement le système
- **Secondaire** : fournit un service au système

### Cas d'utilisation
Représente une **fonctionnalité offerte par le système** (représentés par des ovales).

### Relations

| Relation | Description |
|---|---|
| **Association** | Lien simple acteur → fonctionnalité |
| **Include** | Cas toujours inclus (obligatoire) |
| **Extend** | Comportement optionnel |
| **Généralisation** | Acteur hérite d'un autre acteur |

---

## Bonnes pratiques

✔ Nommer les cas d'utilisation avec **un verbe** (Créer compte, Modifier profil)
✔ Garder le diagramme **simple et lisible**
✔ Identifier les **acteurs principaux**
✔ Vérifier la cohérence avec le **cahier des charges**

---

## Erreurs fréquentes

| Problème | Solution |
|---|---|
| Acteur = personne spécifique | Un acteur = un **rôle** (Client, Admin) |
| Use Case trop technique | Représenter une **fonction métier** |
| Trop de cas d'utilisation | Créer plusieurs diagrammes |
| Include/Extend confondus | Include = obligatoire, Extend = optionnel |

---

## ✅ Challenges

### Challenge 1 – Bibliothèque
Acteurs : Bibliothécaire, Membre
Fonctionnalités : emprunter livre, retourner livre, rechercher livre, gérer catalogue

### Challenge 2 – E-commerce
Acteurs : Client, Administrateur
Fonctionnalités : créer compte, se connecter, consulter produit, passer commande, gérer produits
→ Ajouter au moins une relation **include** et une relation **extend**

### Challenge 3 – Gestion des dépenses
Acteur : utilisateur
Fonctionnalités : créer, modifier, supprimer dépense, consulter statistiques

### Challenge 4 – Plateforme de formation
Acteurs : apprenant, formateur, administrateur
Fonctionnalités : consulter cours, soumettre exercice, corriger exercice, gérer utilisateurs

### Challenge Avancé – Fil Rouge YouCode
Acteurs : candidat, administrateur, système de quiz
Fonctionnalités : s'inscrire check-in, passer quiz, consulter résultat, gérer candidats`
      },
      {
        slug: "diagramme-classes",
        title: "Diagramme de classes",
        content: `# UML – Diagramme de classes

## Objectif
**Modéliser les entités métier**, leurs attributs, leurs méthodes et leurs relations.

---

## 1. Problèmes fréquents et solutions

| Problème | Solution |
|---|---|
| Classes sans méthodes | Identifier les responsabilités et ajouter les méthodes principales |
| Méthodes mal placées | Appliquer le principe de responsabilité unique |
| Attributs absents | Mettre à jour le diagramme à chaque évolution |
| Diagramme incohérent | Aligner conception UML et implémentation |
| Classes vides | Supprimer ou fusionner |

### Relations UML

| Relation | Description |
|---|---|
| **Composition** | Durée de vie dépend totalement de l'autre objet |
| **Agrégation** | Faible dépendance |
| **Association** | Lien simple |
| **Généralisation** | Héritage (flèche vers la classe parente) |

---

## 2. Bonnes pratiques

- Nommer classes et méthodes **clairement** selon leur rôle métier.
- Vérifier la cohérence avec le **cahier des charges**.
- Garder le diagramme **simple et lisible**.
- Utiliser les relations UML correctement.
- Mettre à jour le diagramme **à chaque évolution**.

---

## ✅ Challenges – Diagramme de classes

### Challenge 1 – Bibliothèque
Classes : **Livre**, **Membre**, **Bibliothécaire**, **Emprunt**
- Membre → Emprunt → Livre
- Bibliothécaire → Livre (gestion)
- Ajouter une **composition** et un **héritage**

### Challenge 2 – E-commerce
Classes : **Client**, **Commande**, **Produit**, **Panier**
- Client → Commande → Produit
- Panier → Produit — Classe associative si nécessaire

### Challenge 3 – Gestion des dépenses
Classes : **Utilisateur**, **Dépense**, **Catégorie**
- Utilisateur → Dépense → Catégorie

### Challenge 4 – Application de quiz
Classes : **Candidat**, **Quiz**, **Question**, **Réponse**, **Resultat**
- Candidat → Quiz → Question → Réponse
- Candidat → Resultat

### Challenge 5 – Inscription YouCode
Classes : **Candidat**, **Administrateur**, **Checkin**, **Quiz**, **Question**, **Réponse**, **Inscription**
- Candidat → Inscription → Checkin → Quiz → Question → Réponse
- Administrateur → Gestion des Checkins et Candidats
- Ajouter **attributs, méthodes et cardinalités réalistes**`
      }
    ]
  },
  {
    id: "sql",
    icon: "🗄️",
    title: "SQL & Bases de données",
    color: "#14b8a6",
    colorClass: "teal",
    level: "Intermédiaire",
    files: [
      {
        slug: "sql-requetes",
        title: "SQL — Requêtes & Relations",
        content: `# SQL – Aggregations & Joins Challenges

## Objectif
Réviser les concepts fondamentaux de SQL : création de tables, relations, agrégation, jointures, filtrage.

---

## 🏦 Schéma de la base de données

Tables : \`clients\`, \`commandes\`, \`produits\`, \`commande_produit\`

---

## 🛠️ Création des tables

\`\`\`sql
CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    ville VARCHAR(100)
);

CREATE TABLE commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    date_commande DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE produits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prix DECIMAL(10,2),
    categorie VARCHAR(100)
);

CREATE TABLE commande_produit (
    id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT,
    produit_id INT,
    quantite INT,
    FOREIGN KEY (commande_id) REFERENCES commandes(id),
    FOREIGN KEY (produit_id) REFERENCES produits(id)
);
\`\`\`

---

## 🧪 Données de test

\`\`\`sql
INSERT INTO clients (nom, ville) VALUES
('Ahmed', 'Casablanca'), ('Sara', 'Rabat'),
('Youssef', 'Casablanca'), ('Khadija', 'Marrakech'), ('Omar', 'Fes');

INSERT INTO produits (nom, prix, categorie) VALUES
('PC Portable', 7000, 'Informatique'), ('Souris', 150, 'Accessoires'),
('Clavier', 300, 'Accessoires'), ('Ecran', 2000, 'Informatique'),
('Imprimante', 1800, 'Bureau');
\`\`\`

---

## ✅ Challenges SQL

### COUNT
1. Nombre total de clients.
2. Nombre total de commandes.
3. Nombre de commandes par client.

### AVG
1. Montant moyen des commandes.
2. Prix moyen des produits.
3. Montant moyen des commandes par client.

### SUM
1. Total des ventes.
2. Total des ventes par client.
3. Chiffre d'affaires par ville.

### MAX / MIN
1. Prix du produit le plus cher.
2. Montant de la commande la moins chère.
3. Montant maximum des commandes par client.

### GROUP BY
1. Nombre de clients par ville.
2. Nombre de commandes par client.
3. Chiffre d'affaires par client.

### HAVING
1. Clients ayant passé plus d'une commande.
2. Villes ayant plus de deux clients.
3. Clients dont le CA dépasse un seuil.

---

## 🔗 JOINS

### INNER JOIN
1. Clients ayant au moins une commande.
2. Produits commandés.
3. Chiffre d'affaires par produit.

### LEFT JOIN
1. Tous les clients, même sans commande.
2. Tous les produits, même jamais commandés.
3. Clients n'ayant passé aucune commande.

### CASE WHEN
\`\`\`sql
SELECT nom, total,
  CASE
    WHEN total < 1000 THEN 'Petite commande'
    WHEN total BETWEEN 1000 AND 2000 THEN 'Commande moyenne'
    ELSE 'Grande commande'
  END AS categorie_commande
FROM commandes;
\`\`\`

---

## 🚀 Challenges avancés
1. Nombre de commandes et total des ventes par client.
2. Produits jamais commandés.
3. Clients ayant le panier moyen le plus élevé.
4. Chiffre d'affaires par catégorie.
5. Les 3 meilleurs clients en chiffre d'affaires.
6. Villes générant le plus de chiffre d'affaires.
7. Produit le plus vendu.
8. Commande contenant le plus de produits.
9. Clients ayant acheté au moins 3 produits différents.`
      }
    ]
  },
  {
    id: "poo",
    icon: "🧩",
    title: "PHP & POO",
    color: "#6366f1",
    colorClass: "indigo",
    level: "Avancé",
    files: [
      {
        slug: "poo",
        title: "POO PHP — Révision & Challenges",
        content: `# POO PHP — Banque de questions et mises en situation

## 1️⃣ Questions théoriques

1. Qu'est-ce que l'encapsulation ?
2. Quelle est la différence entre visibilité et encapsulation ?
3. Qu'est-ce que le polymorphisme ? Donner un exemple.
4. Qu'est-ce que l'abstraction ?
5. Différence entre une classe abstraite et une interface.
6. Peut-on instancier une classe abstraite ? Pourquoi ?
7. À quoi servent les getters et setters ?
8. Différence entre \`parent\` et \`self\`.
9. Différence entre \`static\` et \`const\`.
10. Différence entre overloading et overriding.
11. Rôle du constructeur et du destructeur.
12. Peut-on déclarer une méthode abstraite \`private\` ?
13. À quoi sert le mot-clé \`final\` ?
14. Accès aux propriétés statiques : comment et pourquoi ?
15. Différence entre un attribut statique et un attribut d'instance.
16. Comment fonctionne l'héritage en POO ?
17. Comment appliquer le polymorphisme avec une interface ?
18. Interface vs classe abstraite : quand utiliser chacune ?
19. Qu'est-ce que le mot-clé \`this\` ?
20. Différence entre \`isset()\` et \`empty()\` en PHP.

---

## 2️⃣ Mises en situation pratiques

### 2.1 Classe abstraite et polymorphisme
Créer une classe \`Payment\` et deux classes \`PayPalPayment\` et \`CardPayment\`.
Appliquer **abstraction** et **polymorphisme**.

### 2.3 Interface et héritage
Créer une interface \`Authentification\`. Créer des classes qui l'implémentent.

### 2.6 Classe simple
Créer une classe avec 3 attributs (différentes visibilités) et 3 méthodes.

### 2.8 Association
Créer \`User\` et \`Course\`. Associer plusieurs cours à un utilisateur.

---

## 3️⃣ Scénarios d'application

### 3.1 Gestion de paiement
\`\`\`php
interface Payable {
    public function calculerMontant(): float;
}

abstract class Utilisateur {
    protected string $nom;
    protected string $email;
}

class Client extends Utilisateur implements Payable {
    public function calculerMontant(): float {
        return 100.0;
    }
}
\`\`\`

### 3.2 Inventaire de bibliothèque
\`\`\`php
abstract class Document {
    protected string $titre;
    protected string $auteur;
    abstract public function afficherInfos(): void;
}

class Livre extends Document {
    public function afficherInfos(): void {
        echo "{$this->titre} par {$this->auteur}";
    }
}
\`\`\`

### 3.4 Suivi des inscriptions
\`\`\`php
class Etudiant {
    public string $nom;
    private array $coursInscrits = [];
    private static int $totalInscrits = 0;

    public function inscrireCours(string $cours): void {
        $this->coursInscrits[] = $cours;
        self::$totalInscrits++;
    }

    public static function getTotalInscrits(): int {
        return self::$totalInscrits;
    }
}
\`\`\`

---

## ✅ Challenges avancés

### 4.1 Système de paiement e-commerce
Interface \`PaymentMethod\` : \`pay($amount)\`.
Implémenter : Carte bancaire, PayPal, Cash.
Classe \`Order\` utilise n'importe quelle méthode.

### 4.2 Équipe de basket
Classe \`Player\` : $nom, $poste.
Classe \`Coach\` : plan de jeu.
Classe \`Team\` : 5 joueurs + coach.

### 4.5 Système de transport
Interface \`Vehicle\` : \`start()\`, \`stop()\`.
Classes : \`Car\`, \`Bike\`, \`Bus\`.
Classe \`Driver\` utilise n'importe quel véhicule.

### 4.9 Gestion des notifications
Interface \`Notification\` : \`send($message)\`.
Implémenter : \`Email\`, \`SMS\`, \`PushNotification\`.
Classe \`NotificationService\` envoie via le type choisi.`
      }
    ]
  },
  {
    id: "laravel",
    icon: "🚀",
    title: "Laravel",
    color: "#ef4444",
    colorClass: "red",
    level: "Avancé",
    files: [
      {
        slug: "laravel",
        title: "Laravel — Révision complète",
        content: `# 📘 Document de Révision Laravel

---

## 🟢 Bases Laravel

1. Qu'est-ce que Laravel ?
2. Pourquoi utiliser un framework PHP ?
3. Citer 3 avantages de Laravel.
4. Rôle du fichier \`.env\` ?
5. À quoi sert Composer ?
6. Qu'est-ce que le pattern MVC ?
7. Rôle de Model / Controller / View.
8. Où définit-on les routes dans Laravel ?
9. Différence entre \`web.php\` et \`api.php\`.
10. À quoi sert Blade ?

---

## 1️⃣ Routage & Controllers

### Questions théoriques
1. Différence entre \`Route::get()\` et \`Route::post()\`.
2. Que fait \`Route::resource()\` ?
3. Différence entre Controller classique et Single Action Controller.
4. Qu'est-ce que l'injection de dépendance ?
5. Comment passer des paramètres dans une route ?
6. Comment protéger une route avec middleware ?

### Challenges pratiques
\`\`\`php
// Route avec paramètre
Route::get('/profile/{id}', [UserController::class, 'show']);

// Resource controller
Route::resource('posts', PostController::class);

// Route protégée
Route::middleware('auth')->get('/dashboard', fn() => view('dashboard'));

// Route nommée
Route::get('/home', [HomeController::class, 'index'])->name('home');
return redirect()->route('home');
\`\`\`

---

## 2️⃣ Migrations – Seeders – Factories

### Théorie
1. À quoi sert une migration ?
2. Différence entre \`migrate\`, \`migrate:fresh\`, \`rollback\`.
3. Que fait un Seeder ? Une Factory ?
4. Comment définir une clé étrangère ?

### Pratique
\`\`\`php
// Migration posts
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->foreignId('user_id')->constrained();
    $table->timestamps();
});
\`\`\`

---

## 3️⃣ Eloquent ORM

### Questions
1. Différence entre Eloquent et Query Builder.
2. Différence entre \`get()\` et \`first()\`.
3. C'est quoi le Mass Assignment ?
4. Différence entre \`$fillable\` et \`$guarded\`.
5. Différence entre \`save()\` et \`create()\`.
6. C'est quoi le Soft Delete ?

### Pratique
\`\`\`php
// CRUD Eloquent
$users = User::all();
$user = User::find($id);

$post = Post::create(['title' => 'Titre', 'content' => '...']);

$post->update(['title' => 'Nouveau titre']);

$post->delete();
\`\`\`

---

## 4️⃣ Relations Eloquent

### Questions
1. Différence entre \`hasOne\`, \`hasMany\`, \`belongsTo\`, \`belongsToMany\`.
2. Différence entre eager loading et lazy loading.
3. Que fait \`with()\` ? Que fait \`load()\` ?

### Pratique
\`\`\`php
// Relations
class User extends Model {
    public function posts() { return $this->hasMany(Post::class); }
}
class Post extends Model {
    public function user() { return $this->belongsTo(User::class); }
}

// Eager loading (évite N+1)
$posts = Post::with('user')->get();
foreach ($posts as $post) {
    echo $post->user->name; // Pas de requête supplémentaire
}
\`\`\`

---

## 5️⃣ Blade & Directives

\`\`\`blade
{{-- Layout layout.blade.php --}}
<html><body>@yield('content')</body></html>

{{-- Vue enfant --}}
@extends('layout')
@section('content')
    <h1>Bonjour {{ $user->name }}</h1>
    @foreach($posts as $post)
        <p>{{ $post->title }}</p>
    @endforeach
@endsection

{{-- Formulaire sécurisé --}}
<form method="POST">
    @csrf
    <input type="text" name="title">
    <button type="submit">Créer</button>
</form>
\`\`\`

---

## 6️⃣ Sécurité

- **CSRF** : Comment Laravel protège avec \`@csrf\` ?
- **XSS** : Comment Blade protège avec \`{{ }}\` ?
- **SQL Injection** : Pourquoi Eloquent protège automatiquement ?

---

## 7️⃣ Middleware

\`\`\`php
// Créer middleware
php artisan make:middleware AdminMiddleware

// Appliquer à un groupe
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);
});
\`\`\`

---

## ✅ Challenge Final Global

Créer une mini application avec :
- **User** — **Post** — **Comment** — Relation complète
- Auth + Middleware admin
- CRUD complet
- Eager loading optimisé
- Protection CSRF
- Validation FormRequest`
      }
    ]
  }
];
