# Rendu 4 – SkillQuiz
## Conception détaillée, prototype et gestion de la qualité

### Projet
**SkillQuiz** – Application web de quiz éducatif  
**Formation :** YNOV  
**Rendu :** Rendu 4  
**Étudiants :** À compléter

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

| Risque | Impact | Solution |
|------|-------|---------|
| Erreurs TypeScript | Moyen | Typage strict |
| Couplage Front/Back | Moyen | API REST |
| Évolutivité | Faible | Architecture en couches |
| Sécurité | Moyen | Middleware JWT (prévu) |

---

## 7. Critères de qualité

- Séparation des responsabilités
- Lisibilité du code
- Typage TypeScript strict
- Respect de l’UML
- Architecture maintenable

---

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


