# Vitrine

Le développement de ce projet est à but non lucratif pour moi.
C'est un site vitrine que je créer pour un site photo

Ce site comprendra :

- Une page d'accueil.
- Une liste des catégories.
- Une liste d'images liées à chaque catégorie.
- Un tableau de bord permettant d'uploader des images et de gérer les catégories.

## Pour commencer

Pour lancer un serveur de développement, j'utiliserai d'abord la commande suivante :

```bash
npm run dev
```

Bien que Bun et Pnpm soient intéressants, ils ne prennent pas en compte toutes les bibliothèques. De plus, cela ne me permettra pas de m'habituer aux bonnes pratiques.

Cette commande ouvre un serveur local par défault sur le port 3000
[http://localhost:3000](http://localhost:3000).

Le projet utilise [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) pour automatiquement optimiser et charger Inter, une police custom de google.

Copier le .env.example en .env puis faire la commande :

- `openssl rand -base64 32`

Qui va générer une clé secrète à ajouter au *AUTH_SECRET*

## Tests

Il est essentiel de passer par le Linter pour vérifier la syntaxe, entre autres :

- `npm run lint`

## Push

À chaque push, le projet effectue une construction (build) et pousse les modifications si tout est conforme.
