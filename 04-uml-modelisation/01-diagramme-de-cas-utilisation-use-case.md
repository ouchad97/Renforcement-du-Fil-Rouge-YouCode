# UML – Diagramme de cas d’utilisation (Use Case)

## Objectif

Le diagramme de cas d’utilisation permet de **modéliser les interactions entre les acteurs et le système**.

Il répond principalement à la question :

> Que peut faire l’utilisateur avec le système ?

Ce diagramme est utilisé **au début de la conception** pour comprendre les fonctionnalités principales d’un système.

---

# Composants d’un diagramme de Use Case

## Acteur

Un **acteur** représente une entité externe qui interagit avec le système.

Exemples :

* utilisateur
* administrateur
* client
* système externe

Un acteur peut être :

* **principal** : celui qui utilise directement le système
* **secondaire** : celui qui fournit un service au système

---

## Cas d’utilisation (Use Case)

Un **cas d’utilisation** représente une **fonctionnalité offerte par le système**.

Exemples :

* créer un compte
* se connecter
* passer une commande
* consulter un produit

Les cas d’utilisation sont représentés par **des ovales**.

---

## Frontière du système

Le système est représenté par **un rectangle** contenant les cas d’utilisation.

Les acteurs se trouvent **à l’extérieur**.

---

## Relations dans un Use Case

### Association

Lien simple entre **acteur et fonctionnalité**.

Exemple :

Client → Passer commande

---

### Include

Indique qu’un cas d’utilisation **utilise toujours un autre cas**.

Exemple :

Passer commande
→ inclut
Vérifier paiement

---

### Extend

Indique qu’un comportement est **optionnel**.

Exemple :

Passer commande
→ extend
Appliquer code promo

---

### Généralisation d’acteurs

Un acteur peut **hériter du comportement d’un autre acteur**.

Exemple :

Utilisateur
↑
Administrateur

---

# Bonnes pratiques

✔ Nommer les cas d’utilisation avec **un verbe**

Exemples :

Créer compte
Modifier profil
Supprimer utilisateur

✔ Garder le diagramme **simple et lisible**

✔ Identifier les **acteurs principaux**

✔ Vérifier la cohérence avec **le cahier des charges**

---

# Erreurs fréquentes

## Problème 1 : Confusion entre acteur et rôle

Description :
Un acteur représente un **rôle**, pas une personne spécifique.

À éviter :
Ahmed, Sara

Correct :
Client, Administrateur

---

## Problème 2 : Cas d’utilisation trop techniques

Description :
Le Use Case doit représenter une **fonction métier**, pas une action technique.

À éviter :

* exécuter requête SQL
* appeler API

Correct :

* consulter commande
* gérer produit

---

## Problème 3 : Trop de cas d’utilisation

Description :
Un diagramme devient illisible si trop de fonctionnalités sont ajoutées.

Solution :

Créer plusieurs diagrammes.

---

## Problème 4 : Mauvaise utilisation de include et extend

Description :

* include = obligatoire
* extend = optionnel

À éviter :

Utiliser include et extend sans justification.

---

## Problème 5 : Acteurs inutiles

Description :
Certains acteurs n’ont aucune interaction avec le système.

Solution :

Supprimer les acteurs inutiles.

---

# Challenges – Diagrammes Use Case

## Challenge 1 – Système de gestion de bibliothèque

Créer un diagramme Use Case avec les acteurs suivants :

Acteurs :

* Bibliothécaire
* Membre

Fonctionnalités :

* emprunter livre
* retourner livre
* rechercher livre
* gérer catalogue

---

## Challenge 2 – Plateforme e-commerce

Acteurs :

* Client
* Administrateur

Fonctionnalités :

* créer compte
* se connecter
* consulter produit
* passer commande
* gérer produits
* gérer commandes

Ajouter au moins :

* une relation **include**
* une relation **extend**

---

## Challenge 3 – Application de gestion des dépenses

Acteurs :

* utilisateur

Fonctionnalités :

* créer dépense
* modifier dépense
* supprimer dépense
* consulter statistiques

---

## Challenge 4 – Plateforme de formation

Acteurs :

* apprenant
* formateur
* administrateur

Fonctionnalités :

* consulter cours
* soumettre exercice
* corriger exercice
* gérer utilisateurs
* publier cours

---

# Challenge avancé

Créer le diagramme Use Case du **Fil Rouge YouCode**.

Acteurs possibles :

* candidat
* administrateur
* système de quiz

Fonctionnalités possibles :

* s’inscrire à un check-in
* passer quiz
* consulter résultat
* gérer check-in
* gérer candidats

---

# Compétences travaillées

* identification des acteurs
* modélisation des fonctionnalités
* relations include / extend
* analyse du domaine métier
