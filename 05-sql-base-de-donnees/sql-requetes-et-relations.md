# SQL – Aggregations & Joins Challenges

## Objectif

Cette activité permet de réviser les concepts fondamentaux de SQL :

* création de tables
* relations entre tables
* requêtes d’agrégation
* jointures
* filtrage et analyse de données

L'objectif est de résoudre une série de **challenges SQL progressifs**.

---

# 🏦 Schéma de la base de données

Tables utilisées :

* `clients`
* `commandes`
* `produits`
* `commande_produit`

---

# 🛠️ Création des tables

```sql
DROP TABLE IF EXISTS commande_produit;
DROP TABLE IF EXISTS commandes;
DROP TABLE IF EXISTS produits;
DROP TABLE IF EXISTS clients;

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
```

---

# 🧪 Insertion des données

```sql
INSERT INTO clients (nom, ville) VALUES
('Ahmed', 'Casablanca'),
('Sara', 'Rabat'),
('Youssef', 'Casablanca'),
('Khadija', 'Marrakech'),
('Omar', 'Fes');

INSERT INTO commandes (client_id, date_commande, total) VALUES
(1, '2024-01-10', 1200),
(1, '2024-01-15', 800),
(2, '2024-02-01', 3000),
(3, '2024-02-10', 1500),
(4, '2024-03-05', 400),
(4, '2024-03-20', 2200);

INSERT INTO produits (nom, prix, categorie) VALUES
('PC Portable', 7000, 'Informatique'),
('Souris', 150, 'Accessoires'),
('Clavier', 300, 'Accessoires'),
('Ecran', 2000, 'Informatique'),
('Imprimante', 1800, 'Bureau');

INSERT INTO commande_produit (commande_id, produit_id, quantite) VALUES
(1, 1, 1),
(1, 2, 2),
(2, 3, 1),
(3, 4, 1),
(3, 2, 3),
(4, 5, 1),
(6, 1, 1),
(6, 4, 2);
```

---

# Challenges SQL

## COUNT

1. Afficher le **nombre total de clients**.
2. Afficher le **nombre total de commandes**.
3. Afficher le **nombre de commandes par client**.

---

## AVG

1. Afficher le **montant moyen des commandes**.
2. Afficher le **prix moyen des produits**.
3. Afficher le **montant moyen des commandes par client**.

---

## SUM

1. Afficher le **total des ventes**.
2. Afficher le **total des ventes par client**.
3. Afficher le **chiffre d’affaires par ville**.

---

## MAX / MIN

1. Afficher le **prix du produit le plus cher**.
2. Afficher le **montant de la commande la moins chère**.
3. Afficher le **montant maximum des commandes par client**.

---

## GROUP BY

1. Afficher le **nombre de clients par ville**.
2. Afficher le **nombre de commandes par client**.
3. Afficher le **chiffre d’affaires par client**.

---

## ORDER BY

1. Afficher les **produits classés par prix croissant**.
2. Afficher les **commandes classées par date décroissante**.
3. Afficher les **clients classés par chiffre d’affaires décroissant**.

---

## HAVING

1. Afficher les **clients ayant passé plus d’une commande**.
2. Afficher les **villes ayant plus de deux clients**.
3. Afficher les **clients dont le chiffre d’affaires dépasse un seuil donné**.

---

# 🔗 JOINS

## JOIN

1. Afficher les **commandes avec le nom du client**.
2. Afficher les **produits commandés avec leurs quantités**.
3. Afficher le **détail des commandes (client, produit, quantité)**.

---

## INNER JOIN

1. Afficher les **clients ayant au moins une commande**.
2. Afficher les **produits qui ont été commandés**.
3. Afficher le **chiffre d’affaires par produit**.

---

## LEFT JOIN

1. Afficher **tous les clients**, même ceux **sans commande**.
2. Afficher **tous les produits**, même ceux **jamais commandés**.
3. Afficher les **clients n’ayant passé aucune commande**.

---

## RIGHT JOIN

1. Afficher **toutes les commandes**, même sans client associé.
2. Afficher **toutes les lignes de commande avec leurs produits**.
3. Identifier les **commandes sans client**.

---

# ⚙️ CASE WHEN

1. Classer les **commandes selon leur montant**.

Exemple :

* moins de 1000 → petite commande
* entre 1000 et 2000 → commande moyenne
* plus de 2000 → grande commande

2. Classer les **produits selon leur gamme de prix**.
3. Classer les **clients selon leur chiffre d’affaires**.

---

# 🚀 Challenges avancés

1. Afficher le **nombre de commandes et le total des ventes par client**.

2. Afficher les **produits jamais commandés**.

3. Afficher les **clients ayant le panier moyen le plus élevé**.

4. Afficher le **chiffre d’affaires par catégorie de produit**.

5. Afficher les **trois meilleurs clients en chiffre d’affaires**.

6. Afficher les **villes générant le plus de chiffre d’affaires**.

---

# 🔥 Challenges bonus

7. Afficher le **produit le plus vendu**.

8. Afficher la **commande contenant le plus de produits**.

9. Afficher les **clients ayant acheté au moins 3 produits différents**.

10. Afficher les **produits les plus vendus par catégorie**.

11. Afficher les **clients ayant commandé dans plusieurs catégories**.

12. Afficher le **top 3 des produits les plus rentables**.

---

# Compétences travaillées

* `SELECT`
* `WHERE`
* `GROUP BY`
* `HAVING`
* `JOIN`
* `ORDER BY`
* `CASE WHEN`
* requêtes analytiques
