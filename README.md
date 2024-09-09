# Sakila -  Gestion de la location de films

Sakila est une application back-end conçue pour optimiser la gestion des retours de films en rappelant aux clients la date limite de leur location. Elle offre des fonctionnalités complètes pour la gestion des clients, permettant de créer, consulter, modifier et supprimer les profils de clients.

## Fonctionnalités Principales

<ul>
  <li><strong>Gestion des Clients:</strong> Sakila permet aux utilisateurs d'ajouter, afficher, modifier et supprimer les clients enregistrés dans le système.</li>
  <li><strong>Planification de tâches:</strong> Une tâche planifiée envoie automatiquement un email aux clients 5 jours avant et 3 jours avant la date limite de retour de leur location, à 12h00.</li>
  <li><strong>Effectuer une location de films:</strong> Les clients peuvent effectuer des locations de films.</li>
  <li><strong>Lister les tâches:</strong> Affichage de toutes les tâches programmées.</li>
</ul>  

## Technologies Utilisées

- **Nest js 10.4.2**
- **ORM Prisma 5.19.1**
- **PostgreSQL 16**
- **Planification de tâches avec @Cron()**

## Structure du projet

- `/prisma`: Contient la gestion des modèles de données, des migrations et des opérations liées à la base de données utilisant Prisma
- `/src`: Contient la logique de chaque components avec customer, emails, rental, schedule


## Installation de PostgreSQL 

- **Installer PostgreSQL sur votre ordinateur:** Une fois l'installation terminée, saisissez un mot de passe qui sera utilisé pour vous connecter à PostgreSQL.
- Ouvrez ensuite un terminal et accédez au dossier PostgreSQL en utilisant la commande `cd C:\Programmes\PostgreSQL\votre_version_postgre\bin` (Modifiez votre chemin en conséquence pour qu'il corresponde à l'emplacement exact où PostgreSQL est installé sur votre système).
- Pour vous connecter à PostgreSQL, tapez `psql -U postgres` en tant qu'utilisateur postgres (l'administrateur par défaut) et entrez le mot de passe que vous avez créé précédemment.

## Installation 

Pour installer et exécuter Sakila en local, suivez les étapes suivantes:


1. Clonez le dépôt du projet sur votre machine locale.
2. Assurez-vous que Node.js et npm sont installés sur votre système.
3. Exécutez `npm install` pour installer les dépendances du projet.
4. Configurez le fichier `.env` avec les paramètres de votre base de données et autres configurations nécessaires.
5. Lancez le serveur Nest en utilisant la commande `npm run start:dev` et tester les routes sur Postman.


## Licence

Ce projet est sous [MIT licensed](LICENSE).
