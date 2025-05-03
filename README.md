# Gestion d’Évènements – Vue 3 + JSON Server

Mini‑application web **Vue 3 (Vite)** permettant :

- **Authentification factice** (JSON Server)  
- **CRUD** d’évènements (titre / date / description)  
- Affichage : **Calendrier** (FullCalendar) + **tableau** Bootstrap  

Temps d’installation ≈ 10 min.

---

## Prérequis

| Outil   | Version conseillée |
|---------|--------------------|
| Node.js | ≥ 14               |
| npm     | ≥ 6                |

> Tout se lance en local ; aucun SGBD n’est requis (JSON Server stocke les données dans un fichier).

---

## Installation rapide

```bash
# 1. Clone du dépôt
git clone <url-du-repo> mon-calendrier-vue
cd mon-calendrier-vue

# 2. Dépendances front
npm install

# 3. Dépendances dev backend mock
npm install --save-dev json-server

Lancement
Ouvrez deux terminaux :

npx json-server --watch db.json --port 3000

npm run dev        # démarre Vite sur http://localhost:5173/


Identifiants de test
Email	demo@mail.com     
Motdepasse  123456

Connectez‑vous, puis utilisez le menu pour :

Créer un évènement

Consulter le Calendrier mensuel

Voir la Liste complète (éditer / supprimer)


Principales dépendances
Vue 3 + Vite (bundler)

Vue‑Router 4 (SPA multi‑pages)

FullCalendar @vue3 (calendrier)

Bootstrap 5 (UI)

JSON Server (backend mock REST)