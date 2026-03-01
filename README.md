# Rendu 4 – SkillQuiz
## Conception détaillée, prototype et gestion de la qualité

### Projet
**SkillQuiz** – Application web de quiz éducatif  
**Formation :** YNOV  
**Rendu :** Rendu 4  
**Étudiants :** Ethan BERMOND

---

## 1. Objectifs du Rendu 4

Ce rendu a pour objectif de :
- Traduire la conception UML en une implémentation concrète.
- Fournir un prototype fonctionnel (frontend + backend).
- Documenter l’architecture, les choix techniques et la gestion de la qualité.

---

## 2. Architecture globale

L’application SkillQuiz repose sur une **architecture en couches** :

### Backend
- API REST développée en **TypeScript + Express**
- Séparation claire des responsabilités :
    - Controllers
    - Services
    - DAO
    - Models
    - Middleware

### Frontend
- Application **React + TypeScript**
- Architecture orientée composants
- Communication avec le backend via API HTTP

---

## 3. Structure du projet

### 3.1 Backend

```
backend/
 ├── src/
 │   ├── app.ts
 │   ├── controllers/
 │   │   ├── authController.ts
 │   │   ├── scoreController.ts
 │   │   └── quizController.ts
 │   ├── services/
 │   │   ├── authService.ts
 │   │   ├── scoreService.ts
 │   │   └── quizService.ts
 │   ├── dao/
 │   │   ├── userDao.ts
 │   │   └── scoreDao.ts
 │   ├── models/
 │   │   ├── User.ts
 │   │   ├── Score.ts
 │   │   ├── Quiz.ts
 │   │   └── Question.ts
 │   └── middleware/
 │       └── authMiddleware.ts
 └── tsconfig.json
```

### Routes API implémentées
- `POST /auth/login`
- `GET /api/quizzes`
- `GET /api/quizzes/:id`
- `GET /scores`
- `POST /scores`

Les données sont actuellement **mockées** (prototype).

---

### 3.2 Frontend

```
frontend/
 ├── src/
 │   ├── api/
 │   │   ├── authApi.ts
 │   │   ├── quizApi.ts
 │   │   └── scoreApi.ts
 │   ├── pages/
 │   │   ├── LoginPage.tsx
 │   │   ├── QuizSelectionPage.tsx
 │   │   ├── QuizPage.tsx
 │   │   └── HistoryPage.tsx
 │   ├── components/
 │   │   ├── Quiz/
 │   │   │   ├── Quiz.tsx
 │   │   │   ├── Question.tsx
 │   │   │   └── Result.tsx
 │   │   └── Score/
 │   │       └── ScoreHistory.tsx
 │   ├── services/
 │   │   ├── authService.ts
 │   │   └── quizService.ts
 │   ├── types/
 │   │   ├── User.ts
 │   │   ├── Quiz.ts
 │   │   ├── Question.ts
 │   │   └── Score.ts
 │   ├── App.tsx
 │   └── main.tsx
```

---

## 4. Fonctionnalités implémentées

### Authentification
- Page de connexion (LoginPage)
- Simulation d’authentification
- Identifiants de test pour la démonstration :
``` 
Email : test@gmail.com
Mot de passe : password
```
### Quiz
- Page de sélection des quiz (QuizSelectionPage)
- Récupération dynamique depuis le backend
- Affichage du titre et des questions
- Gestion des réponses

### Scores
- Calcul du score
- Historique des scores (mock)
- Page dédiée à l’historique

---

## 5. Diagrammes UML (cohérents avec le code)

- Diagramme d’architecture en couches
- Diagramme de classes (User, Quiz, Question, Score)
- Diagramme MVC
- Pattern DAO
- Pattern Strategy (logique de quiz)

Les diagrammes correspondent directement aux dossiers :
- `models`
- `services`
- `controllers`
- `dao`

---

## 6. Gestion des risques
Pour garantir la viabilité du projet SkillQuiz, nous avons identifié les risques techniques et opérationnels majeurs, ainsi que les mesures préventives associées.

| Risque                  | Criticité | Nature       | Stratégie d'atténuation                                                                                                   |
|-------------------------|-----------|-------------|---------------------------------------------------------------------------------------------------------------------------|
| Désynchronisation API    | Élevée    | Technique   | Utilisation de TypeScript avec des interfaces communes partagées entre le Frontend et le Backend pour garantir la structure des données. |
| Régression logicielle    | Moyenne   | Qualité     | Mise en place de tests unitaires sur les services critiques (calcul des scores, validation des réponses).                 |
| Dette technique          | Moyenne   | Maintenance | Respect strict de l'architecture en couches et du Pattern DAO pour isoler la logique de persistance.                      |
| Fuite de données (Auth)  | Élevée    | Sécurité    | Utilisation de Middlewares de sécurité et, à terme, implémentation de JWT (JSON Web Tokens) avec hachage des mots de passe. |
| Indisponibilité BDD      | Faible    | Infrastructure | Utilisation du Pattern Strategy pour permettre un basculement facile entre des données "Mockées" et une base de données réelle (PostgreSQL/MongoDB). |
---

## 7. Critères de qualité
La qualité de SkillQuiz repose sur cinq piliers fondamentaux définis dès la phase de conception détaillée.

### 7.1. Maintenabilité et Évolutivité
Séparation des préoccupations (SoC) : L'architecture en couches (Controller / Service / DAO) permet de modifier la logique métier sans impacter l'interface utilisateur ou la base de données.
Modularité : Le Frontend React est découpé en composants atomiques réutilisables (ex: Question.tsx, Result.tsx).

### 7.2. Fiabilité Technique
Typage Strict : Le projet est configuré en mode strict: true dans le tsconfig.json. Cela élimine une grande partie des erreurs de type à la compilation plutôt qu'à l'exécution.
Gestion des erreurs : Centralisation du traitement des erreurs via un middleware Express dédié pour renvoyer des codes HTTP normalisés (400, 401, 404, 500).

### 7.3. Performance et Optimisation
Lazy Loading : Chargement différé des routes et composants lourds pour minimiser le poids du bundle initial du Frontend.
Mise en cache (Backend) : Structure prête pour l'intégration d'un cache sur les listes de quiz qui changent peu fréquemment.

### 7.4. Sécurité du Prototype
Validation des entrées : Utilisation de schémas de validation (type Zod ou Joi) pour s'assurer que les données envoyées au backend sont conformes avant tout traitement.
Protection des routes : Un middleware d'authentification simule la vérification des droits d'accès avant de livrer les questions d'un quiz.



## 8. Lancement du projet

### Backend
```
cd backend
npm install
npm run dev
```

### Frontend
```
cd frontend
npm install
npm run dev
```

---

## 9. Conclusion

Ce Rendu 4 fournit :
- Une **conception détaillée cohérente**
- Un **prototype fonctionnel**
- Une **documentation alignée avec le code**
- Une base solide pour le rendu final


