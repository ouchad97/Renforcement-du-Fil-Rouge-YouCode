# POO PHP — Banque de questions et mises en situation

## 1️⃣ Questions / Réponses — POO

1. Qu’est-ce que l’encapsulation ?  
2. Quelle est la différence entre visibilité et encapsulation ?  
3. Qu’est-ce que le polymorphisme ? Donner un exemple.  
4. Qu’est-ce que l’abstraction ?  
5. Différence entre une classe abstraite et une interface.  
6. Peut-on instancier une classe abstraite ? Pourquoi ?  
7. À quoi servent les getters et setters ?  
8. Différence entre `parent` et `self`.  
9. Différence entre `static` et `const`.  
10. Différence entre overloading et overriding.  
11. Rôle du constructeur et du destructeur.  
12. Peut-on déclarer une méthode abstraite `private` ?  
13. À quoi sert le mot-clé `final` ?  
14. Accès aux propriétés statiques : comment et pourquoi ?  
15. Différence entre un attribut statique et un attribut d’instance.  
16. Comment fonctionne l’héritage en POO ?  
17. Comment appliquer le polymorphisme avec une interface ?  
18. Interface vs classe abstraite : quand utiliser chacune ?  
19. Qu’est-ce que le mot-clé `this` et où peut-on l’utiliser ?  
20. Différence entre `isset()` et `empty()` (POO / PHP).

---

## 2️⃣ Mises en situation pratiques — POO

### 2.1 Classe abstraite et polymorphisme
- Créer une classe `Payment` et deux classes `PayPalPayment` et `CardPayment`.  
- Appliquer **abstraction** et **polymorphisme**.  

### 2.2 Méthode abstraite dans classe parente
- Classe parente `Teacher` avec méthode abstraite.  
- Implémenter dans les classes filles.  

### 2.3 Interface et héritage
- Créer une interface `Authentification`.  
- Créer une ou plusieurs classes qui l’implémentent.  

### 2.4 Classe abstraite avec héritage
- Créer une classe abstraite et une classe fille qui hérite et implémente ses méthodes abstraites.  

### 2.5 Classe abstraite avec plusieurs méthodes
- Déclarer une classe abstraite avec 2 méthodes abstraites.  
- Créer une classe concrète et instancier un objet.  

### 2.6 Classe simple avec attributs et méthodes
- Créer une classe avec 3 attributs (différentes visibilités) et 3 méthodes.  
- Instancier et appeler les méthodes.  

### 2.7 Héritage + encapsulation avec instanciations fournies
- Définir les classes parent et enfant nécessaires pour que deux objets puissent exister correctement.  
- Respecter l’héritage et l’encapsulation.  

### 2.8 Association entre utilisateur et cours
- Créer `User` et `Course`.  
- Associer plusieurs cours à un utilisateur et afficher la liste.  

### 2.9 Accès à une propriété statique depuis une classe fille
- Classe `BaseConfig` avec `$appName` statique.  
- Classe `App` qui hérite et affiche `$appName`.  

### 2.10 Classe avec méthode et propriété statiques
- Classe `Counter` : propriété `$count`, méthode `increment()`, méthode normale `display()`.  
- Utiliser `static` et `self` correctement.  

### 2.11 Correction de code POO fourni
- Corriger : classe abstraite mal définie, méthode abstraite `private`, accès incorrect à un attribut, instanciation et appel de méthode incorrects.

### 2.12 Correction d’un second code POO fourni
- Corriger toutes les violations : héritage incorrect, méthodes abstraites mal utilisées, mauvaise encapsulation, instanciations et appels incorrects.

---

## 3️⃣ Scénarios d’application

### 3.1 Gestion de paiement simple
- Interface `Payable` : `calculerMontant()`.  
- Classe abstraite `Utilisateur` : `$nom`, `$email`.  
- Classes `Client` et `Prestataire` implémentent `Payable`.  
- Tester avec un fichier `test.php`.

**Questions de cadrage :**
- Expliquer l’**agrégation** entre une classe `Service` qui contient `Client` et `Prestataire`.  
- Comment le **polymorphisme** permet d’appeler `calculerMontant()` sur un tableau mixte sans vérifier le type.  

### 3.2 Gestion d’un inventaire de bibliothèque
- Classe abstraite `Document` : `$titre`, `$auteur`, méthode `afficherInfos()`.  
- Classes concrètes `Livre` et `Magazine` héritent de `Document`.  
- Tester plusieurs instances et afficher les informations.

**Questions :**
- Différence entre **composition** et **agrégation** dans une `Bibliotheque`.  
- Utilisation des méthodes abstraites pour la cohérence des classes enfants.

### 3.3 Gestion d’un parc de véhicules
- Interface `Conduisible` : méthode `demarrer()`.  
- Classe abstraite `Vehicule` : `$marque`, `$modele`, méthode `afficherInfos()`.  
- Classes concrètes `Voiture` et `Moto` implémentent `Conduisible`.  
- Tester polymorphisme dans un tableau de `Conduisible`.

**Questions :**
- Différence entre `protected` et `private`.  
- Polymorphisme pour traiter Voiture et Moto de manière uniforme.

### 3.4 Suivi des inscriptions à un cours
- Classe `Etudiant` : `$nom`, `$coursInscrits`, propriété statique `$totalInscrits`.  
- Méthode `inscrireCours($cours)`.  
- Tester plusieurs étudiants et afficher total d’inscriptions.

**Questions :**
- Différence entre propriété statique et d’instance.  
- Quand utiliser `self::` vs `parent::`.  
- Comment compter tous les objets créés sans parcourir un tableau.

### 3.5 Gestion d’un panier d’achats avec corrections
- Corriger accès à méthode `private total()`.  
- Ajouter méthode publique `afficherTotal()`.  
- Créer `PanierVIP` qui hérite et applique une réduction de 10%.  

**Questions :**
- Différence `private`, `protected`, `public`.  
- Pourquoi le polymorphisme fonctionne pour `PanierVIP`.  
- Sécurisation des données internes tout en permettant les calculs.

---

## 4️⃣ Challenges avancés

### 4.1 Système de paiement e-commerce
- Interface `PaymentMethod` : `pay($amount)`.  
- Implémenter Carte bancaire, PayPal et Cash.  
- Classe `Order` utilise n’importe quelle méthode de paiement.  

### 4.2 Équipe de basket (POO simple)
- Classe `Player` : `$nom`, `$poste`.  
- Classe `Coach` : définir et exécuter plan de jeu.  
- Classe `Team` : 5 joueurs + coach.  

### 4.3 Interface et classe abstraite combinées
- Classe abstraite `Athlete` : propriétés communes, méthode abstraite `play()`.  
- Interface `Trainable` : méthode `train()`.  
- Implémenter pour différents types de joueurs.

### 4.4 Stratégie de jeu
- Interface `GameStrategy` : `execute()`.  
- Deux stratégies : attaque et défense.  
- Coach choisit stratégie et l’exécute.  

### 4.5 Système de transport
- Interface `Vehicle` : `start()`, `stop()`.  
- Classes concrètes : `Car`, `Bike`, `Bus`.  
- Classe `Driver` utilise n’importe quel véhicule pour un trajet.

### 4.6 Gestion de match
- Classe `MatchGame` : démarrer match, ajouter points, afficher score.  
- Classe `Team` : nom + liste de joueurs.

### 4.7 Gestion d’une bibliothèque
- Classe abstraite `Document` : `$title`, `$author`, méthode `getInfo()`.  
- Classes concrètes : `Book`, `Magazine`, `Ebook`.  

### 4.8 Plateforme d’apprentissage
- Classe abstraite `Course` : `$title`, `$duration`, méthode `startCourse()`.  
- Classes concrètes : `VideoCourse`, `LiveCourse`, `QuizCourse`.

### 4.9 Gestion des notifications
- Interface `Notification` : méthode `send($message)`.  
- Implémenter `Email`, `SMS`, `PushNotification`.  
- Classe `NotificationService` pour envoyer un message via type choisi.

---