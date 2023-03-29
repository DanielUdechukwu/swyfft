const toggle = () => {
  const navigation = document.getElementById("nav-list")
  navigation.classList.toggle("block")
  navigation.classList.add("transition, ease-in-out, delay-800")
  console.log("Added block")
}