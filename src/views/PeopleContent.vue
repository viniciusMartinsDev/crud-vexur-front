<template>
  <div>
    <form action="" @submit.prevent>
      <label
        >Name:
        <input type="text" v-model="name" />
      </label>
      <label
        >Birth:
        <input type="date" v-model="birth" />
      </label>
      <label
        >Company:
        <select v-model="idCompany">
          <option
            v-for="company in companies"
            :key="company.id"
            :value="company.id"
          >
            {{ company.data.company }}
          </option>
        </select>
      </label>
      <div>
        <button v-show="showCreateBtn" @click="create()">Create</button>
        <button v-show="showSaveBtn" @click="update(person)">Save</button>
        <button @click="cancel()" id="del">Cancel</button>
      </div>
    </form>
    <ul>
      <li v-for="person in people" :key="person.person.id">
        <h2>{{ person.person.data.name }}</h2>
        <p>{{ person.person.data.birth }}</p>
        <h3>{{ person.company.data.company }}</h3>
        <p>{{ person.company.data.city }}</p>
        <button @click="edit(person)">Edit</button>
        <button @click="del(person)" id="del">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../configs/api";
export default {
  data() {
    return {
      people: [],
      companies: [],
      name: "",
      birth: "",
      id: "",
      idCompany: "",
      showSaveBtn: false,
      showCreateBtn: true,
    };
  },
  created() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      api
        .get("/people")
        .then((res) => {
          this.people = res.data;
          this.getCompanies();
        })
        .catch((error) => console.log(error));
    },
    getCompanies() {
      api
        .get("/companies")
        .then((res) => {
          this.companies = res.data;
        })
        .catch((error) => console.log(error));
    },
    edit(person) {
      this.showCreateBtn = false;
      this.name = person.person.data.name;
      this.birth = person.person.data.birth;
      this.id = person.person.id;
      this.idCompany = person.company.id;
      this.showSaveBtn = true;
    },
    cancel() {
      this.showCreateBtn = true;
      this.name = "";
      this.birth = "";
      this.idCompany = "";
      this.id = "";
      this.showSaveBtn = false;
    },
    async update() {
      await api.put(`/people/${this.id}`, {
        name: this.name,
        birth: this.birth,
        idCompany: this.idCompany,
      });
      this.name = "";
      this.birth = "";
      this.idCompany = "";
      this.showSaveBtn = false;
      this.showCreateBtn = true;
      this.getPeople();
    },
    async create() {
      await api.post("/people", {
        name: this.name,
        birth: this.birth,
        idCompany: this.idCompany,
      });
      this.name = "";
      this.birth = "";
      this.idCompany = "";
      this.showSaveBtn = false;
      this.getPeople();
    },
    async del(person) {
      await api.delete(`/people/${person.person.id}`);
      this.getPeople();
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

input[type="date"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

select {
  padding: 4px;
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
