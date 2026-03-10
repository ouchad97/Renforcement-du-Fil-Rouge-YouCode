# UML – Diagramme de classes

## Objectif

Le diagramme de classes UML permet de **modéliser les entités métier, leurs attributs, leurs méthodes et leurs relations**.

Il sert à :

* comprendre la structure du système
* identifier les responsabilités des classes
* anticiper les interactions entre objets

---

# 1. Problèmes fréquents et solutions

## Classes

**Problème 1 : Classes sans méthodes**

* **Description** : Des classes n’ont aucune méthode.
* **Solution** : Identifier les responsabilités de chaque classe et ajouter au minimum les méthodes principales.
* **À éviter** : Créer des classes juste pour représenter une table.

**Problème 2 : Méthodes mal placées dans les classes**

* **Description** : Certaines méthodes sont dans des classes qui ne possèdent pas les données nécessaires.
* **Solution** : Appliquer le principe de responsabilité unique.
* **À éviter** : Centraliser plusieurs comportements dans une seule classe.

**Problème 3 : Attributs absents du diagramme**

* **Description** : Le diagramme ne reflète pas tous les attributs présents dans le code.
* **Solution** : Mettre à jour le diagramme à chaque évolution.
* **À éviter** : Considérer le diagramme comme un simple livrable théorique.

**Problème 4 : Objets du code non représentés**

* **Description** : Des classes utilisées dans le code sont absentes du diagramme.
* **Solution** : Ajouter toutes les classes métier importantes.
* **À éviter** : Oublier des classes transverses importantes.

**Problème 5 : Diagramme incohérent avec l’implémentation**

* **Description** : Le diagramme ne correspond pas à la logique du code.
* **Solution** : Aligner conception UML et implémentation.
* **À éviter** : Modifier le code sans mettre à jour le diagramme.

**Problème 6 : Classes inutiles ou vides**

* **Description** : Certaines classes n’ont ni attributs ni méthodes pertinentes.
* **Solution** : Supprimer ou fusionner ces classes.
* **À éviter** : Ajouter des classes pour "gonfler" le diagramme.

**Problème 7 : Classes associatives sans attributs**

* **Description** : Classe pivot sans information supplémentaire.
* **Solution** : Créer une relation simple si aucun attribut n’est nécessaire.
* **À éviter** : Confondre table pivot et classe UML.

---

## Relations UML

**Problème 8 : Mauvaise utilisation de la composition**

* Composition = durée de vie dépend totalement de l’autre objet.

**Problème 9 : Confusion composition / agrégation**

* Composition = forte dépendance
* Agrégation = faible dépendance

**Problème 10 : Cardinalités inversées ou incorrectes**

* Vérifier les règles métier avant de définir la multiplicité.

**Problème 11 : Multiplicité mal comprise**

* 1, 0..1, 1..*, 0..* doivent correspondre à des cas réels.

**Problème 12 : Relations manquantes ou incohérentes**

* Vérifier toutes les interactions entre entités métier.

---

## Généralisation / Spécialisation

**Problème 13 : Flèches de généralisation absentes ou inversées**

* La flèche pointe toujours vers la classe **parente**.

**Problème 14 : Difficulté à expliquer héritage**

* Utiliser l’héritage pour représenter "est un" (is-a), pas seulement pour partager des attributs.

**Problème 15 : Mauvaise identification des types d’acteurs**

* Identifier correctement acteur principal, secondaire et généralisation d’acteurs.

---

# 2. Bonnes pratiques

* Nommer les classes et méthodes **clairement** selon leur rôle métier.
* Vérifier la **cohérence avec le cahier des charges**.
* Garder le diagramme **simple et lisible**.
* Utiliser les **relations UML correctement** : association, composition, agrégation, héritage.
* Mettre à jour le diagramme **à chaque évolution du code**.

---

# 3. Challenges – Diagramme de classes

## Challenge 1 – Bibliothèque

Créer un diagramme UML pour un **système de gestion de bibliothèque** :

* Classes possibles : Livre, Membre, Bibliothécaire, Emprunt
* Relations :

  * Membre → Emprunt
  * Emprunt → Livre
  * Bibliothécaire → Livre (gestion)
* Ajouter au moins une **composition** et un **héritage** si nécessaire.

---

## Challenge 2 – Plateforme e-commerce

* Classes possibles : Client, Commande, Produit, Panier
* Relations :

  * Client → Commande
  * Commande → Produit (association ou composition)
  * Panier → Produit
* Ajouter une classe associative si nécessaire.

---

## Challenge 3 – Gestion des dépenses

* Classes : Utilisateur, Dépense, Catégorie
* Relations :

  * Utilisateur → Dépense
  * Dépense → Catégorie

---

## Challenge 4 – Application de quiz

* Classes : Candidat, Quiz, Question, Réponse, Resultat
* Relations :

  * Candidat → Quiz
  * Quiz → Question
  * Question → Réponse
  * Candidat → Resultat

---

## Challenge 5 – Inscription YouCode

* Classes possibles : Candidat, Administrateur, Checkin, Quiz, Question, Réponse, Inscription
* Relations :

  * Candidat → Inscription → Checkin
  * Checkin → Quiz → Question → Réponse
  * Administrateur → Gestion des Checkins et Candidats
* Ajouter **attributs, méthodes et cardinalités réalistes**.

---

# 4. Compétences travaillées

* Identifier **classes et attributs**
* Définir **méthodes principales**
* Utiliser correctement **relations et cardinalités**
* Appliquer **composition, agrégation, héritage**
* Créer des diagrammes cohérents avec le **domaine métier**
* Détecter et corriger les **erreurs fréquentes UML**
