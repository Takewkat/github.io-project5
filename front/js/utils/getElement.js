export default function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) { return element} 
  console.log('Element not found')
  return null
}


