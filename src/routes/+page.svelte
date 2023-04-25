<script>
  let inputText="";import{writable}from"svelte/store";export const myGlobalStore=writable(inputText);import{decryptString,encryptString}from"./secret";import Swal from"sweetalert2";function showPopup(){Swal.fire({title:"Login Successful",text:"Await redirect",icon:"success",confirmButtonText:"OK"})}function showErrorPopup(){Swal.fire({title:"Incorrect Passcode",text:"Try again",icon:"error",confirmButtonText:"OK"})}async function Redirect(){"2f5868af67bba8005184f12158ffdd8e23dd24e73e58d758a3f5f5c9a1d4a729"===await hash()?(showPopup(),setTimeout(function(){const t=decryptString("U2FsdGVkX1/ryRDrW1U8L3sRWq5GcR8OPaOIHSw2xTgNnmbbRUxqs5k8TdS6LSOFdnqu/rfXuRkH2M+rmzBQHDDgHt+JW30LOls9EgpZSwcNZ5l3cByisltoseKhPncnM1D2351IA46LkB0tQZ/log==",inputText);window.location.href=t},2500)):showErrorPopup()}function hash(){const t=(new TextEncoder).encode(inputText);return crypto.subtle.digest("SHA-256",t).then(t=>{return Array.from(new Uint8Array(t)).map(t=>t.toString(16).padStart(2,"0")).join("")})}
</script>

  <body>
    
    <div class="login" id ='login'>
      <form>
        <img src="./logo.svg" alt="OpenAI" style="height:12%; margin-bottom:1rem;">

        <input type="password" placeholder="xxxxxxxxx" id="input-box" bind:value={inputText} autocomplete="off">        
        <button on:click={Redirect}>Submit</button>
    </form>
    </div>
    
  </body>
  

  <style>
    /* Reset default styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Set font family and size */

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: antiquewhite;
  background-color: #000;
  background-image: linear-gradient(45deg, #31AA3C, #6F1A79);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  margin: 0;
  padding: 0;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Center the form */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Style the input */
input {
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
  max-width: 20rem;
  margin-bottom: 1rem;
}

/* Style the button */
button {
  background-color: #007bff;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
  max-width: 20rem;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: rgba(1, 102, 211, 0.945);
}

#input-box::placeholder {
        text-align: center;
}

#input-box{
        text-align: center;
}
  </style>