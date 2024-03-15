<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Accueil</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Connexion</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Inscription</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="container mt-4">
      <h1>Bienvenue sur notre Application de Restaurant</h1>
      <p>Cette application est conçue pour vous offrir une expérience de commande en ligne facile et pratique pour les restaurants. Vous pouvez parcourir les menus, passer des commandes et effectuer des paiements en toute sécurité, le tout depuis le confort de votre domicile.</p>
      <p>Découvrez une sélection de délicieux plats, des offres spéciales et des promotions exclusives disponibles uniquement sur notre plateforme.</p>
      <p>Inscrivez-vous dès aujourd'hui pour commencer à explorer notre gamme de restaurants et à profiter d'une expérience culinaire exceptionnelle!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Custom styles */
.container {
  max-width: 800px;
}

.navbar-brand {
  font-weight: bold;
}
</style>
