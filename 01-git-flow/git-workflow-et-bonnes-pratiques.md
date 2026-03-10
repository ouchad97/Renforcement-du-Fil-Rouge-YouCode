````markdown
# 🟢 Git & GitFlow — Révision

---

## 1️⃣ Concepts Git de base

- **Git** : système de gestion de versions distribuées.  
- **Repository (repo)** : dossier contenant le projet suivi par Git.  
- **Commit** : capture de l’état du projet à un instant donné.  
- **Branch** : ligne de développement indépendante.  
- **Merge** : fusion de branches.  
- **Pull** : récupérer les changements depuis le dépôt distant.  
- **Push** : envoyer les changements vers le dépôt distant.  
- **Clone** : copier un dépôt distant localement.  
- **Staging / Index** : zone temporaire avant le commit.  

### Commandes Git essentielles

| Commande | Description |
|----------|-------------|
| `git init` | Initialise un dépôt Git local. |
| `git clone <repo>` | Clone un dépôt distant. |
| `git status` | Affiche l’état des fichiers (modifiés, staged…). |
| `git add <file>` | Ajoute un fichier au staging. |
| `git commit -m "message"` | Crée un commit avec un message. |
| `git log` | Affiche l’historique des commits. |
| `git diff` | Montre les différences non commitées. |
| `git branch` | Liste les branches locales. |
| `git checkout <branch>` | Change de branche. |
| `git merge <branch>` | Fusionne une branche dans la branche courante. |
| `git pull` | Récupère et fusionne les changements depuis le distant. |
| `git push` | Envoie les commits vers le dépôt distant. |
| `git reset` | Annule des modifications ou déplace HEAD. |
| `git revert` | Annule un commit en créant un nouveau commit. |

---

## 2️⃣ GitFlow

### 2.1 Concept

- GitFlow est un **workflow de branchement structuré**.  
- Permet de gérer le développement, la mise en production et les corrections de bugs.  

### 2.2 Branches principales

| Branche | Usage |
|---------|-------|
| `main` ou `master` | Contient le code stable et prêt pour la production. |
| `develop` | Branche de développement intégrant toutes les fonctionnalités. |
| `feature/<nom>` | Nouvelle fonctionnalité en cours de développement. |
| `release/<version>` | Préparation d’une nouvelle version (tests, corrections). |
| `hotfix/<nom>` | Correction urgente sur `main`. |

### 2.3 Workflow GitFlow

1. **Création d’une fonctionnalité**  
```bash
git checkout develop
git checkout -b feature/nom-fonctionnalité
````

2. **Développement et commit**

```bash
git add .
git commit -m "Ajout fonctionnalité X"
```

3. **Fin de la feature et fusion**

```bash
git checkout develop
git merge feature/nom-fonctionnalité
git branch -d feature/nom-fonctionnalité
```

4. **Préparation d’une release**

```bash
git checkout develop
git checkout -b release/v1.0.0
# tests et corrections
git checkout main
git merge release/v1.0.0
git tag v1.0.0
git checkout develop
git merge release/v1.0.0
git branch -d release/v1.0.0
```

5. **Hotfix sur production**

```bash
git checkout main
git checkout -b hotfix/correction-bug
# correction
git commit -am "Correction bug critique"
git checkout main
git merge hotfix/correction-bug
git tag v1.0.1
git checkout develop
git merge hotfix/correction-bug
git branch -d hotfix/correction-bug
```

### 2.4 Bonnes pratiques

* Toujours **mettre à jour `develop` et `main`** avant de créer une branche.
* Commits clairs et descriptifs.
* Utiliser des **branches courtes** pour les features et corrections.
* Tester avant fusion.
* Taguer chaque release stable.

### 2.5 Challenge Git / GitFlow

1. Initialiser un dépôt Git pour un projet Laravel.
2. Créer la branche `develop` à partir de `main`.
3. Développer une nouvelle fonctionnalité dans `feature/login`.
4. Fusionner la feature dans `develop`.
5. Créer une `release/v1.0.0`, tester et fusionner dans `main`.
6. Effectuer un `hotfix` pour corriger un bug critique sur `main`.
7. Taguer toutes les releases.

---

```
 