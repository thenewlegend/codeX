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
            window.location.href = 'https://za-uyy9l8-t2t5-ui8-n-udmw.vercel.app/'; }, 3000);

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