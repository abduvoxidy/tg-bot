export function getNestedCategories(obj, categoryData) {
  // this function filters categories by subcategory, if category_id
  //will be null it's main category else subcategory
  obj.children = [];
  for (const i in categoryData) {
    if (obj.guid === categoryData[i].category_id) {
      obj.children.push(categoryData[i]);
    }
  }
  for (const j in obj.children) {
    obj.children[j] = getNestedCategories(obj.children[j], categoryData);
  }
  return obj;
}
