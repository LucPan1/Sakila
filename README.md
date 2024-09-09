# Sakila -  Gestion de la location de films

Sakila est une application back-end conçue pour optimiser la gestion des retours de films en rappelant aux clients la date limite de leur location. Elle offre des fonctionnalités complètes pour la gestion des clients, permettant de créer, consulter, modifier et supprimer les profils de clients.

## Fonctionnalités Principales

<ul>
  <li>Gestion des Clients: Sakila permet aux utilisateurs d'ajouter, afficher, modifier et supprimer les clients enregistrés dans le système.</li>
  <li>Planification de tâches: Une tâche planifiée envoie automatiquement un email aux clients 5 jours avant et 3 jours avant la date limite de retour de leur location, à          12h00.</li>
  <li>Effectuer une location de films: Les clients peuvent effectuer des locations de films.</li>
  <li>Lister les tâches: Affichage de toutes les tâches programmées.</li>
</ul>  

## Technologies Utilisées

<ul>
  <li>Nest js 10.4.2</li>
  <li>ORM Prisma 5.19.1</li>
  <li>PostgreSQL 16</li>
  <li>Planification de tâches avec @Cron()</li>
</ul>  

## Installation 

Pour installer et exécuter Sakila en local, suivez les étapes suivantes:

<ol>
  <li>Clonez le dépôt du projet sur votre machine locale.</li>
  <li>Assurez-vous que Node.js et npm sont installés sur votre système.</li>
  <li>Installer PostgreSQL sur votre ordinateur.</li>
  <li>Exécutez `"npm install"` pour installer les dépendances du projet.</li>
  <li>Configurez le fichier .env avec les paramètres de votre base de données et autres configurations nécessaires.</li>
  <li>Lancez le serveur Nest en utilisant la commande npm run start:dev et accédez-y dans votre navigateur web.</li>
</ol> 

## Licence

Nest est [MIT licensed](LICENSE).
