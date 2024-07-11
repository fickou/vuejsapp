<template>
  <div class="contact">
    <h2>Contactez-nous</h2>
    <div class="contact-info">
      <p><strong>Adresse :</strong> {{ address }}</p>
      <p><strong>Téléphone :</strong> {{ phone }}</p>
      <p><strong>Email :</strong> {{ email }}</p>
      <p><strong>Horaires :</strong></p>
      <ul>
        <li><strong>Lundi - Vendredi :</strong> 06:00 à 16:00</li>
        <li><strong>Samedi :</strong> 07:00 à 14:00</li>
        <li><strong>Dimanche :</strong> 07:00 à 12:00</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "ContactView",
    data() {
        return {
            address: "177 DSM, Dakar, Sénégal",
            email: "hello@cafewithavue.bakery",
            phone: "+221 77 777 77 77",
        }
    }
}
</script>

<style>
.contact {
    margin-top: 100px;
    padding: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}
.contact h2 {
    text-align: center;
    margin-bottom: 20px;
}
.contact-info p, .contact-info ul {
    margin-bottom: 15px;
}
.contact-info ul {
    padding-left: 0;
}
.contact-info li {
    list-style: none;
    margin-bottom: 5px;
}
.contact-info li strong {
    font-weight: bold;
    color: #555;
}
</style>
