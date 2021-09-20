export async function getCategories() {
  // Implemente aqui
  const APIMercadoLivreCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await APIMercadoLivreCategories.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const APIMercadoLivreCategoryAndQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestJson = await APIMercadoLivreCategoryAndQuery.json();
  return requestJson;
}
