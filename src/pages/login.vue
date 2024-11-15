 <template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group"> 
          <label for="username">Correo:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button type="submit" @click="login">Iniciar Sesión</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </template>

  
  <script>
 import { ref, provide } from 'vue';
import axios from 'axios';
import { usarUsuario } from '../store/usuario';
import { useRouter } from 'vue-router'




export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const usuario = usarUsuario();
    const isview = ref(false); // Hacer isview reactivo
    const route = useRouter();
    async function login() {
      const payload = {
        Email: username.value,
        Password: password.value
      };

      try {
        const response = await axios.post('http://localhost/api/auth/login', payload);
        console.log('Respuesta completa:', response.data);
        await usuario.setConexion(response.data);
        isview.value = true; // Actualizar el valor reactivo
        route.push('/');
      } catch (error) {
        console.error(error);
        errorMessage.value = error.response ? error.response.data : 'Error en el login';
        console.error('Error en el login:', errorMessage.value);
      }
    }

    // Proveer `isview` como una referencia reactiva desde `setup()`
    provide('isConected', isview);

    return {
      username,
      password,
      errorMessage,
      login
    };
  }
};


  </script>
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 5%;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color:#1f2937;
    color: white;
    border: none; 
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>