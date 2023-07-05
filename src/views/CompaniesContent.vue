<template>
  <div>
    <form action="" @submit.prevent>
      <label
        >Company:
        <input type="text" v-model="company" />
      </label>
      <label
        >City:
        <input type="text" v-model="city" />
      </label>
      <div>
        <button v-show="showCreateBtn" @click="create()">Create</button>
        <button v-show="showSaveBtn" @click="update(company)">Save</button>
        <button @click="cancel()" id="del">Cancel</button>
      </div>
    </form>
    <ul>
      <li v-for="company in companies" :key="company.id">
        <h2>{{ company.data.company }}</h2>
        <p>{{ company.data.city }}</p>
        <button @click="edit(company)">Edit</button>
        <button @click="del(company)" id="del">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../configs/api";
export default {
  data() {
    return {
      companies: [],
      company: "",
      city: "",
      id: "",
      showSaveBtn: false,
      showCreateBtn: true,
    };
  },
  created() {
    this.getCompanies();
  },
  methods: {
    getCompanies() {
      api
        .get("/companies")
        .then((res) => {
          this.companies = res.data;
        })
        .catch((error) => console.log(error));
    },
    edit(company) {
      this.showCreateBtn = false;
      this.company = company.data.company;
      this.city = company.data.city;
      this.id = company.id;
      this.showSaveBtn = true;
    },
    cancel() {
      this.showCreateBtn = true;
      this.company = "";
      this.city = "";
      this.showSaveBtn = false;
    },
    async update() {
      await api.put(`/companies/${this.id}`, {
        company: this.company,
        city: this.city,
      });
      this.company = "";
      this.city = "";
      this.showSaveBtn = false;
      this.showCreateBtn = true;
      this.getCompanies();
    },
    async create() {
      await api.post("/companies", { company: this.company, city: this.city });
      this.company = "";
      this.city = "";
      this.showSaveBtn = false;
      this.getCompanies();
    },
    async del(company) {
      await api.delete(`/people/${company.id}`);
      this.getCompanies();
    },
  },
};
</script>

<style scoped>
/* Estilos gerais */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div {
  margin-bottom: 32px;
  width: 250px;
}

form label {
  width: 250px;
}
/* Estilos para os campos de entrada de texto */
input[type="text"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
/* Estilos para a lista não ordenada */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Estilos para cada item da lista */
li {
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para o título */
li h2 {
  font-size: 24px;
  margin: 0 0 10px;
}

/* Estilos para o texto */
li p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
}

button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 16px;
}

button:hover {
  background-color: #0056b3;
}

button + button {
  margin-left: 10px;
}

#del {
  background-color: #ae0000;
}
</style>
