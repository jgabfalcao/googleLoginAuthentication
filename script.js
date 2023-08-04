function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  if (data.email_verified !== true) {
    console.log("O email não esta verificado");
  } else {
    const objectLocalStorage = JSON.stringify(data);
    localStorage.setItem("dadosUsuario", objectLocalStorage);
  }
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "147674603370-c10hkkav6duhgobc63p1jicjivtlhq0a.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "filled_black",
      size: "large",
      shape: "pill",
      locale: "pt-BR",
    } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

// function saveOnLocalStorage(){
//   localStorage.data = document
// }
