
// Login btn functionality
document.getElementById('login-btn').addEventListener("click", function(event){
  event.preventDefault()
  const mobileNumber = 12345678901;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById('mobile-number').value
  const mobileNumberValueConverted = parseInt(mobileNumberValue)
  // console.log(mobileNumberValueConverted)

  const pinNumberValue = document.getElementById('pin-number').value
  const pinNumberValueConverted = parseInt(pinNumberValue)
  // console.log(pinNumberValueConverted)
  if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
    window.location.href = "home.html"
  }
  else
    alert("Invalid Credentials")
})