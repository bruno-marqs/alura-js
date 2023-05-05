// capturando url do cliente selecionado
const pegaUrl = new URL(window.location)

// atribuindo variavel valor do id da URL
const id = pegaUrl.searchParams.get('id')