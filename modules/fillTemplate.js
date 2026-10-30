// modules/fillTemplate.js
export default function fillTemplate(template, item) {
  let output = template.replace(/\{\{ID\}\}/g, item.id);
  output = output.replace(/\{\{NAME\}\}/g, item.name);
  output = output.replace(/\{\{DESCRIPTION\}\}/g, item.description); 
  output = output.replace(/\{\{CATEGORY\}\}/g, item.category);
  output = output.replace(/\{\{PRICE\}\}/g, Number(item.price).toFixed(2));
  output = output.replace(/\{\{PHOTO\}\}/g, item.photo);

  return output;
}