<script>
    import {decryptString} from './secret';
    let inputText = '';
    import Swal from 'sweetalert2';
  
    function showPopup() {
        Swal.fire({
        title: 'Login Successful',
        text: 'Await redirect',
        icon: 'success',
        confirmButtonText: 'OK',
        });
    }

    function showErrorPopup() {
        Swal.fire({
        title: 'Incorrect Passcode',
        text: 'Try again',
        icon: 'error',
        confirmButtonText: 'OK',
        });
    }

    async function Redirect() {

        

      const hashValue = await hash();
      if (hashValue === "2f5868af67bba8005184f12158ffdd8e23dd24e73e58d758a3f5f5c9a1d4a729") {
       
        showPopup();

        setTimeout(function() {

            const key = inputText;
            const decryptedText = decryptString('U2FsdGVkX1/PSQZaveNgBD9uORpQepTYlxpVLmCoclqSPEMkOpZvFHB+KU9OGpvkZSexGld/bF5/uZrFXkW5MC0YnpTKsgCJCttPc06Co7YyZEINSmd+hixulEXBmK1Wm1xeNi2xkSJgoch+HlLeyg==', key);

            window.location.href = decryptedText;
            
        }, 2500);


      } else {
        showErrorPopup();      }
    }
  
    function hash() {
      const utf8 = new TextEncoder().encode(inputText);
      return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((bytes) => bytes.toString(16).padStart(2, '0'))
          .join('');
        return hashHex;
      });
    }
    
  </script>

  <body>
    
    
    <form>
        <img src="./logo.svg" alt="OpenAI" style="height:12%; margin-bottom:1rem;">

        <input type="password" placeholder="xxxxxxxxx" id="input-box" bind:value={inputText} autocomplete="off">        
        <button on:click={Redirect}>Submit</button>
    </form>

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