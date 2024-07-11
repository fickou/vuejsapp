<template>
  <div class="liste">
    <h2>Liste des Utilisateurs</h2>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.nom }}</td>
          <td>{{ user.prenom }}</td>
          <td>{{ user.email }}</td>
          <td><button @click="deleteUser(user.id)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListeUsers',
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        this.fetchUsers(); // Rafraîchit la liste des utilisateurs après suppression
      } catch (error) {
        console.error('Erreur deleting user:', error);
      }
    }
  }
};
</script>

<style>
.liste {
  margin: auto;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

td {
  background-color: #fff;
}

.liste button {
  padding: 5px 10px;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.liste button:hover {
  background-color: #c0392b;
}
</style>
