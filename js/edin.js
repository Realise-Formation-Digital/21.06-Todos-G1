function getVal() {
  const val = document.querySelector('input').value;
 console.log(val);


// inscrire les informations
const element = document.querySelector('input');

const article = { title: element.value };

axios.post('http://localhost:3000/posts', article)
}
