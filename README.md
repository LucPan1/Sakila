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

<ul>
  <li>1.Clonez le dépôt du projet sur votre machine locale.</li>
  <li>2.Assurez-vous que Node.js et npm sont installés sur votre système.</li>
  <li>3.Exécutez npm install pour installer les dépendances du projet.</li>
  <li>4.Installer PostgreSQL sur votre ordinateur.</li>
  <li>5.Configurez le fichier .env avec les paramètres de votre base de données et autres configurations nécessaires.</li>
  <li>6.Lancez le serveur Nest en utilisant la commande npm run start:dev et accédez-y dans votre navigateur web.</li>
</ul> 


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Licence

Nest est [MIT licensed](LICENSE).
