const form = document.querySelector("#form_habits") //crinado uma variável pra receber o formulário do html
const nlwSetup = new NLWSetup(form) //criando uma variável pra receber a biblioteca e usáça no formulário, criando um obejto pra receber
const button = document.querySelector("header button") //pesquisar um button dentro do header e adicionar no objeto button que foi criado aqui
button.addEventListener("click", add) //apartir do click vai ser executada a função add
form.addEventListener("change" /*mudança*/, save) //apartir de uma mudança/seleção de um checbox vai acionar a função para salvar
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today) //verificar se o dia existe ou não, a função vai ser adicionada na variável dayExists
  if (dayExists == true) {
    alert("Dia já está adicionado!")
    return //parar a função toda caso ja tenha adicionado
  }
  nlwSetup.addDay(today) //depois da função dayExists se o dia já existir ele n será adicionado se não ele é adicinado através desta função
}
function save() {
  localStorage.setItem("NlwSetup@habits", JSON.stringify(nlwSetup.data))
  //vai salvar/guardar com uma chave qualquer e um valor, o valor vai ser os dados da aplicação
  //JSON.stringify(nlwSetup.data): vai tranformar o objeto "nlwSetup.data" em string para colocar no valor
  /*console.log(nlwSetup.data)
  //dps de selecionado vai guardar as informações do dia e do habito que foi selecionado*/
}
const data = JSON.parse(localStorage.getItem("NlwSetup@habits")) //criando um objeto pra receber os dados salvos e carregar na pagina
nlwSetup.setData(data) // usando o objeto de uso da biblioteca pra colocar o objeto data nela
nlwSetup.load()

/*const data = {
  //criando objeto pra data em que seus atributos são os hábitos e o valor dos hábitos são os dias em forma de vetor
  study: ["01-01", "01-02", "01-03", "01-04"],
  hydrate: ["01-01", "01-02", "01-03", "01-04"],
  train: ["01-01", "01-02", "01-03", "01-04"],
  sleep_well: ["01-01", "01-02", "01-03", "01-04"],
  fun: ["01-01", "01-02", "01-03", "01-04"],
  eat: ["01-01", "01-02", "01-03", "01-04"],
}
*/
